import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { createServerSupabaseClient, createAdminSupabaseClient } from '@/lib/supabase/server';
import { checkRateLimit } from '@/lib/rateLimiter';

const BookingSchema = z.object({
  service: z.string().min(1, 'Service is required').max(100),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format'),
  location: z.string().min(5, 'Location must be at least 5 characters').max(200),
  phone: z
    .string()
    .min(9, 'Phone number must be 9 digits')
    .max(9, 'Phone number must be 9 digits')
    .regex(/^\d{9}$/, 'Phone number must contain only digits'),
});

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') ?? 'unknown';
    const allowed = await checkRateLimit(ip);

    if (!allowed) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a minute and try again.' },
        { status: 429 }
      );
    }

    const supabase = await createServerSupabaseClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json(
        { error: 'You must be logged in to make a booking.' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const result = BookingSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error.issues[0].message },
        { status: 400 }
      );
    }

    const { service, date, location, phone } = result.data;

    const bookingDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (bookingDate < today) {
      return NextResponse.json(
        { error: 'Booking date cannot be in the past.' },
        { status: 400 }
      );
    }

    const adminSupabase = createAdminSupabaseClient();
    const { data, error } = await adminSupabase
      .from('bookings')
      .insert({
        user_id: user.id,
        service,
        date,
        location,
        phone: `+254${phone}`,
        status: 'pending',
      })
      .select()
      .single();

    if (error) {
      console.error('Supabase insert error:', error);
      return NextResponse.json(
        { error: 'Failed to save booking. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Booking created successfully.', booking: data },
      { status: 201 }
    );

  } catch (err) {
    console.error('Booking API error:', err);
    return NextResponse.json(
      { error: 'An unexpected error occurred.' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') ?? 'unknown';
    const allowed = await checkRateLimit(ip);

    if (!allowed) {
      return NextResponse.json(
        { error: 'Too many requests.' },
        { status: 429 }
      );
    }

    const supabase = await createServerSupabaseClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized.' },
        { status: 401 }
      );
    }

    const { data: bookings, error } = await supabase
      .from('bookings')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      return NextResponse.json(
        { error: 'Failed to fetch bookings.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ bookings }, { status: 200 });

  } catch (err) {
    console.error('GET bookings error:', err);
    return NextResponse.json(
      { error: 'An unexpected error occurred.' },
      { status: 500 }
    );
  }
}
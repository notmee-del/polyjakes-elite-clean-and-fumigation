import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { getStripe } from '@/lib/stripe';
import { createServerSupabaseClient } from '@/lib/supabase/server';
import { checkRateLimit } from '@/lib/rateLimiter';

const PaymentSchema = z.object({
  productName: z.string().min(1).max(200),
  productPrice: z.number().min(1).max(1000000),
  productId: z.string().min(1),
});

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') ?? 'unknown';
    const allowed = await checkRateLimit(ip);

    if (!allowed) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait and try again.' },
        { status: 429 }
      );
    }

    // Check user is logged in
    const supabase = await createServerSupabaseClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json(
        { error: 'You must be logged in to make a purchase.' },
        { status: 401 }
      );
    }

    // Validate request body
    const body = await request.json();
    const result = PaymentSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error.issues[0].message },
        { status: 400 }
      );
    }

    const { productName, productPrice, productId } = result.data;

    // Create Stripe checkout session
    const session = await getStripe().checkout.sessions.create({
      payment_method_types: ['card', 'paypal'],
      mode: 'payment',
      customer_email: user.email,
      line_items: [
        {
          price_data: {
            currency: 'kes',
            product_data: {
              name: productName,
              description: 'PolyJakes Elite Clean & Fumigation',
            },
            unit_amount: productPrice * 100, // Stripe uses cents/lowest unit
          },
          quantity: 1,
        },
      ],
      metadata: {
        user_id: user.id,
        product_id: productId,
      },
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment/cancel`,
    });

    return NextResponse.json({ url: session.url }, { status: 200 });

  } catch (err) {
    console.error('Payment API error:', err);
    return NextResponse.json(
      { error: 'Failed to create payment session.' },
      { status: 500 }
    );
  }
}
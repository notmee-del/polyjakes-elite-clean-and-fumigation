import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { createServerSupabaseClient } from '@/lib/supabase/server';
import { checkRateLimit } from '@/lib/rateLimiter';

const PaymentSchema = z.object({
  productName: z.string().min(1).max(200),
  productPrice: z.number().min(1).max(1000000),
  productId: z.string().min(1),
  paymentMethod: z.enum (['card', 'mpesa']),
  phone: z.string().optional(),
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

    const { productName, productPrice, productId, paymentMethod, phone } = result.data;

    // Generate unique transaction reference
    const txRef = `polyjakes-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;

    // Build the payment payload
    const paymentData = {
      tx_ref: txRef,
      amount: productPrice,
      currency: 'KES',
      redirect_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment/success`,
      meta: {
        user_id: user.id,
        product_id: productId,
      },
      customer: {
        email: user.email,
        phonenumber: phone ?? '',
        name: user.email,
      },
      customizations: {
        title: 'PolyJakes Elite',
        description: productName,
        logo: `${process.env.NEXT_PUBLIC_APP_URL}/logo.png`,
      },
    };

    // For M-Pesa add the phone number
    if (paymentMethod === 'mpesa') {
      if (!phone) {
        return NextResponse.json(
          { error: 'Phone number is required for M-Pesa payments.' },
          { status: 400 }
        );
      }

      // Return payload for M-Pesa — handled client side with Flutterwave inline
      return NextResponse.json({
        method: 'mpesa',
        txRef,
        payload: {
          ...paymentData,
          payment_options: 'mpesa',
        },
      }, { status: 200 });
    }

    // For card payments return the payload for inline checkout
    return NextResponse.json({
      method: 'card',
      txRef,
      payload: {
        ...paymentData,
        payment_options: 'card',
      },
    }, { status: 200 });

  } catch (err) {
    console.error('Flutterwave API error:', err);
    return NextResponse.json(
      { error: 'Failed to create payment session.' },
      { status: 500 }
    );
  }
}
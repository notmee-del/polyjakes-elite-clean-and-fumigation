'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type Props = {
  productId: string;
  productName: string;
  productPrice: number;
  onClose: () => void;
};

export default function PaymentModal({
  productId,
  productName,
  productPrice,
  onClose,
}: Props) {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'mpesa'>('card');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handlePayment = async () => {
    setError('');
    setLoading(true);

    if (paymentMethod === 'mpesa') {
      // M-Pesa goes to Flutterwave
      if (phone.length !== 9) {
        setError('Enter a valid 9-digit phone number for M-Pesa.');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch('/api/payments/flutterwave', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            productId,
            productName,
            productPrice,
            paymentMethod: 'mpesa',
            phone: `+254${phone}`,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          if (response.status === 401) {
            router.push('/login');
            return;
          }
          setError(data.error || 'Something went wrong.');
          setLoading(false);
          return;
        }

        // Load Flutterwave inline for M-Pesa
        const script = document.createElement('script');
        script.src = 'https://checkout.flutterwave.com/v3.js';
        script.onload = () => {
          // @ts-ignore
          window.FlutterwaveCheckout({
            public_key: process.env.NEXT_PUBLIC_FLW_PUBLIC_KEY,
            ...data.payload,
            callback: (response: any) => {
              console.log('M-Pesa response:', response);
              if (response.status === 'successful') {
                window.location.href = '/payment/success';
              } else {
                window.location.href = '/payment/cancel';
              }
            },
            onclose: () => {
              setLoading(false);
            },
          });
        };
        document.body.appendChild(script);

      } catch (err) {
        console.error(err);
        setError('Network error. Please try again.');
        setLoading(false);
      }

    } else {
      // Card goes to Stripe
      try {
        const response = await fetch('/api/payments', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            productId,
            productName,
            productPrice,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          if (response.status === 401) {
            router.push('/login');
            return;
          }
          setError(data.error || 'Something went wrong.');
          setLoading(false);
          return;
        }

        // Redirect to Stripe checkout
        if (data.url) {
          window.location.href = data.url;
        }

      } catch (err) {
        console.error(err);
        setError('Network error. Please try again.');
        setLoading(false);
      }
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)' }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl p-8"
        style={{
          backgroundColor: '#111111',
          border: '1px solid rgba(255,255,255,0.15)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white font-bold text-xl">Choose Payment Method</h2>
          <button
            onClick={onClose}
            className="text-white/40 hover:text-white transition-colors text-xl"
          >
            ✕
          </button>
        </div>

        {/* Product summary */}
        <div
          className="rounded-xl p-4 mb-6"
          style={{ backgroundColor: '#1a1a1a', border: '1px solid rgba(255,255,255,0.1)' }}
        >
          <p className="text-white/60 text-sm">Paying for</p>
          <p className="text-white font-semibold mt-1">{productName}</p>
          <p className="text-green-400 font-bold text-xl mt-1">
            KSh {productPrice.toLocaleString()}
          </p>
        </div>

        {/* Payment method selector */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <button
            onClick={() => setPaymentMethod('card')}
            className={`p-4 rounded-xl border text-sm font-semibold transition-all ${
              paymentMethod === 'card'
                ? 'bg-green-500/10 border-green-500/40 text-green-400'
                : 'border-white/10 text-white/60 hover:border-white/30'
            }`}
            style={{
              backgroundColor: paymentMethod === 'card' ? undefined : '#1a1a1a',
            }}
          >
            💳 Card
            <p className="text-xs font-normal mt-1 opacity-70">via Stripe</p>
          </button>
          <button
            onClick={() => setPaymentMethod('mpesa')}
            className={`p-4 rounded-xl border text-sm font-semibold transition-all ${
              paymentMethod === 'mpesa'
                ? 'bg-green-500/10 border-green-500/40 text-green-400'
                : 'border-white/10 text-white/60 hover:border-white/30'
            }`}
            style={{
              backgroundColor: paymentMethod === 'mpesa' ? undefined : '#1a1a1a',
            }}
          >
            📱 M-Pesa
            <p className="text-xs font-normal mt-1 opacity-70">via Flutterwave</p>
          </button>
        </div>

        {/* M-Pesa phone input */}
        {paymentMethod === 'mpesa' && (
          <div className="mb-6">
            <label className="text-white/60 text-sm mb-2 block">
              M-Pesa Phone Number
            </label>
            <div className="flex gap-2">
              <div
                className="rounded-xl px-4 py-3 text-white/60 text-sm flex items-center flex-shrink-0"
                style={{ backgroundColor: '#0a0a0a', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                🇰🇪 +254
              </div>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                placeholder="712 345 678"
                maxLength={9}
                className="flex-1 rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors placeholder:text-white/20"
                style={{
                  backgroundColor: '#0a0a0a',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              />
            </div>
            <p className="text-white/30 text-xs mt-1">
              You will receive an STK push on this number
            </p>
          </div>
        )}

        {/* Card info */}
        {paymentMethod === 'card' && (
          <div
            className="mb-6 rounded-xl p-4"
            style={{ backgroundColor: '#1a1a1a', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <p className="text-white/50 text-sm">
              You will be redirected to a secure Stripe checkout page.
              Visa and Mastercard accepted.
            </p>
          </div>
        )}

        {/* Error */}
        {error && (
          <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3 mb-4">
            {error}
          </p>
        )}

        {/* Pay button */}
        <button
          onClick={handlePayment}
          disabled={loading}
          className="w-full bg-green-500 hover:bg-green-400 disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold py-3 rounded-xl transition-all"
        >
          {loading
            ? 'Processing...'
            : `Pay KSh ${productPrice.toLocaleString()} via ${
                paymentMethod === 'mpesa' ? 'M-Pesa' : 'Card'
              }`}
        </button>

        <p className="text-white/20 text-xs text-center mt-4">
          {paymentMethod === 'card' ? 'Secured by Stripe 🔒' : 'Secured by Flutterwave 🔒'}
        </p>
      </div>
    </div>
  );
}
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type Props = {
  productId: string;
  productName: string;
  productPrice: number;
};

export default function BuyNowButton({
  productId,
  productName,
  productPrice,
}: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleBuy = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/payments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId, productName, productPrice }),
      });

      const data = await response.json();

      if (!response.ok) {
        // If not logged in send to login page
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
  };

  return (
    <div>
      <button
        onClick={handleBuy}
        disabled={loading}
        className="text-xs font-semibold bg-green-500 hover:bg-green-400 disabled:opacity-50 disabled:cursor-not-allowed text-black px-4 py-2 rounded-lg transition-all duration-200"
      >
        {loading ? 'Loading...' : 'Buy Now'}
      </button>
      {error && (
        <p className="text-red-400 text-xs mt-1">{error}</p>
      )}
    </div>
  );
}
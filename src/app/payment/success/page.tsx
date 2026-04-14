import Link from 'next/link';

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="text-center max-w-md">

        <div className="text-6xl mb-6">✅</div>

        <h1 className="text-white font-bold text-3xl mb-3">
          Payment Successful!
        </h1>
        <p className="text-white/50 text-base mb-8">
          Thank you for your purchase. Your order has been confirmed and we will
          be in touch shortly.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/dashboard"
            className="bg-green-500 hover:bg-green-400 text-black font-bold px-6 py-3 rounded-xl transition-all"
          >
            Go to Dashboard
          </Link>
          <Link
            href="/products"
            className="bg-white/5 hover:bg-white/10 border border-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-all"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
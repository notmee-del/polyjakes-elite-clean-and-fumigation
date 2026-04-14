import Link from 'next/link';

export default function PaymentCancelPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="text-center max-w-md">

        <div className="text-6xl mb-6">❌</div>

        <h1 className="text-white font-bold text-3xl mb-3">
          Payment Cancelled
        </h1>
        <p className="text-white/50 text-base mb-8">
          Your payment was cancelled. No charge was made to your account.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/products"
            className="bg-green-500 hover:bg-green-400 text-black font-bold px-6 py-3 rounded-xl transition-all"
          >
            Back to Products
          </Link>
          <Link
            href="/"
            className="bg-white/5 hover:bg-white/10 border border-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-all"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
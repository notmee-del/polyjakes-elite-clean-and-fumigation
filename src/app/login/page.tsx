'use client';

export const dynamic = 'force-dynamic';

import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-24 relative overflow-hidden transition-colors duration-300">
      
      {/* Background patterns */}
      <div className="absolute inset-0 oversight-grid opacity-30 dark:opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-green-500/5 dark:bg-green-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-md relative z-10 space-y-8">
        
        {/* Brand/Logo Header */}
        <div className="text-center">
          <Link href="/">
            <span className="text-green-600 dark:text-green-400 text-3xl font-extrabold tracking-tight">
              PolyJakes
            </span>
          </Link>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-3 font-semibold uppercase tracking-wider">
            Elite Clean & Fumigation
          </p>
        </div>

        {/* Login Box */}
        <div className="bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800/50 rounded-2xl p-8 shadow-sm">
          <h1 className="text-zinc-900 dark:text-white font-bold text-2xl mb-2 text-center">
            Sign In
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-8 text-center">
            Log in or sign up to manage your bookings and access your client dashboard securely.
          </p>

          <a
            href="/auth/login"
            className="w-full bg-green-500 hover:bg-green-400 text-black font-extrabold py-4 rounded-xl shadow-lg shadow-green-500/10 hover:shadow-green-500/20 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-3"
          >
            <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3.238 6h6.476c.205 1.547.785 3.09 1.762 4.398l-5-1.554 1.738-1.57c.394-.356.593-.896.523-1.424-.07-.529-.399-.982-.879-1.21-.481-.228-1.042-.204-1.5.064l-2.02 1.189v-1.127l1.328-.847c.504-.321.73-.935.549-1.493-.182-.559-.75-.926-1.341-.869l-3.328.328c-.591.057-1.066.528-1.127 1.119-.062.59.3 1.159.859 1.343l.859.282v1.544l-2.019-1.189c-.458-.268-1.019-.292-1.5-.064-.48.228-.809.681-.879 1.21-.07.528.129 1.068.523 1.424l1.738 1.57-5 1.554c.977-1.308 1.557-2.851 1.762-4.398z"/>
            </svg>
            Continue with Auth0
          </a>

          <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-900/60 text-center">
            <Link href="/" className="text-zinc-500 hover:text-green-600 dark:text-zinc-400 dark:hover:text-green-400 text-sm font-semibold transition-colors">
              ← Go back home
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
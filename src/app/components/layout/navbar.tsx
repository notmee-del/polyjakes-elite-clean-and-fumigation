'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const { user, isLoading } = useUser();

  // Sync state with DOM class on mount
  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    const timer = setTimeout(() => {
      setTheme(isDark ? 'dark' : 'light');
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    if (theme === 'dark') {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-md border-b border-zinc-200/50 dark:border-zinc-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo Brand */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-green-600 dark:text-green-400 text-xl font-extrabold tracking-tight">
              PolyJakes
            </span>
            <span className="hidden sm:block text-zinc-500 dark:text-zinc-400 text-xs font-semibold uppercase tracking-wider">
              Elite Clean & Fumigation
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/#about" className="text-zinc-600 dark:text-zinc-400 hover:text-green-600 dark:hover:text-green-400 text-sm font-semibold transition-colors">
              About Us
            </Link>
            <Link href="/#services" className="text-zinc-600 dark:text-zinc-400 hover:text-green-600 dark:hover:text-green-400 text-sm font-semibold transition-colors">
              Services
            </Link>
            <Link href="/#contact" className="text-zinc-600 dark:text-zinc-400 hover:text-green-600 dark:hover:text-green-400 text-sm font-semibold transition-colors">
              Contact
            </Link>
            <Link href="/#faq" className="text-zinc-600 dark:text-zinc-400 hover:text-green-600 dark:hover:text-green-400 text-sm font-semibold transition-colors mr-2">
              FAQ
            </Link>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-200/50 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 cursor-pointer transition-all duration-200 mr-2"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {!isLoading && (
              user ? (
                <div className="flex items-center gap-4">
                  <Link
                    href="/dashboard"
                    className="text-zinc-600 dark:text-zinc-400 hover:text-green-600 dark:hover:text-green-400 text-sm font-semibold transition-colors"
                  >
                    Dashboard
                  </Link>
                  <a
                    href="/auth/logout"
                    className="bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800 font-bold text-sm px-4 py-2.5 rounded-xl transition-all"
                  >
                    Logout
                  </a>
                </div>
              ) : (
                <Link
                  href="/login"
                  className="bg-green-500 hover:bg-green-400 text-black font-bold text-sm px-5 py-2.5 rounded-xl transition-all shadow-md shadow-green-500/10 hover:shadow-green-500/20 hover:scale-105 active:scale-95"
                >
                  Login
                </Link>
              )
            )}
          </div>

          {/* Mobile Right Bar */}
          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <button
              className="p-2 rounded-xl text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-zinc-200/50 dark:border-zinc-800/50 flex flex-col gap-4">
            <Link href="/#about" className="text-zinc-600 dark:text-zinc-400 hover:text-green-500 font-semibold text-sm transition-colors" onClick={() => setMenuOpen(false)}>
              About Us
            </Link>
            <Link href="/#services" className="text-zinc-600 dark:text-zinc-400 hover:text-green-500 font-semibold text-sm transition-colors" onClick={() => setMenuOpen(false)}>
              Services
            </Link>
            <Link href="/#contact" className="text-zinc-600 dark:text-zinc-400 hover:text-green-500 font-semibold text-sm transition-colors" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
            <Link href="/#faq" className="text-zinc-600 dark:text-zinc-400 hover:text-green-500 font-semibold text-sm transition-colors" onClick={() => setMenuOpen(false)}>
              FAQ
            </Link>
            
            {!isLoading && (
              user ? (
                <>
                  <Link href="/dashboard" className="text-zinc-600 dark:text-zinc-400 hover:text-green-500 font-semibold text-sm transition-colors" onClick={() => setMenuOpen(false)}>
                    Dashboard
                  </Link>
                  <a
                    href="/auth/logout"
                    className="bg-zinc-200 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 font-bold text-center text-sm px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800"
                    onClick={() => setMenuOpen(false)}
                  >
                    Logout
                  </a>
                </>
              ) : (
                <Link
                  href="/login"
                  className="bg-green-500 text-black font-bold text-center text-sm px-4 py-3 rounded-xl shadow-md"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
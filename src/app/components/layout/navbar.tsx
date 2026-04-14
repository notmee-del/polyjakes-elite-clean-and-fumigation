'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <Link href="/" className="flex items-center gap-2">
            <span className="text-green-400 text-xl font-bold tracking-tight">
              PolyJakes
            </span>
            <span className="hidden sm:block text-white/60 text-sm">
              Elite Clean & Fumigation
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/services" className="text-white/70 hover:text-white text-sm transition-colors">
              Services
            </Link>
            <Link href="/products" className="text-white/70 hover:text-white text-sm transition-colors">
              Products
            </Link>
            <Link href="/faq" className="text-white/70 hover:text-white text-sm transition-colors">
              FAQ
            </Link>
            <Link
              href="/login"
              className="bg-green-500 hover:bg-green-400 text-black font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
            >
              Login
            </Link>
          </div>

          <button
            className="md:hidden text-white/70 hover:text-white"
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

        {menuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 flex flex-col gap-4">
            <Link href="/services" className="text-white/70 hover:text-white text-sm" onClick={() => setMenuOpen(false)}>
              Services
            </Link>
            <Link href="/products" className="text-white/70 hover:text-white text-sm" onClick={() => setMenuOpen(false)}>
              Products
            </Link>
            <Link href="/faq" className="text-white/70 hover:text-white text-sm" onClick={() => setMenuOpen(false)}>
              FAQ
            </Link>
            <Link
              href="/login"
              className="bg-green-500 text-black font-semibold text-sm px-4 py-2 rounded-lg w-fit"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
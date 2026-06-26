import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 transition-colors duration-300">
      
      {/* Oversight Grid and Dot Backdrops */}
      <div className="absolute inset-0 oversight-grid opacity-50 dark:opacity-30 pointer-events-none" />
      <div className="absolute inset-0 oversight-dots opacity-40 dark:opacity-20 pointer-events-none" />
      
      {/* Light/Dark Radial Highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-green-500/5 dark:bg-green-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">

        {/* Pulsing Badge */}
        <div className="inline-flex items-center gap-2 bg-green-500/10 dark:bg-green-500/10 border border-green-500/20 dark:border-green-500/30 text-green-700 dark:text-green-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-8 select-none transition-all duration-300">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-green-400 animate-pulse" />
          Elite Fumigation & Cleaning in Nairobi
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-zinc-900 dark:text-white leading-[1.1] tracking-tight mb-8">
          Your Space,{' '}
          <span className="text-green-600 dark:text-green-400">Pest-Free</span>{' '}
          and Spotless.
        </h1>

        {/* Description */}
        <p className="text-zinc-600 dark:text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          PolyJakes Elite delivers certified residential and commercial pest control, complete fumigation, and deep cleaning services across Nairobi. Safe, thorough, and guaranteed.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/dashboard"
            className="w-full sm:w-auto bg-green-500 hover:bg-green-400 text-black font-extrabold text-base px-8 py-4 rounded-xl shadow-lg shadow-green-500/10 transition-all hover:scale-105 active:scale-95 text-center"
          >
            Book a Service
          </Link>
          <Link
            href="/#contact"
            className="w-full sm:w-auto bg-white dark:bg-zinc-900/60 hover:bg-zinc-50 dark:hover:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 font-bold text-base px-8 py-4 rounded-xl transition-all hover:scale-105 active:scale-95 text-center"
          >
            Get Free Quote
          </Link>
        </div>

        {/* Feature Checkmarks Bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-zinc-200/60 dark:border-zinc-800/40 max-w-3xl mx-auto text-zinc-500 dark:text-zinc-400 text-sm font-semibold">
          <div className="flex items-center justify-center gap-2">
            <span className="text-green-600 dark:text-green-400">✓</span> Licensed & Insured
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-green-600 dark:text-green-400">✓</span> Eco-Safe Chemicals
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-green-600 dark:text-green-400">✓</span> Same-Day Service
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-green-600 dark:text-green-400">✓</span> 100% Satisfaction
          </div>
        </div>

      </div>
    </section>
  );
}
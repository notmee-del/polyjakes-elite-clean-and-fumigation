import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(74,222,128,0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(74,222,128,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">

        <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-medium px-3 py-1 rounded-full mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Professional Fumigation & Cleaning Services
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
          Your Space,{' '}
          <span className="text-green-400">Pest-Free</span>{' '}
          & Spotless
        </h1>

        <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          PolyJakes Elite delivers professional fumigation, pest control, and deep cleaning services.
          Trusted, certified, and thorough — every time.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/dashboard"
            className="w-full sm:w-auto bg-green-500 hover:bg-green-400 text-black font-bold text-base px-8 py-4 rounded-xl transition-all hover:scale-105 active:scale-95"
          >
            Book a Service
          </Link>
          <Link
            href="/products"
            className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/20 text-white font-semibold text-base px-8 py-4 rounded-xl transition-all"
          >
            View Products
          </Link>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/40 text-sm">
          <span>✓ Licensed & Insured</span>
          <span>✓ Eco-Friendly Products</span>
          <span>✓ Same-Day Service</span>
          <span>✓ 100% Satisfaction Guarantee</span>
        </div>

      </div>
    </section>
  );
}
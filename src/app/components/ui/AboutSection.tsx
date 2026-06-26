'use client';

export default function AboutSection() {
  const stats = [
    { value: '5+', label: 'Years of Excellence' },
    { value: '1,200+', label: 'Homes Pest-Free' },
    { value: '350+', label: 'Commercial Contracts' },
    { value: '100%', label: 'Eco-Safe Certified' },
  ];

  const values = [
    {
      icon: (
        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Licensed & Certified',
      description: 'Fully certified pest control operators compliant with Nairobi public health and environmental regulations.',
    },
    {
      icon: (
        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Eco-Friendly Extermination',
      description: 'We prioritize non-hazardous, low-toxicity, biodegradable products safe for children, pets, and gardens.',
    },
    {
      icon: (
        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Trained Professionals',
      description: 'Our staff undergoes background checks and rigorous training in modern fumigation and deep clean practices.',
    },
    {
      icon: (
        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: 'Thorough Guarantee',
      description: 'If pests reappear within 30 days after our full fumigation treatment, we will retreat your space for free.',
    },
  ];

  return (
    <section id="about" className="relative py-24 px-4 overflow-hidden border-t border-zinc-200/50 dark:border-zinc-800/30">
      {/* Subtle background graphics */}
      <div className="absolute inset-0 oversight-dots opacity-45 dark:opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-green-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text & Stats */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <span className="text-green-600 dark:text-green-400 text-sm font-semibold uppercase tracking-wider">
                Who We Are
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mt-3 mb-6">
                {"Nairobi’s Trusted Name in Hygiene & Pest Control"}
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-6">
                {"At PolyJakes Elite Clean & Fumigation, we believe that a clean, pest-free environment is essential for health, productivity, and peace of mind."}
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed mb-8">
                {"Operating across Nairobi and neighboring counties, we combine state-of-the-art equipment, eco-friendly chemical formulations, and highly trained specialists to deliver unparalleled results. Whether it's a minor insect issue in your home or a large-scale commercial cleaning contract, we handle it with absolute precision."}
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-zinc-200 dark:border-zinc-800">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-3xl font-extrabold text-green-600 dark:text-green-400">
                    {stat.value}
                  </span>
                  <span className="text-zinc-500 dark:text-zinc-400 text-sm font-medium mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Core Value Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="group flex flex-col p-6 bg-white dark:bg-zinc-900/40 hover:bg-zinc-50 dark:hover:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800/40 hover:border-green-500/30 dark:hover:border-green-500/20 rounded-2xl shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-3 bg-green-500/10 rounded-xl w-fit mb-5">
                  {val.icon}
                </div>
                <h3 className="text-zinc-900 dark:text-white font-bold text-lg mb-2">
                  {val.title}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

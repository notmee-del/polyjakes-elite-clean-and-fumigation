const services = [
  {
    id: '1',
    icon: '🐛',
    name: 'Pest Control',
    description:
      'Complete elimination of cockroaches, ants, bedbugs, rodents and all common household pests using safe, certified chemicals.',
    price: 'From KSh 2,500',
  },
  {
    id: '2',
    icon: '💨',
    name: 'Fumigation',
    description:
      'Full property fumigation for residential and commercial spaces. We seal and treat the entire premises for lasting results.',
    price: 'From KSh 5,000',
  },
  {
    id: '3',
    icon: '🧹',
    name: 'Deep Cleaning',
    description:
      'Professional deep cleaning of homes, offices, and rental properties. Move-in and move-out cleaning available.',
    price: 'From KSh 3,500',
  },
  {
    id: '4',
    icon: '🐀',
    name: 'Rodent Control',
    description:
      'Targeted rodent extermination and prevention. We identify entry points and seal them to stop re-infestation.',
    price: 'From KSh 3,000',
  },
  {
    id: '5',
    icon: '🌿',
    name: 'Lawn Treatment',
    description:
      'Pest treatment for gardens, lawns and outdoor spaces. Safe for children and pets after the recommended drying period.',
    price: 'From KSh 2,000',
  },
  {
    id: '6',
    icon: '🏢',
    name: 'Commercial Services',
    description:
      'Scheduled maintenance contracts for restaurants, hotels, warehouses and offices. Certificates provided.',
    price: 'Custom Quote',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 px-4 overflow-hidden border-t border-zinc-200/50 dark:border-zinc-800/30">
      
      {/* Subtle details */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-green-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-green-600 dark:text-green-400 text-sm font-semibold uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mt-3 mb-4">
            Our Services
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto text-lg">
            Professional pest control and cleaning solutions for homes and businesses across Nairobi.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white dark:bg-zinc-900/30 hover:bg-zinc-50 dark:hover:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800/40 hover:border-green-500/30 dark:hover:border-green-500/20 rounded-2xl p-8 shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="text-4xl mb-6 select-none bg-zinc-100 dark:bg-zinc-950 border border-zinc-200/30 dark:border-zinc-800/50 w-16 h-16 rounded-xl flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-zinc-900 dark:text-white font-bold text-xl mb-3">
                  {service.name}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-900/40">
                <span className="text-green-600 dark:text-green-400 font-bold text-sm">
                  {service.price}
                </span>
                <a
                  href="/dashboard"
                  className="text-xs font-semibold bg-green-500/10 dark:bg-green-500/10 border border-green-500/20 dark:border-green-500/30 text-green-700 dark:text-green-400 hover:bg-green-500 dark:hover:bg-green-500 hover:text-black dark:hover:text-black px-4 py-2.5 rounded-lg transition-all duration-200 cursor-pointer"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
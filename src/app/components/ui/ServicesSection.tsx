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
    <section id="services" className="bg-black py-24 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-green-400 text-sm font-medium uppercase tracking-widest">
            What We Do
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">
            Our Services
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-lg">
            Professional pest control and cleaning solutions for homes and businesses across Nairobi.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-green-500/40 rounded-2xl p-6 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-white font-semibold text-xl mb-2">
                {service.name}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-green-400 font-medium text-sm">
                  {service.price}
                </span>
                <a
                  href="/dashboard"
                  className="text-xs font-semibold bg-green-500/10 hover:bg-green-500 text-green-400 hover:text-black px-4 py-2 rounded-lg transition-all duration-200"
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
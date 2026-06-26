'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: 'Pest Control',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate API request
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', service: 'Pest Control', message: '' });
    }, 1500);
  };

  const services = [
    'Pest Control',
    'Fumigation',
    'Deep Cleaning',
    'Rodent Control',
    'Lawn Treatment',
    'Commercial Services',
    'Other',
  ];

  return (
    <section id="contact" className="relative py-24 px-4 overflow-hidden border-t border-zinc-200/50 dark:border-zinc-800/30">
      <div className="absolute inset-0 oversight-grid opacity-30 dark:opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-green-600 dark:text-green-400 text-sm font-semibold uppercase tracking-wider">
            Get in Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mt-3 mb-4">
            Contact PolyJakes
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto text-lg">
            Have questions about our services or need a custom quote? We are ready to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 bg-white dark:bg-zinc-900/30 border border-zinc-200/80 dark:border-zinc-800/40 rounded-2xl">
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-500/10 text-green-600 dark:text-green-400 rounded-xl">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Phone</h4>
                    <a href="tel:+254726108507" className="text-zinc-900 dark:text-white font-medium text-lg hover:text-green-500 transition-colors mt-1 block">
                      +254 726 108 507
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-500/10 text-green-600 dark:text-green-400 rounded-xl">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Email</h4>
                    <a href="mailto:Pkhamalishi@gmail.com" className="text-zinc-900 dark:text-white font-medium text-lg hover:text-green-500 transition-colors mt-1 block break-all">
                      Pkhamalishi@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-500/10 text-green-600 dark:text-green-400 rounded-xl">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Office Location</h4>
                    <p className="text-zinc-900 dark:text-white font-medium text-lg mt-1">
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-500/10 text-green-600 dark:text-green-400 rounded-xl">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Working Hours</h4>
                    <p className="text-zinc-900 dark:text-white font-medium text-lg mt-1">
                      Mon - Sat: 8:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-green-500/5 dark:bg-green-500/10 border border-green-500/20 rounded-2xl">
              <p className="text-zinc-700 dark:text-green-300 text-sm leading-relaxed">
                🚀 <strong>Emergency Fumigation?</strong> We offer same-day emergency pest services in Nairobi. Call us directly for rapid dispatch.
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="p-8 bg-white dark:bg-zinc-900/30 border border-zinc-200/80 dark:border-zinc-800/40 rounded-2xl space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="px-4 py-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/10 text-zinc-900 dark:text-white"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="px-4 py-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/10 text-zinc-900 dark:text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Service Type */}
              <div className="flex flex-col gap-2">
                <label htmlFor="service" className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                  Required Service
                </label>
                <select
                  id="service"
                  value={formState.service}
                  onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                  className="px-4 py-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/10 text-zinc-900 dark:text-white"
                >
                  {services.map((svc) => (
                    <option key={svc} value={svc} className="dark:bg-zinc-950">
                      {svc}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                  Your Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="px-4 py-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/10 text-zinc-900 dark:text-white resize-none"
                  placeholder="Describe your pest or cleaning requirements in detail..."
                />
              </div>

              {/* Submit Status Feedbacks */}
              {status === 'success' && (
                <div className="p-4 bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20 rounded-xl text-sm font-medium">
                  ✓ Message sent successfully! Our team will contact you within 2 hours.
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-green-500 hover:bg-green-400 disabled:bg-zinc-800 text-black font-bold py-4 rounded-xl shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2"
              >
                {status === 'submitting' ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-black" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

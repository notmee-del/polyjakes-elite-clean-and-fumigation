'use client';

import { useState } from 'react';

const faqs = [
  {
    id: '1',
    question: 'How long does a fumigation treatment take?',
    answer:
      'Most residential fumigation treatments take between 2 to 4 hours depending on the size of the property. Commercial properties may take longer. We advise vacating the premises during treatment and for 2 hours after.',
  },
  {
    id: '2',
    question: 'Are your chemicals safe for children and pets?',
    answer:
      'Yes. We use certified, approved chemicals that are safe once dry. We recommend keeping children and pets away from treated areas for at least 2 to 3 hours after treatment. Our technicians will advise you on the specific waiting period.',
  },
  {
    id: '3',
    question: 'How do I prepare my home before fumigation?',
    answer:
      'You should cover or store food items, remove pets and plants from the treatment area, and ensure technicians have access to all rooms including wardrobes and under furniture. We will provide a full preparation checklist when you book.',
  },
  {
    id: '4',
    question: 'Do you offer a guarantee on your services?',
    answer:
      'Yes. We offer a 30-day re-treatment guarantee on all pest control services. If pests return within 30 days of treatment, we come back and re-treat at no extra charge.',
  },
  {
    id: '5',
    question: 'Can I book same-day service?',
    answer:
      'Same-day service is available subject to technician availability. We recommend booking at least 24 hours in advance to guarantee your preferred time slot. Call us directly for urgent same-day requests.',
  },
  {
    id: '6',
    question: 'Do you serve areas outside Nairobi?',
    answer:
      'Currently we serve Nairobi and surrounding areas including Kiambu, Machakos, and Kajiado counties. Contact us directly for service availability in your specific location.',
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative py-24 px-4 overflow-hidden border-t border-zinc-200/50 dark:border-zinc-800/30">
      
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-green-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-green-600 dark:text-green-400 text-sm font-semibold uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mt-3 mb-4">
            Common Questions
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg">
            Everything you need to know before booking our services.
          </p>
        </div>

        {/* FAQ items */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white dark:bg-zinc-900/20 border border-zinc-200 dark:border-zinc-800/50 hover:border-zinc-300 dark:hover:border-zinc-700 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm"
            >
              {/* Question Row */}
              <button
                onClick={() => toggle(faq.id)}
                className="w-full flex items-center justify-between px-6 py-5 text-left bg-zinc-50/50 dark:bg-zinc-900/10 hover:bg-zinc-100/50 dark:hover:bg-zinc-900/30 transition-colors duration-200 cursor-pointer"
              >
                <span className="text-zinc-900 dark:text-white font-bold text-base pr-4">
                  {faq.question}
                </span>
                <span className="text-green-600 dark:text-green-400 text-xl font-bold flex-shrink-0 w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                  {openId === faq.id ? '−' : '+'}
                </span>
              </button>

              {/* Answer Row */}
              {openId === faq.id && (
                <div className="px-6 py-5 bg-white dark:bg-zinc-950/20 border-t border-zinc-100 dark:border-zinc-900/40">
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 pt-4">
          <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-4">Still have questions?</p>
          <a
            href="tel:+254726108507"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-green-500/10 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            📞 Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
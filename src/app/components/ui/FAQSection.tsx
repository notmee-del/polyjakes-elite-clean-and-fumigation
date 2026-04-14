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
    <section id="faq" className="bg-black py-24 px-4 border-t border-white/5">
      <div className="max-w-3xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-green-400 text-sm font-medium uppercase tracking-widest">
            FAQ
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">
            Common Questions
          </h2>
          <p className="text-white/50 text-lg">
            Everything you need to know before booking.
          </p>
        </div>

        {/* FAQ items */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-white/10 hover:border-white/20 rounded-2xl overflow-hidden transition-all duration-200"
            >
              {/* Question row */}
              <button
                onClick={() => toggle(faq.id)}
                className="w-full flex items-center justify-between px-6 py-5 text-left bg-white/5 hover:bg-white/10 transition-colors duration-200"
              >
                <span className="text-white font-medium text-base pr-4">
                  {faq.question}
                </span>
                <span className="text-green-400 text-xl flex-shrink-0">
                  {openId === faq.id ? '−' : '+'}
                </span>
              </button>

              {/* Answer */}
              {openId === faq.id && (
                <div className="px-6 py-5 bg-black border-t border-white/5">
                  <p className="text-white/60 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-white/40 text-sm mb-4">Still have questions?</p>
          
            <a href="tel:+254726108507"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black font-bold px-6 py-3 rounded-xl transition-all"
            >
              📞 Call Us Now
            </a>
        </div>
      </div>
    </section>
  );
}
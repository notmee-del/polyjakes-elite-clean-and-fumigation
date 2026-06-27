export const dynamic = 'force-dynamic';

import Link from 'next/link';
import AdBanner from '../components/ui/AdBanner';

export default function TermsPage() {
  const sections = [
    {
      title: '1. Agreement to Terms',
      content: 'By accessing or using the PolyJakes Elite Clean & Fumigation website and services, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, you are prohibited from using the site and must discontinue use immediately.',
    },
    {
      title: '2. Services & Booking Conditions',
      content: 'We provide residential and commercial pest control, fumigation, and deep cleaning services. Bookings are subject to availability. By scheduling a service, you agree to provide our technicians with access to the specified premises at the scheduled time. Cancellations must be made at least 24 hours prior to the scheduled service time to avoid a cancellation fee.',
    },
    {
      title: '3. Payments & Secure Gateways',
      content: 'All service fees are due at the time of booking or upon service completion as specified. Payments are securely processed via Stripe and Flutterwave. We reserve the right to limit services or refuse booking to any person or geographic region.',
    },
    {
      title: '4. Refund & Service Guarantee Policy',
      content: 'Refunds are handled case-by-case. For our services, if you are not fully satisfied, you must notify us within 24 hours of service completion, and we will work to resolve the issue under our 30-day satisfaction guarantee, including complimentary re-treatment if necessary.',
    },
    {
      title: '5. Customer Responsibilities',
      content: 'You are responsible for preparing the service premises according to the guidelines provided by our team (e.g., storing open food, evacuating children/pets, clearing spaces). Failure to prepare the premises may result in service delays or cancellation at your expense.',
    },
    {
      title: '6. Limitation of Liability',
      content: 'To the maximum extent permitted by law, PolyJakes and its technicians shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our services. Our total liability for any claim shall not exceed the amount paid by you for the specific service in question.',
    },
    {
      title: '7. Governing Law',
      content: 'These terms and your use of our services are governed by and construed in accordance with the laws of Kenya, without regard to its conflict of law principles. Any legal action arising under these terms shall be filed in the competent courts of Nairobi, Kenya.',
    },
  ];

  return (
    <div className="relative min-h-screen py-24 px-4 overflow-hidden transition-colors duration-300">
      {/* Background patterns */}
      <div className="absolute inset-0 oversight-grid opacity-30 dark:opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto z-10 space-y-12">
        
        {/* Back Link */}
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-green-600 dark:text-zinc-400 dark:hover:text-green-400 text-sm font-semibold transition-colors">
          <span>←</span> Back to Home
        </Link>

        {/* Header */}
        <div className="border-b border-zinc-200 dark:border-zinc-800 pb-8">
          <span className="text-green-600 dark:text-green-400 text-sm font-bold uppercase tracking-wider">
            User Agreement
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white mt-3">
            Terms of Service
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 mt-2 text-sm">
            Last Updated: June 26, 2026
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {sections.map((sec, idx) => (
            <div key={idx} className="space-y-3">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
                {sec.title}
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed">
                {sec.content}
              </p>
            </div>
          ))}
        </div>

        <AdBanner adSlot="terms_page_mid" />

        {/* Support Info Box */}
        <div className="p-8 bg-white dark:bg-zinc-900/30 border border-zinc-200/80 dark:border-zinc-800/40 rounded-2xl">
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
            Need further clarification?
          </h3>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-4">
            If you have questions about these terms, please contact us:
          </p>
          <div className="text-sm font-semibold text-zinc-800 dark:text-zinc-300 space-y-1">
            <p>PolyJakes Elite Clean & Fumigation</p>
            <p>Email: Pkhamalishi@gmail.com</p>
            <p>Phone: +254 726 108 507</p>
            <p>Nairobi, Kenya</p>
          </div>
        </div>

      </div>
    </div>
  );
}

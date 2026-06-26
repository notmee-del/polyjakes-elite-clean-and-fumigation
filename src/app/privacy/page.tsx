export const dynamic = 'force-dynamic';

import Link from 'next/link';

export default function PrivacyPage() {
  const sections = [
    {
      title: '1. Introduction',
      content: 'Welcome to PolyJakes Elite Clean & Fumigation ("we", "our", "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy policy, or our practices with regards to your personal information, please contact us at Pkhamalishi@gmail.com.',
    },
    {
      title: '2. Information We Collect',
      content: 'We collect personal information that you voluntarily provide to us when you register on our website, express an interest in obtaining information about us or our products and services, or otherwise when you contact us. This may include names, phone numbers, email addresses, billing addresses, service locations, and payment card details (processed securely via our payment gateways, Flutterwave and Stripe).',
    },
    {
      title: '3. How We Use Your Information',
      content: 'We use personal information collected via our website for a variety of business purposes, including: to facilitate account creation and logon, to post testimonials with your consent, to request feedback, to enable user-to-user communications, to manage user bookings, to process payments, and to send administrative information, marketing and promotional communications.',
    },
    {
      title: '4. Sharing Your Information',
      content: 'We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We share data with our trusted third-party service providers (such as Stripe and Flutterwave) solely to perform services for us or on your behalf, including credit card processing and billing.',
    },
    {
      title: '5. Data Security',
      content: 'We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal information, transmission of personal info to and from our website is at your own risk.',
    },
    {
      title: '6. Your Privacy Rights',
      content: 'In some regions, you have certain rights under applicable data protection laws. These may include the right to request access and obtain a copy of your personal info, to request rectification or erasure, or to restrict processing of your data. To make such a request, please use the contact details provided below.',
    },
    {
      title: '7. Updates to This Policy',
      content: 'We may update this privacy policy from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. We encourage you to review this privacy policy frequently to be informed of how we are protecting your information.',
    },
  ];

  return (
    <div className="relative min-h-screen py-24 px-4 overflow-hidden transition-colors duration-300">
      {/* Background patterns */}
      <div className="absolute inset-0 oversight-grid opacity-30 dark:opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto z-10 space-y-12">
        
        {/* Back Link */}
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-green-600 dark:text-zinc-400 dark:hover:text-green-400 text-sm font-semibold transition-colors">
          <span>←</span> Back to Home
        </Link>

        {/* Header */}
        <div className="border-b border-zinc-200 dark:border-zinc-800 pb-8">
          <span className="text-green-600 dark:text-green-400 text-sm font-bold uppercase tracking-wider">
            Trust & Security
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white mt-3">
            Privacy Policy
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

        {/* Contact Info Footer */}
        <div className="p-8 bg-white dark:bg-zinc-900/30 border border-zinc-200/80 dark:border-zinc-800/40 rounded-2xl">
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
            Questions about this policy?
          </h3>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-4">
            If you have questions or comments about this policy, you may email us or contact us by post at:
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

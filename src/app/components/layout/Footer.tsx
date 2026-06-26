import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-100 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-900 py-16 px-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Column 1: Brand & Desc */}
        <div className="space-y-4">
          <h3 className="text-green-600 dark:text-green-400 font-extrabold text-xl">PolyJakes</h3>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
            Elite Clean & Fumigation. Professional pest control, fumigation, and deep cleaning services across Nairobi and surrounding areas.
          </p>
          <p className="text-xs text-zinc-400 dark:text-zinc-500">
            Certified, secure, and eco-friendly.
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <h4 className="text-zinc-900 dark:text-white font-bold text-sm mb-4 uppercase tracking-wider">
            Company
          </h4>
          <ul className="flex flex-col gap-2.5">
            <li>
              <Link href="/#about" className="text-zinc-600 dark:text-zinc-400 hover:text-green-600 dark:hover:text-green-400 text-sm transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/#services" className="text-zinc-600 dark:text-zinc-400 hover:text-green-600 dark:hover:text-green-400 text-sm transition-colors">
                Our Services
              </Link>
            </li>
            <li>
              <Link href="/#products" className="text-zinc-600 dark:text-zinc-400 hover:text-green-600 dark:hover:text-green-400 text-sm transition-colors">
                Shop Products
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="text-zinc-600 dark:text-zinc-400 hover:text-green-600 dark:hover:text-green-400 text-sm transition-colors">
                FAQ & Help
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Legal & Support */}
        <div>
          <h4 className="text-zinc-900 dark:text-white font-bold text-sm mb-4 uppercase tracking-wider">
            Legal & Trust
          </h4>
          <ul className="flex flex-col gap-2.5">
            <li>
              <Link href="/privacy" className="text-zinc-600 dark:text-zinc-400 hover:text-green-600 dark:hover:text-green-400 text-sm transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-zinc-600 dark:text-zinc-400 hover:text-green-600 dark:hover:text-green-400 text-sm transition-colors">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="text-zinc-600 dark:text-zinc-400 hover:text-green-600 dark:hover:text-green-400 text-sm transition-colors">
                Book Inspection
              </Link>
            </li>
            <li>
              <Link href="/login" className="text-zinc-600 dark:text-zinc-400 hover:text-green-600 dark:hover:text-green-400 text-sm transition-colors">
                Client Portal
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h4 className="text-zinc-900 dark:text-white font-bold text-sm mb-4 uppercase tracking-wider">
            Nairobi Office
          </h4>
          <ul className="flex flex-col gap-3 text-zinc-600 dark:text-zinc-400 text-sm">
            <li className="flex items-center gap-2">
              <span>📞</span>
              <a href="tel:+254726108507" className="hover:text-green-500 transition-colors">
                +254 726 108 507
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span>📧</span>
              <a href="mailto:Pkhamalishi@gmail.com" className="hover:text-green-500 transition-colors break-all">
                Pkhamalishi@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span>📍</span>
              <span>Nairobi, Kenya</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-zinc-500 dark:text-zinc-500 text-xs">
        <div>
          © {currentYear} PolyJakes Elite Clean & Fumigation. All rights reserved.
        </div>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:underline">Privacy</Link>
          <Link href="/terms" className="hover:underline">Terms</Link>
          <span>Nairobi, KE</span>
        </div>
      </div>
    </footer>
  );
}
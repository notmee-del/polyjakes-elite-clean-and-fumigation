export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h3 className="text-green-400 font-bold text-lg mb-3">PolyJakes</h3>
          <p className="text-white/40 text-sm leading-relaxed">
            Elite Clean & Fumigation. Professional pest control and cleaning services across Nairobi.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-widest">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-2">
            {['Services', 'Products', 'FAQ', 'Login'].map((link) => (
              <li key={link}>
                <a
                  href={`/${link.toLowerCase()}`}
                  className="text-white/40 hover:text-white text-sm transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-widest">
            Contact
          </h4>
          <ul className="flex flex-col gap-2 text-white/40 text-sm">
            <li>📞 +254 726 108 507</li>
            <li>📧 Pkhamalishi@gmail.com</li>
            <li>📍  Nairobi, Kenya</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/5 text-center text-white/20 text-xs">
        © {new Date().getFullYear()} PolyJakes Elite Clean & Fumigation. All rights reserved.
      </div>
    </footer>
  );
}
"use client";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1A2235] bg-[#080B11]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4 w-fit">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00E5FF] to-[#7B61FF] flex items-center justify-center text-[#080B11] font-bold text-sm">
                FD
              </div>
              <span className="font-display font-bold text-lg">
                flow<span className="text-[#00E5FF]">doma</span>
              </span>
            </Link>
            <p className="text-[#8896A7] text-sm leading-relaxed max-w-xs">
              AI-powered tools, automation templates, and digital products for modern business owners who want to grow smarter.
            </p>
            <div className="flex gap-3 mt-6">
              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-lg border border-[#1A2235] flex items-center justify-center text-[#8896A7] hover:text-[#00E5FF] hover:border-[#00E5FF]/30 transition-all">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              {/* TikTok */}
              <a href="https://tiktok.com" target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-lg border border-[#1A2235] flex items-center justify-center text-[#8896A7] hover:text-[#00E5FF] hover:border-[#00E5FF]/30 transition-all">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-lg border border-[#1A2235] flex items-center justify-center text-[#8896A7] hover:text-[#00E5FF] hover:border-[#00E5FF]/30 transition-all">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-sm text-[#E2E8F0] mb-4 tracking-wider uppercase">Navigate</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/products", label: "Products" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[#8896A7] text-sm hover:text-[#00E5FF] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-semibold text-sm text-[#E2E8F0] mb-4 tracking-wider uppercase">Newsletter</h4>
            <p className="text-[#8896A7] text-sm mb-4">Weekly AI tools, automation tips & productivity hacks.</p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="bg-[#0E1420] border border-[#1A2235] rounded-lg px-4 py-2.5 text-sm text-[#E2E8F0] placeholder-[#4A5568] focus:outline-none focus:border-[#00E5FF]/50 transition-colors"
              />
              <button type="submit" className="btn-primary px-4 py-2.5 rounded-lg text-sm">
                <span>Subscribe Free</span>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1A2235] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#4A5568] text-xs">
            © {currentYear} Flowdoma. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-[#4A5568] text-xs hover:text-[#8896A7] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-[#4A5568] text-xs hover:text-[#8896A7] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

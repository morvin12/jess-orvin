import Link from "next/link";
import { socials } from "@/lib/socials";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand column */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <div className="font-serif text-2xl font-bold text-white tracking-wide mb-1">JESS ORVIN</div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-px bg-[#c9a84c]" />
                <div className="text-xs text-[#c9a84c] font-semibold tracking-widest uppercase">Utah&apos;s Elevated Real Estate</div>
              </div>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed max-w-xs mb-6">
              Southern Utah&apos;s premier real estate team. We combine local expertise, elevated marketing, and personal service to help you buy or sell with confidence.
            </p>

            {/* Jess's Personal Socials */}
            <div className="mb-5">
              <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">Follow Jess</div>
              <div className="flex items-center gap-3">
                <a
                  href={socials.jessTikTok.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-stone-400 hover:text-[#c9a84c] transition-colors text-sm"
                  aria-label="Jess on TikTok"
                >
                  <TikTokIcon className="w-4 h-4" />
                  <span>{socials.jessTikTok.handle}</span>
                </a>
                <span className="text-stone-700">·</span>
                <a
                  href={socials.jessInstagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-stone-400 hover:text-[#c9a84c] transition-colors text-sm"
                  aria-label="Jess on Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>{socials.jessInstagram.handle}</span>
                </a>
              </div>
            </div>

            {/* Team Instagram */}
            <div>
              <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">Follow the Team</div>
              <a
                href={socials.teamInstagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-stone-400 hover:text-[#c9a84c] transition-colors text-sm"
                aria-label="Utah's Elevated Real Estate on Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>{socials.teamInstagram.handle}</span>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-4">Explore</div>
            <ul className="flex flex-col gap-2.5">
              {[
                { href: "/listings", label: "All Listings" },
                { href: "/team", label: "Meet the Team" },
                { href: "/about", label: "About Jess" },
                { href: "/videos", label: "Market Videos" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-stone-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-4">Get In Touch</div>
            <div className="flex flex-col gap-3 text-sm text-stone-400">
              <div>
                <div className="text-white font-medium text-xs mb-0.5">Jess Orvin</div>
                <div>Lead Agent, Team Lead</div>
              </div>
              <div>
                <div className="text-white font-medium text-xs mb-0.5">Christina Childs</div>
                <div>Co-Founder</div>
              </div>
              <div className="pt-1">
                <div className="text-white font-medium text-xs mb-1">Utah&apos;s Elevated Real Estate</div>
                <div>St. George, Utah 84770</div>
                <div className="mt-1">
                  <Link href="/contact" className="text-[#c9a84c] hover:text-white transition-colors">
                    Send a Message →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-stone-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-600">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center">
            <span>© {new Date().getFullYear()} Jess Orvin · Utah&apos;s Elevated Real Estate</span>
            <span className="hidden sm:block">·</span>
            <span>Licensed in the State of Utah</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hover:text-stone-400 transition-colors">Privacy</Link>
            <Link href="/contact" className="hover:text-stone-400 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

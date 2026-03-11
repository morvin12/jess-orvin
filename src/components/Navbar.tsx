"use client";

import Link from "next/link";
import { useState } from "react";
import { socials } from "@/lib/socials";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/listings", label: "Listings" },
  { href: "/team", label: "Team" },
  { href: "/videos", label: "Videos" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo — Jess Orvin primary, team brand as subtle secondary */}
          <Link href="/" className="flex flex-col leading-tight group">
            <span className="font-serif text-xl lg:text-2xl font-bold text-stone-900 tracking-wide group-hover:text-[#c1613a] transition-colors">
              JESS ORVIN
            </span>
            <span className="text-[9px] lg:text-[10px] text-stone-400 font-medium tracking-widest uppercase">
              Your Southern Utah Real Estate Expert
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-stone-600 hover:text-[#c1613a] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            {/* Subtle team brand identifier in the nav */}
            <span className="text-[10px] text-stone-300 font-medium tracking-wider border-l border-stone-100 pl-6">
              Utah&apos;s Elevated Real Estate
            </span>
          </div>

          {/* Desktop Right: Socials + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={socials.jessTikTok.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Jess on TikTok"
              className="text-stone-400 hover:text-[#c1613a] transition-colors"
            >
              <TikTokIcon className="w-4 h-4" />
            </a>
            <a
              href={socials.jessInstagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Jess on Instagram"
              className="text-stone-400 hover:text-[#c1613a] transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <div className="w-px h-4 bg-stone-200 mx-1" />
            <Link
              href="/contact"
              className="bg-[#c1613a] hover:bg-[#a8502f] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors shadow-sm"
            >
              Find Your Home
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-stone-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-stone-700 transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-stone-700 transition-all duration-200 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block h-0.5 bg-stone-700 transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden pb-5 pt-3 border-t border-stone-100 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-stone-700 font-medium py-2.5 px-1 hover:text-[#c1613a] transition-colors border-b border-stone-50 last:border-0"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {/* Team brand label */}
            <div className="pt-2 pb-1">
              <span className="text-[10px] text-stone-400 font-medium tracking-wider uppercase">Utah&apos;s Elevated Real Estate</span>
            </div>
            <div className="flex items-center gap-4 pt-1 pb-1">
              <a
                href={socials.jessTikTok.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-stone-500 hover:text-[#c1613a] text-sm transition-colors"
              >
                <TikTokIcon className="w-4 h-4" />
                {socials.jessTikTok.handle}
              </a>
              <a
                href={socials.jessInstagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-stone-500 hover:text-[#c1613a] text-sm transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
                {socials.jessInstagram.handle}
              </a>
            </div>
            <Link
              href="/contact"
              className="mt-2 bg-[#c1613a] hover:bg-[#a8502f] text-white text-sm font-semibold px-5 py-3 rounded-full text-center transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Find Your Home
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/listings", label: "Listings" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/videos", label: "Videos" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-stone-100">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
        <div className="flex items-center justify-between h-18 lg:h-20">

          {/* ── Logo ──────────────────────────────────── */}
          <Link href="/" className="flex flex-col leading-none group py-4">
            <span className="font-display text-[22px] lg:text-2xl font-light text-black tracking-[0.18em] uppercase group-hover:text-[#c9a84c] transition-colors duration-300">
              Jess Orvin
            </span>
            <span className="text-[8px] tracking-[0.38em] uppercase text-stone-400 mt-1">
              Real Estate
            </span>
          </Link>

          {/* ── Desktop nav links ─────────────────────── */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[10px] tracking-[0.22em] uppercase text-stone-500 hover:text-black transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* ── Desktop CTA ───────────────────────────── */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="text-[10px] tracking-[0.22em] uppercase border border-[#c9a84c] text-[#c9a84c] px-7 py-2.5 hover:bg-[#c9a84c] hover:text-black transition-all duration-300"
            >
              Contact
            </Link>
          </div>

          {/* ── Mobile hamburger ─────────────────────── */}
          <button
            className="lg:hidden flex flex-col gap-[5px] p-2 group"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-px bg-black transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-black transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-black transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* ── Mobile menu ──────────────────────────────── */}
      <div
        className={`lg:hidden bg-white border-t border-stone-100 overflow-hidden transition-all duration-400 ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-3xl font-light text-black py-2 hover:text-[#c9a84c] transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-6 border-t border-stone-100 mt-4">
            <Link
              href="/contact"
              className="inline-block text-[10px] tracking-[0.22em] uppercase border border-[#c9a84c] text-[#c9a84c] px-7 py-3 hover:bg-[#c9a84c] hover:text-black transition-all duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Contact Jess
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

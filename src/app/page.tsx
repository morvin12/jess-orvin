"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadModal from "@/components/LeadModal";
import { type Listing, jessListings, teamListings, formatPrice } from "@/lib/listings";
import { socials } from "@/lib/socials";

/* ── Icons ───────────────────────────────────────────────── */
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
    </svg>
  );
}
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}
function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  );
}
function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

/* ── Data ────────────────────────────────────────────────── */
const testimonials = [
  {
    quote: "Jess made finding our home in St. George feel effortless. She knew every neighborhood, every price point, and never made us feel rushed. We got exactly what we wanted.",
    name: "Amanda & Derek T.",
    location: "Bought in St. George",
  },
  {
    quote: "We were out-of-state buyers and honestly nervous about the process. Jess FaceTimed us through every showing and handled everything. Closed on time, no surprises.",
    name: "Marcus & Priya R.",
    location: "Relocated from Phoenix, AZ",
  },
  {
    quote: "Listed our Hurricane home on a Thursday, had 11 showings, and accepted an over-ask offer by Sunday. Jess's marketing is next level.",
    name: "Kevin J.",
    location: "Sold in Hurricane",
  },
];

const videos = [
  { title: "St. George Market Update — March 2026", duration: "8:24", topic: "Market Update" },
  { title: "Is Ivins the Best Place to Buy Right Now?", duration: "12:11", topic: "Neighborhood Guide" },
  { title: "5 Things I Wish I Knew Before Buying in Southern Utah", duration: "9:47", topic: "Buyer Tips" },
];

/* ── Reusable: thin gold divider ────────────────────────── */
function Divider() {
  return <div className="gold-divider" />;
}

/* ── Reusable: section label ────────────────────────────── */
function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[#c9a84c] text-[10px] tracking-[0.35em] uppercase mb-5">
      {children}
    </p>
  );
}

/* ── Homepage listing row ────────────────────────────────── */
function ListingRow({
  listing,
  onView,
}: {
  listing: Listing;
  onView: (l: Listing) => void;
}) {
  return (
    <div
      className="group cursor-pointer"
      onClick={() => onView(listing)}
    >
      {/* Image placeholder */}
      <div className="listing-img-wrap relative w-full h-64 sm:h-[400px]">
        <div
          className={`listing-img-inner absolute inset-0 bg-gradient-to-br ${listing.gradient}`}
        />
        {/* Status badge */}
        <div className="absolute top-5 left-6 z-10">
          <span
            className={`text-[9px] tracking-[0.25em] uppercase px-3 py-1.5 font-medium ${
              listing.status === "Active"
                ? "bg-[#c9a84c] text-black"
                : listing.status === "Pending"
                ? "bg-white/90 text-black"
                : "bg-black/60 text-white"
            }`}
          >
            {listing.status}
          </span>
        </div>
        {/* Price overlay */}
        <div className="absolute bottom-5 left-6 z-10">
          <div className="font-display text-4xl sm:text-5xl text-white font-light leading-none drop-shadow-lg">
            {formatPrice(listing.price)}
          </div>
        </div>
        {/* Hover dark overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500 z-10" />
      </div>

      {/* Info row */}
      <div className="py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-stone-100 group-hover:border-[#c9a84c]/40 transition-colors duration-300">
        <div>
          <h3 className="font-display text-xl sm:text-2xl font-light text-black tracking-wide">
            {listing.address}
          </h3>
          <p className="text-stone-400 text-sm mt-0.5 tracking-wide">
            {listing.city}, {listing.state} · {listing.beds} Beds · {listing.baths} Baths · {listing.sqft.toLocaleString()} sqft
          </p>
        </div>
        <button className="self-start sm:self-auto text-[9px] tracking-[0.22em] uppercase border border-stone-200 text-stone-500 px-5 py-2.5 group-hover:border-[#c9a84c] group-hover:text-[#c9a84c] transition-all duration-300 flex-shrink-0">
          View Details
        </button>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   HOME PAGE
═══════════════════════════════════════════════════════════ */
export default function Home() {
  const [selectedListing, setSelectedListing] = useState<Listing | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <LeadModal listing={selectedListing} onClose={() => setSelectedListing(null)} />

      {/* ══════════════════════════════════════════
          HERO — Full viewport, black, animated
      ══════════════════════════════════════════ */}
      <section className="hero-bg relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-6">
        {/* Subtle top/bottom gold lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-[#c9a84c] opacity-30" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-[#c9a84c] opacity-15" />

        {/* Social links — top right */}
        <div className="absolute top-24 right-6 lg:right-16 flex flex-col items-end gap-3 hidden lg:flex">
          <a
            href={socials.jessTikTok.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/30 hover:text-[#c9a84c] text-[9px] tracking-[0.22em] uppercase transition-colors duration-300"
          >
            <TikTokIcon className="w-3 h-3" />
            {socials.jessTikTok.handle}
          </a>
          <a
            href={socials.jessInstagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/30 hover:text-[#c9a84c] text-[9px] tracking-[0.22em] uppercase transition-colors duration-300"
          >
            <InstagramIcon className="w-3 h-3" />
            {socials.jessInstagram.handle}
          </a>
        </div>

        {/* Main content */}
        <div className="relative z-10 max-w-5xl mx-auto pt-28 pb-20">
          {/* Eyebrow */}
          <p className="text-[#c9a84c] text-[10px] tracking-[0.35em] uppercase mb-10">
            Elevate Your Real Estate Experience With
          </p>

          {/* Massive heading */}
          <h1 className="font-display font-light text-white leading-[0.92] tracking-tight mb-12">
            <span className="block text-[clamp(64px,12vw,130px)]">Jess Orvin</span>
            <span className="block text-[clamp(48px,9vw,100px)] text-white/80">Southern Utah</span>
            <span className="block text-[clamp(40px,7vw,84px)] italic text-[#c9a84c]/90">Real Estate</span>
          </h1>

          {/* Search bar */}
          <div className="max-w-xl mx-auto">
            <div className="flex items-stretch bg-white">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="City, community, or address..."
                className="flex-1 px-5 py-4 text-sm text-black placeholder:text-stone-400 outline-none font-sans tracking-wide"
              />
              <Link
                href={`/listings${searchQuery ? `?q=${encodeURIComponent(searchQuery)}` : ""}`}
                className="bg-[#c9a84c] hover:bg-[#b8963c] text-black px-6 flex items-center justify-center transition-colors duration-300"
              >
                <SearchIcon className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex items-center justify-center gap-6 mt-5">
              {["St. George", "Ivins", "Washington", "Hurricane"].map((city) => (
                <Link
                  key={city}
                  href={`/listings?city=${encodeURIComponent(city)}`}
                  className="text-white/35 hover:text-white/70 text-[9px] tracking-[0.2em] uppercase transition-colors duration-300"
                >
                  {city}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll arrow */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-4 h-4 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STATS — white, generous space
      ══════════════════════════════════════════ */}
      <Divider />
      <section className="bg-white py-20 px-6">
        <div className="max-w-screen-lg mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {[
              { value: "50+", label: "Homes Sold" },
              { value: "5★", label: "Client Rating" },
              { value: "10+", label: "Years in Southern Utah" },
              { value: "#1", label: "Your Southern Utah Expert" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <div className="font-display text-5xl sm:text-6xl font-light text-black mb-2">
                  {stat.value}
                </div>
                <div className="w-8 h-px bg-[#c9a84c] mx-auto mb-3" />
                <div className="text-[9px] text-stone-400 font-medium tracking-[0.22em] uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TEAM PHOTO — full width editorial
      ══════════════════════════════════════════ */}
      <Divider />
      <section>
        {/* Full-width image placeholder */}
        <div className="relative w-full aspect-[3/1] bg-gradient-to-br from-stone-700 via-stone-800 to-stone-900 flex items-center justify-center overflow-hidden">
          <div className="text-center">
            <p className="text-white/20 text-[9px] tracking-[0.35em] uppercase">Professional Photo</p>
          </div>
          {/* Dark gradient overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
        {/* Text below */}
        <div className="bg-white py-16 px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <Label>Utah&apos;s Elevated Real Estate</Label>
            <h2 className="font-display text-4xl sm:text-5xl font-light text-black leading-tight mb-6">
              Best Realtors in Southern Utah
            </h2>
            <p className="text-stone-500 text-sm leading-relaxed tracking-wide max-w-lg mx-auto">
              Founded by Jess Orvin and Christina Childs, our team brings elevated marketing, deep local knowledge, and genuine care to every transaction across Southern Utah.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SERVICE TILES — dark, full-bleed
      ══════════════════════════════════════════ */}
      <Divider />
      <section className="bg-[#0a0a0a] py-24 px-6">
        <div className="max-w-screen-xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <Label>What We Do</Label>
            <h2 className="font-display font-light text-white leading-tight">
              <span className="block text-4xl sm:text-5xl lg:text-6xl">Simplifying Real Estate,</span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl italic text-[#c9a84c] mt-2">
                One Home at a Time
              </span>
            </h2>
          </div>

          {/* Tiles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
            {/* Find a Home */}
            <Link href="/listings">
              <div className="tile-hover group relative h-64 sm:h-80 bg-gradient-to-br from-stone-900 to-[#0d0d0d] flex flex-col items-center justify-center cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] to-[#0d0d0d]" />
                <div className="relative z-10 text-center px-8">
                  <p className="font-display text-2xl sm:text-3xl font-light tracking-[0.12em] text-white uppercase mb-4">
                    Find a Home
                  </p>
                  <div className="w-10 h-px bg-[#c9a84c] mx-auto" />
                  <p className="text-white/40 text-[10px] tracking-[0.2em] uppercase mt-4 group-hover:text-white/70 transition-colors duration-300">
                    Browse Listings →
                  </p>
                </div>
                <div className="absolute inset-0 bg-[#c9a84c]/0 group-hover:bg-[#c9a84c]/5 transition-all duration-500" />
              </div>
            </Link>

            {/* Sell My Home */}
            <Link href="/contact">
              <div className="tile-hover group relative h-64 sm:h-80 bg-gradient-to-br from-[#111] to-[#1a1a1a] flex flex-col items-center justify-center cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d0d] via-[#111] to-[#1a1a2e]" />
                <div className="relative z-10 text-center px-8">
                  <p className="font-display text-2xl sm:text-3xl font-light tracking-[0.12em] text-white uppercase mb-4">
                    Sell My Home
                  </p>
                  <div className="w-10 h-px bg-[#c9a84c] mx-auto" />
                  <p className="text-white/40 text-[10px] tracking-[0.2em] uppercase mt-4 group-hover:text-white/70 transition-colors duration-300">
                    Get Started →
                  </p>
                </div>
                <div className="absolute inset-0 bg-[#c9a84c]/0 group-hover:bg-[#c9a84c]/5 transition-all duration-500" />
              </div>
            </Link>

            {/* Get My Home's Value — CompIQ */}
            <a href="https://comp-intelligence.vercel.app" target="_blank" rel="noopener noreferrer">
              <div className="tile-hover group relative h-64 sm:h-80 flex flex-col items-center justify-center cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#c9a84c]/20 via-[#111] to-[#0d0d0d]" />
                <div className="relative z-10 text-center px-8">
                  <p className="font-display text-2xl sm:text-3xl font-light tracking-[0.12em] text-white uppercase mb-4">
                    Get My Home&apos;s Value
                  </p>
                  <div className="w-10 h-px bg-[#c9a84c] mx-auto" />
                  <p className="text-[#c9a84c]/70 text-[10px] tracking-[0.2em] uppercase mt-4 group-hover:text-[#c9a84c] transition-colors duration-300">
                    Instant Report →
                  </p>
                </div>
                <div className="absolute inset-0 bg-[#c9a84c]/0 group-hover:bg-[#c9a84c]/8 transition-all duration-500" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FEATURED LISTINGS — white, full-width stacked
      ══════════════════════════════════════════ */}
      <Divider />
      <section className="bg-white py-24 px-6">
        <div className="max-w-screen-xl mx-auto">
          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
            <div>
              <Label>Personally Listed</Label>
              <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-black leading-none tracking-wide">
                Featured<br />Listings
              </h2>
            </div>
            <Link
              href="/listings"
              className="flex items-center gap-2 text-[10px] tracking-[0.22em] uppercase text-stone-500 hover:text-black transition-colors duration-300 group flex-shrink-0 mb-2"
            >
              View All
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Stacked listing rows */}
          <div className="flex flex-col gap-0">
            {jessListings.slice(0, 3).map((listing) => (
              <ListingRow key={listing.id} listing={listing} onView={setSelectedListing} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/listings"
              className="inline-flex items-center gap-3 text-[10px] tracking-[0.22em] uppercase border border-stone-200 text-stone-500 px-10 py-4 hover:border-black hover:text-black transition-all duration-300"
            >
              View All Listings
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ABOUT JESS — clean 2-col
      ══════════════════════════════════════════ */}
      <Divider />
      <section className="bg-white py-24 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Photo placeholder */}
            <div className="relative">
              <div className="w-full aspect-[4/5] bg-gradient-to-br from-stone-800 to-stone-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-display text-7xl font-light text-[#c9a84c]/50 mb-2">JO</div>
                  <p className="text-white/20 text-[9px] tracking-[0.3em] uppercase">Jess Orvin</p>
                </div>
              </div>
              {/* Gold accent corner */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-[#c9a84c]/30" />
            </div>

            {/* Text */}
            <div>
              <Label>Your Southern Utah Expert</Label>
              <h2 className="font-display text-5xl sm:text-6xl font-light text-black mb-8 leading-tight">
                Meet<br />Jess Orvin
              </h2>
              <div className="w-12 h-px bg-[#c9a84c] mb-8" />
              <p className="text-stone-500 text-sm leading-relaxed tracking-wide mb-5">
                Born and raised in Southern Utah, Jess knows this landscape the way only a true local can. She knows which neighborhoods are on the rise, which canyon views are worth every penny, and why the people who move here never want to leave.
              </p>
              <p className="text-stone-500 text-sm leading-relaxed tracking-wide mb-10">
                Known for her lifestyle brand on TikTok and Instagram, Jess brings the same eye for beauty and storytelling to every listing. She doesn&apos;t just sell homes — she tells their story.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link
                  href="/about"
                  className="text-[10px] tracking-[0.22em] uppercase border border-black text-black px-8 py-3.5 hover:bg-black hover:text-white transition-all duration-300"
                >
                  Learn More
                </Link>
                <div className="flex items-center gap-4 pt-2 sm:pt-0">
                  <a
                    href={socials.jessTikTok.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-stone-400 hover:text-black text-[10px] tracking-[0.15em] uppercase transition-colors duration-300"
                  >
                    <TikTokIcon className="w-3.5 h-3.5" />
                    {socials.jessTikTok.handle}
                  </a>
                  <a
                    href={socials.jessInstagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-stone-400 hover:text-black text-[10px] tracking-[0.15em] uppercase transition-colors duration-300"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                    {socials.jessInstagram.handle}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MEET THE TEAM
      ══════════════════════════════════════════ */}
      <Divider />
      <section className="bg-white py-24 px-6">
        <div className="max-w-screen-xl mx-auto">
          {/* Full-width team photo placeholder */}
          <div className="w-full aspect-[16/5] bg-gradient-to-br from-stone-700 via-stone-800 to-stone-900 flex items-center justify-center mb-16">
            <p className="text-white/20 text-[9px] tracking-[0.35em] uppercase">Team Photo</p>
          </div>
          <div className="text-center max-w-xl mx-auto">
            <Label>Utah&apos;s Elevated Real Estate</Label>
            <h2 className="font-display text-5xl sm:text-6xl font-light text-black mb-6">
              Meet the Team
            </h2>
            <div className="w-10 h-px bg-[#c9a84c] mx-auto mb-6" />
            <p className="text-stone-500 text-sm leading-relaxed tracking-wide mb-10">
              Six specialists, one standard of excellence. Co-founded by Jess Orvin and Christina Childs, our team covers every corner of Southern Utah with expertise and genuine care.
            </p>
            <Link
              href="/team"
              className="inline-flex items-center gap-2 text-[10px] tracking-[0.22em] uppercase border border-[#c9a84c] text-[#c9a84c] px-8 py-3.5 hover:bg-[#c9a84c] hover:text-black transition-all duration-300"
            >
              Meet Everyone
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TEAM LISTINGS — dark
      ══════════════════════════════════════════ */}
      <Divider />
      <section className="bg-[#0a0a0a] py-24 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
            <div>
              <Label>Our Team</Label>
              <h2 className="font-display text-5xl sm:text-6xl font-light text-white leading-none">
                Team<br />Listings
              </h2>
            </div>
            <Link
              href="/listings?tab=team"
              className="flex items-center gap-2 text-[10px] tracking-[0.22em] uppercase text-stone-500 hover:text-white transition-colors duration-300 group flex-shrink-0 mb-2"
            >
              All Team Listings
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* 2-column mini grid for team listings */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5">
            {teamListings.slice(0, 4).map((listing) => (
              <div
                key={listing.id}
                className="group cursor-pointer bg-[#0a0a0a]"
                onClick={() => setSelectedListing(listing)}
              >
                <div className="listing-img-wrap relative h-56 sm:h-64">
                  <div className={`listing-img-inner absolute inset-0 bg-gradient-to-br ${listing.gradient}`} />
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`text-[9px] tracking-[0.2em] uppercase px-3 py-1.5 ${listing.status === "Active" ? "bg-[#c9a84c] text-black" : "bg-white/80 text-black"}`}>
                      {listing.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 z-10">
                    <div className="font-display text-2xl text-white font-light">{formatPrice(listing.price)}</div>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all duration-400 z-10" />
                </div>
                <div className="p-5 border-b border-white/5 group-hover:border-[#c9a84c]/20 transition-colors duration-300">
                  <h3 className="font-display text-lg font-light text-white tracking-wide">{listing.address}</h3>
                  <p className="text-stone-600 text-xs mt-1 tracking-wide">{listing.city} · {listing.beds}bd · {listing.baths}ba · {listing.sqft.toLocaleString()} sqft</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/team"
              className="inline-flex items-center gap-3 text-[10px] tracking-[0.22em] uppercase border border-white/20 text-white/60 px-10 py-4 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-300"
            >
              Meet the Full Team
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TESTIMONIALS — white, editorial
      ══════════════════════════════════════════ */}
      <Divider />
      <section className="bg-white py-24 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <Label>Client Stories</Label>
            <h2 className="font-display text-5xl sm:text-6xl font-light text-black">
              What Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {testimonials.map((t, i) => (
              <div key={i} className="flex flex-col">
                <div className="w-6 h-px bg-[#c9a84c] mb-6" />
                <blockquote className="font-display text-xl sm:text-2xl font-light text-black leading-relaxed italic flex-1 mb-8">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div>
                  <div className="text-[10px] tracking-[0.22em] uppercase text-black font-medium">{t.name}</div>
                  <div className="text-[10px] tracking-[0.18em] uppercase text-[#c9a84c] mt-1">{t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          VIDEOS — dark
      ══════════════════════════════════════════ */}
      <Divider />
      <section className="bg-[#0a0a0a] py-24 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
            <div>
              <Label>Market Insights</Label>
              <h2 className="font-display text-5xl sm:text-6xl font-light text-white leading-none">
                Latest<br />Videos
              </h2>
            </div>
            <Link
              href="/videos"
              className="flex items-center gap-2 text-[10px] tracking-[0.22em] uppercase text-stone-500 hover:text-white transition-colors duration-300 group flex-shrink-0 mb-2"
            >
              View All
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/5">
            {videos.map((video, i) => (
              <div key={i} className="group cursor-pointer bg-[#0a0a0a] hover:bg-[#111] transition-colors duration-300">
                <div className="relative h-48 bg-gradient-to-br from-[#111] to-[#1a1a1a] flex items-center justify-center overflow-hidden">
                  <div className="w-12 h-12 border border-[#c9a84c]/50 flex items-center justify-center group-hover:border-[#c9a84c] group-hover:bg-[#c9a84c]/10 transition-all duration-300">
                    <svg className="w-4 h-4 text-[#c9a84c] ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="text-[8px] tracking-[0.18em] uppercase bg-[#c9a84c] text-black px-2.5 py-1">
                      {video.topic}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="text-[9px] text-white/40 font-mono">{video.duration}</span>
                  </div>
                </div>
                <div className="p-6 border-b border-white/5 group-hover:border-[#c9a84c]/20 transition-colors duration-300">
                  <h3 className="font-display text-lg font-light text-white leading-snug">{video.title}</h3>
                  <p className="text-stone-600 text-[9px] tracking-[0.18em] uppercase mt-2">Jess Orvin</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/videos"
              className="inline-flex items-center gap-3 text-[10px] tracking-[0.22em] uppercase border border-white/20 text-white/60 px-10 py-4 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-300"
            >
              Watch on YouTube
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FOLLOW — white, social grid
      ══════════════════════════════════════════ */}
      <Divider />
      <section className="bg-white py-24 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <Label>Stay Connected</Label>
            <h2 className="font-display text-5xl sm:text-6xl font-light text-black mb-6">
              Follow Jess
            </h2>
            <div className="flex items-center justify-center gap-8">
              <a
                href={socials.jessTikTok.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-stone-400 hover:text-black text-[10px] tracking-[0.2em] uppercase transition-colors duration-300"
              >
                <TikTokIcon className="w-4 h-4" />
                {socials.jessTikTok.handle}
              </a>
              <div className="w-px h-4 bg-stone-200" />
              <a
                href={socials.jessInstagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-stone-400 hover:text-black text-[10px] tracking-[0.2em] uppercase transition-colors duration-300"
              >
                <InstagramIcon className="w-4 h-4" />
                {socials.jessInstagram.handle}
              </a>
            </div>
          </div>

          {/* Social grid placeholder */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <a
                key={i}
                href={socials.jessInstagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group aspect-square bg-stone-50 border border-stone-100 hover:border-[#c9a84c]/50 flex items-center justify-center transition-all duration-300 overflow-hidden"
              >
                <div className="text-stone-200 group-hover:text-[#c9a84c]/30 transition-colors duration-300">
                  <InstagramIcon className="w-5 h-5" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA BANNER — black
      ══════════════════════════════════════════ */}
      <Divider />
      <section className="bg-black py-28 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <Label>Ready to Make a Move?</Label>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-white leading-tight mb-8">
            Let&apos;s Find Your Place<br />
            <em className="text-[#c9a84c]">in Southern Utah</em>
          </h2>
          <p className="text-white/40 text-sm leading-relaxed tracking-wide max-w-md mx-auto mb-12">
            Whether you&apos;re buying your first home or selling a luxury estate, Jess is ready to guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/listings"
              className="text-[10px] tracking-[0.22em] uppercase bg-[#c9a84c] text-black px-10 py-4 hover:bg-[#b8963c] transition-all duration-300"
            >
              Browse Listings
            </Link>
            <Link
              href="/contact"
              className="text-[10px] tracking-[0.22em] uppercase border border-white/30 text-white px-10 py-4 hover:border-white hover:bg-white hover:text-black transition-all duration-300"
            >
              Contact Jess
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

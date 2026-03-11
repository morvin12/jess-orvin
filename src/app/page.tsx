"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ListingCard from "@/components/ListingCard";
import LeadModal from "@/components/LeadModal";
import { type Listing, jessListings, teamListings } from "@/lib/listings";
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

export default function Home() {
  const [selectedListing, setSelectedListing] = useState<Listing | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <LeadModal listing={selectedListing} onClose={() => setSelectedListing(null)} />

      {/* ══════════════════════════════════════════════
          JESS ORVIN — PERSONAL BRAND
      ══════════════════════════════════════════════ */}

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-[#0d0d0d]">
        {/* Gold accent lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-[#c9a84c] opacity-40" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-[#c9a84c] opacity-20" />

        {/* Subtle grid texture */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(#c9a84c 1px, transparent 1px), linear-gradient(90deg, #c9a84c 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pt-24 pb-16">
          {/* Social icons */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <a href={socials.jessTikTok.url} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-1.5 text-white/50 hover:text-[#c9a84c] text-xs transition-colors tracking-wider uppercase">
              <TikTokIcon className="w-3.5 h-3.5" />
              <span>{socials.jessTikTok.handle}</span>
            </a>
            <span className="text-white/20">·</span>
            <a href={socials.jessInstagram.url} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-1.5 text-white/50 hover:text-[#c9a84c] text-xs transition-colors tracking-wider uppercase">
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>{socials.jessInstagram.handle}</span>
            </a>
          </div>

          {/* Eyebrow label */}
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-12 h-px bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase">
              Southern Utah Real Estate Expert
            </span>
            <div className="w-12 h-px bg-[#c9a84c]" />
          </div>

          {/* H1 */}
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white font-bold leading-none mb-6 tracking-tight">
            Your Home.<br />
            <span className="relative inline-block">
              Your Legacy.
              <span className="absolute bottom-1 left-0 right-0 h-0.5 bg-[#c9a84c]" />
            </span>
          </h1>

          <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto mb-3 leading-relaxed">
            Jess Orvin — Southern Utah&apos;s most trusted real estate expert. Commanding results, unmatched expertise, genuine care.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link href="/listings"
               className="bg-[#8b1a4a] hover:bg-[#6d1439] text-white font-semibold px-8 py-4 rounded-sm text-base transition-all">
              Search Listings →
            </Link>
            <Link href="/contact"
               className="border border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-black font-semibold px-8 py-4 rounded-sm text-base transition-all">
              Work With Jess
            </Link>
          </div>

          {/* Identity mark */}
          <div className="mt-16 flex items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <div className="w-20 h-20 bg-[#111111] border border-[#c9a84c] flex items-center justify-center">
                <span className="font-serif text-2xl font-bold text-[#c9a84c]">JO</span>
              </div>
              <div className="text-center">
                <div className="text-white font-serif font-bold text-base tracking-wide">JESS ORVIN</div>
                <div className="text-white/40 text-xs tracking-widest uppercase mt-0.5">Southern Utah Real Estate Expert</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-5 h-5 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── JESS'S PERSONAL STATS ─────────────────────────────── */}
      <section className="bg-white border-y border-stone-100">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <div className="text-center mb-6">
            <div className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase">Jess by the Numbers</div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "50+", label: "Homes Sold" },
              { value: "5★", label: "Client Rating" },
              { value: "10+", label: "Years in Southern Utah" },
              { value: "#1", label: "Your Expert in St. George" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <div className="font-serif text-3xl font-bold text-[#8b1a4a] mb-1">{stat.value}</div>
                <div className="text-xs text-[#6b7280] font-medium tracking-wide uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JESS'S FEATURED LISTINGS ──────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase mb-3">Jess&apos;s Listings</div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0d0d0d] font-bold">Personally Listed by Jess</h2>
            <p className="text-[#6b7280] mt-2 text-sm max-w-md">
              Every property Jess personally lists is elevated — from photography to pricing strategy.
            </p>
          </div>
          <Link href="/listings" className="text-[#8b1a4a] hover:text-[#6d1439] font-semibold text-sm flex items-center gap-1 flex-shrink-0 transition-colors">
            View All Listings →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jessListings.slice(0, 3).map((listing) => (
            <ListingCard key={listing.id} listing={listing} onViewDetails={setSelectedListing} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/listings"
             className="inline-flex items-center gap-2 border border-stone-200 hover:border-[#8b1a4a] text-[#0d0d0d] hover:text-[#8b1a4a] font-semibold px-7 py-3 rounded-sm text-sm transition-all">
            View All Jess&apos;s Listings →
          </Link>
        </div>
      </section>

      {/* ── ABOUT JESS MINI ───────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo placeholder */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 bg-[#0d0d0d] border border-[#c9a84c] flex items-center justify-center">
                <span className="font-serif text-6xl font-bold text-[#c9a84c]">JO</span>
              </div>
              {/* Accent badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#8b1a4a] text-white px-4 py-3">
                <div className="text-xs font-semibold opacity-80 uppercase tracking-widest">Local Expert</div>
                <div className="font-serif font-bold text-sm">Southern Utah</div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <div className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase mb-4">Your Southern Utah Expert</div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0d0d0d] font-bold mb-6">Meet Jess Orvin</h2>
            <p className="text-[#6b7280] leading-relaxed mb-4">
              Born and raised in Southern Utah, Jess knows this landscape the way only a true local can. She knows which neighborhoods are on the rise, which canyon views are worth every penny, and why the people who move here never want to leave.
            </p>
            <p className="text-[#6b7280] leading-relaxed mb-8">
              Known for her authentic lifestyle brand on TikTok and Instagram, Jess brings the same eye for beauty and storytelling to every listing she touches. She doesn&apos;t just sell homes — she tells their story.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/about"
                 className="inline-flex items-center justify-center gap-2 bg-[#0d0d0d] hover:bg-[#1a1a1a] text-white font-semibold px-6 py-3 rounded-sm text-sm transition-colors">
                Learn More About Jess →
              </Link>
              <div className="flex items-center gap-3">
                <a href={socials.jessTikTok.url} target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 border border-stone-200 hover:border-[#c9a84c] text-[#6b7280] hover:text-[#0d0d0d] font-semibold px-4 py-3 rounded-sm text-sm transition-colors">
                  <TikTokIcon className="w-3.5 h-3.5" />
                  {socials.jessTikTok.handle}
                </a>
                <a href={socials.jessInstagram.url} target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 border border-stone-200 hover:border-[#c9a84c] text-[#6b7280] hover:text-[#0d0d0d] font-semibold px-4 py-3 rounded-sm text-sm transition-colors">
                  <InstagramIcon className="w-3.5 h-3.5" />
                  {socials.jessInstagram.handle}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          BRAND TRANSITION DIVIDER
      ══════════════════════════════════════════════ */}
      <section className="relative py-14 px-4 overflow-hidden bg-stone-50 border-y border-stone-100">
        <div className="relative z-10 flex items-center justify-center gap-6 max-w-4xl mx-auto">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-stone-200" />
          <div className="bg-stone-50 px-6 text-center">
            <p className="text-[#9ca3af] text-xs font-semibold tracking-widest uppercase mb-2">Jess & Christina are co-founders of</p>
            <div className="flex items-center gap-3">
              <div className="w-6 h-px" style={{ backgroundColor: "#c9a84c" }} />
              <span className="font-serif text-lg font-bold" style={{ color: "#1a2744" }}>
                Utah&apos;s Elevated Real Estate
              </span>
              <div className="w-6 h-px" style={{ backgroundColor: "#c9a84c" }} />
            </div>
            <p className="text-[#9ca3af] text-xs mt-1.5">Utah&apos;s Premier Real Estate Team</p>
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-stone-200" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          UTAH'S ELEVATED REAL ESTATE — TEAM BRAND
      ══════════════════════════════════════════════ */}

      {/* ── TEAM BRAND BANNER ─────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#1a2744" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-10 h-px" style={{ backgroundColor: "#c9a84c" }} />
              <div className="w-12 h-12 flex items-center justify-center border-2" style={{ backgroundColor: "rgba(201,168,76,0.15)", borderColor: "#c9a84c" }}>
                <span className="font-serif text-lg font-bold" style={{ color: "#c9a84c" }}>UE</span>
              </div>
              <div className="w-10 h-px" style={{ backgroundColor: "#c9a84c" }} />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
              Utah&apos;s Elevated Real Estate
            </h2>
            <p className="font-semibold text-sm tracking-widest uppercase" style={{ color: "#c9a84c" }}>
              Utah&apos;s Premier Real Estate Team
            </p>
            <p className="text-white/60 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              Founded by Jess Orvin &amp; Christina Childs, Utah&apos;s Elevated Real Estate is the region&apos;s most innovative team — bringing elevated marketing, deep local expertise, and a genuine commitment to every client.
            </p>
            <a href={socials.teamInstagram.url} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-1.5 text-sm mt-5 transition-colors" style={{ color: "#c9a84c" }}>
              <InstagramIcon className="w-4 h-4" />
              {socials.teamInstagram.handle}
            </a>
          </div>

          {/* Team Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-10">
            {[
              { value: "6", label: "Team Specialists" },
              { value: "100+", label: "Homes Sold" },
              { value: "5★", label: "Team Rating" },
              { value: "2", label: "Locations Served" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <div className="font-serif text-3xl font-bold mb-1" style={{ color: "#c9a84c" }}>{stat.value}</div>
                <div className="text-xs font-medium tracking-wide uppercase text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Team Members mini grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
            {[
              { initials: "JO", name: "Jess Orvin", title: "Lead Agent & Founder" },
              { initials: "CC", name: "Christina Childs", title: "Co-Founder" },
              { initials: "TB", name: "Tyler Brooks", title: "Real Estate Agent" },
              { initials: "MC", name: "Madison Clark", title: "Real Estate Agent" },
              { initials: "RT", name: "Ryan Torres", title: "Real Estate Agent" },
              { initials: "KJ", name: "Kayla Jensen", title: "Real Estate Agent" },
            ].map((member, i) => (
              <div key={member.name} className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-3 border ${i < 2 ? "border-yellow-600/40" : "border-white/10"}`}
                     style={{ backgroundColor: i < 2 ? "rgba(201,168,76,0.2)" : "rgba(255,255,255,0.08)" }}>
                  <span className="font-serif text-xl font-bold" style={{ color: i < 2 ? "#c9a84c" : "rgba(255,255,255,0.7)" }}>{member.initials}</span>
                </div>
                <div className="text-white text-xs font-semibold leading-tight mb-0.5">{member.name}</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{member.title}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/team"
               className="inline-flex items-center gap-2 font-semibold px-8 py-3.5 rounded-sm text-sm transition-all border"
               style={{ backgroundColor: "#c9a84c", borderColor: "#c9a84c", color: "#1a2744" }}>
              Meet the Full Team →
            </Link>
          </div>
        </div>
      </section>

      {/* ── UTAH'S ELEVATED REAL ESTATE LISTINGS ─────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#111d33" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="w-4 h-px" style={{ backgroundColor: "#c9a84c" }} />
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#c9a84c" }}>
                  Utah&apos;s Elevated Real Estate
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">Team Listings</h2>
              <p className="mt-2 text-sm max-w-md" style={{ color: "rgba(255,255,255,0.5)" }}>
                Properties listed by the Utah&apos;s Elevated Real Estate team — six specialists, one standard of excellence.
              </p>
            </div>
            <Link href="/listings?tab=team" className="font-semibold text-sm flex items-center gap-1 flex-shrink-0 transition-colors" style={{ color: "#c9a84c" }}>
              All Team Listings →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} onViewDetails={setSelectedListing} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          BACK TO JESS — TESTIMONIALS, VIDEOS, SOCIAL
      ══════════════════════════════════════════════ */}

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase mb-3">Client Stories</div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0d0d0d] font-bold">What Clients Say About Jess</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white border border-stone-200 p-7 flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} className="w-4 h-4 text-[#c9a84c]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-[#6b7280] text-sm leading-relaxed flex-1 mb-5 italic">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <div className="font-semibold text-[#0d0d0d] text-sm">{t.name}</div>
                <div className="text-[#c9a84c] text-xs mt-0.5 font-medium tracking-wide">{t.location}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── VIDEOS ────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase mb-3">Market Insights</div>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-bold">Jess&apos;s Latest Videos</h2>
              <p className="text-white/50 mt-2 text-sm">Market updates, neighborhood guides, and buyer/seller tips — straight from Jess.</p>
            </div>
            <Link href="/videos" className="text-[#c9a84c] hover:text-white font-semibold text-sm flex-shrink-0 transition-colors">
              View All Videos →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {videos.map((video, i) => (
              <div key={i} className="bg-[#111111] border border-white/10 overflow-hidden group cursor-pointer hover:border-[#c9a84c]/40 transition-colors">
                <div className="relative h-44 bg-gradient-to-br from-[#111111] to-[#1a1a1a] flex items-center justify-center">
                  {/* Gold play button */}
                  <div className="w-14 h-14 bg-[#c9a84c] flex items-center justify-center group-hover:bg-white transition-colors">
                    <svg className="w-6 h-6 text-[#0d0d0d] ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-semibold bg-[#8b1a4a] text-white px-2 py-0.5 rounded-sm">{video.topic}</span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="text-xs text-white/50 bg-black/60 px-2 py-0.5">{video.duration}</span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-white text-sm font-semibold leading-snug">{video.title}</p>
                  <p className="text-white/30 text-xs mt-1">Jess Orvin</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/videos"
               className="inline-flex items-center gap-2 border border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-black font-semibold px-7 py-3 rounded-sm text-sm transition-colors">
              Watch on YouTube →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOLLOW JESS / SOCIAL ──────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase mb-3">Stay Connected</div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0d0d0d] font-bold mb-3">Follow Jess</h2>
          <p className="text-[#6b7280] text-sm max-w-md mx-auto">
            Behind-the-scenes listings, market tips, and Southern Utah life — on TikTok and Instagram.
          </p>
          <div className="flex items-center justify-center gap-6 mt-6">
            <a href={socials.jessTikTok.url} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 text-[#0d0d0d] hover:text-[#8b1a4a] font-semibold text-sm transition-colors group">
              <TikTokIcon className="w-5 h-5" />
              <div className="text-left">
                <div className="leading-tight">{socials.jessTikTok.handle}</div>
                <div className="text-[10px] text-[#9ca3af] font-normal">TikTok</div>
              </div>
            </a>
            <a href={socials.jessInstagram.url} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 text-[#0d0d0d] hover:text-[#8b1a4a] font-semibold text-sm transition-colors group">
              <InstagramIcon className="w-5 h-5" />
              <div className="text-left">
                <div className="leading-tight">{socials.jessInstagram.handle}</div>
                <div className="text-[10px] text-[#9ca3af] font-normal">Instagram</div>
              </div>
            </a>
          </div>
        </div>

        {/* Social grid placeholder */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className={`aspect-square overflow-hidden bg-[#0d0d0d] border ${
              i % 2 === 0 ? "border-[#c9a84c]/20" : "border-white/5"
            } flex items-center justify-center group cursor-pointer hover:border-[#c9a84c]/60 transition-colors`}>
              <div className="text-center p-2">
                <div className="text-white/20 text-[10px] font-medium tracking-widest uppercase">@jessorvin</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <a href={socials.jessInstagram.url} target="_blank" rel="noopener noreferrer"
             className="text-[#6b7280] hover:text-[#8b1a4a] text-sm font-medium transition-colors">
            View on Instagram →
          </a>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0d0d0d]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase">Ready to Make a Move?</span>
            <div className="w-12 h-px bg-[#c9a84c]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-bold mb-5">
            Let&apos;s Find Your Place in Southern Utah
          </h2>
          <p className="text-white/60 mb-10 max-w-xl mx-auto">
            Whether you&apos;re buying your first home or selling a luxury estate, Jess is ready to guide you every step of the way — backed by the full Utah&apos;s Elevated Real Estate team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/listings"
               className="bg-[#8b1a4a] hover:bg-[#6d1439] text-white font-semibold px-8 py-4 rounded-sm text-base transition-all">
              Browse All Listings
            </Link>
            <Link href="/contact"
               className="border border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-black font-semibold px-8 py-4 rounded-sm text-base transition-all">
              Contact Jess
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

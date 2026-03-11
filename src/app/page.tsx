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
    <div className="min-h-screen" style={{ backgroundColor: "#faf8f5" }}>
      <Navbar />
      <LeadModal listing={selectedListing} onClose={() => setSelectedListing(null)} />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-orange-950" />

        {/* Canyon silhouette layer */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <svg viewBox="0 0 1440 800" className="absolute bottom-0 w-full" preserveAspectRatio="xMidYMax slice">
            <path d="M0 800 L0 500 Q100 400 200 450 L300 300 L400 380 Q500 280 600 320 L700 180 L820 260 Q920 160 1020 210 L1120 120 L1240 200 L1340 140 L1440 180 L1440 800 Z" fill="#c1613a" opacity="0.4"/>
            <path d="M0 800 L0 580 Q120 520 230 550 L360 480 L490 520 Q600 460 720 490 L850 420 L970 460 Q1080 390 1190 430 L1310 370 L1440 400 L1440 800 Z" fill="#d4a574" opacity="0.25"/>
            <path d="M0 800 L0 650 Q180 610 300 630 L450 590 L600 615 Q750 570 880 595 L1020 555 L1160 580 L1300 545 L1440 565 L1440 800 Z" fill="white" opacity="0.06"/>
          </svg>
        </div>

        {/* Warm tint overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pt-24 pb-16">
          {/* Social icons in hero */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <a href={socials.jessTikTok.url} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-1.5 text-white/70 hover:text-white text-xs transition-colors">
              <TikTokIcon className="w-3.5 h-3.5" />
              <span>{socials.jessTikTok.handle}</span>
            </a>
            <span className="text-white/30">·</span>
            <a href={socials.jessInstagram.url} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-1.5 text-white/70 hover:text-white text-xs transition-colors">
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>{socials.jessInstagram.handle}</span>
            </a>
          </div>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-px bg-[#c1613a]" />
            <span className="text-[#d4a574] text-xs font-semibold tracking-[0.25em] uppercase">
              Southern Utah Real Estate
            </span>
            <div className="w-8 h-px bg-[#c1613a]" />
          </div>

          {/* H1 */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white font-bold leading-tight mb-6">
            Find Your Dream Home<br className="hidden sm:block" /> in Red Rock Country
          </h1>

          <p className="text-white/75 text-lg sm:text-xl max-w-2xl mx-auto mb-3 leading-relaxed">
            Expert guidance from a local agent who knows every canyon, community, and hidden gem in Southern Utah.
          </p>

          {/* Team brand line */}
          <p className="text-[#d4a574] text-sm font-semibold tracking-wide mb-10">
            Jess Orvin · Lead Agent, Utah&apos;s Elevated Real Estate
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/listings"
               className="bg-[#c1613a] hover:bg-[#a8502f] text-white font-semibold px-8 py-4 rounded-full text-base transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Search Listings →
            </Link>
            <Link href="/contact"
               className="border border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-full text-base transition-all backdrop-blur-sm">
              Work With Jess
            </Link>
          </div>

          {/* Headshot placeholder */}
          <div className="mt-14 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#d4a574] to-[#c1613a] flex items-center justify-center border-4 border-white/20 shadow-xl">
              <span className="font-serif text-2xl font-bold text-white">JO</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-5 h-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────── */}
      <section className="bg-white border-y border-stone-100">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "50+", label: "Homes Sold" },
              { value: "5★", label: "Client Rating" },
              { value: "6", label: "Team Agents" },
              { value: "10+", label: "Years in Southern Utah" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <div className="font-serif text-3xl font-bold text-[#c1613a] mb-1">{stat.value}</div>
                <div className="text-xs text-stone-500 font-medium tracking-wide uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED LISTINGS (JESS) ──────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-semibold text-[#c1613a] tracking-widest uppercase mb-2">Jess&apos;s Listings</div>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-bold">Featured Properties</h2>
            <p className="text-stone-500 mt-2 text-sm max-w-md">
              Personally listed and marketed by Jess — each one elevated to stand out.
            </p>
          </div>
          <Link href="/listings" className="text-[#c1613a] hover:text-[#a8502f] font-semibold text-sm flex items-center gap-1 flex-shrink-0 transition-colors">
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
             className="inline-flex items-center gap-2 border border-stone-200 hover:border-[#c1613a] text-stone-700 hover:text-[#c1613a] font-semibold px-7 py-3 rounded-full text-sm transition-all">
            View All Jess&apos;s Listings →
          </Link>
        </div>
      </section>

      {/* ── TEAM LISTINGS ────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#f3f0eb" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-xs font-semibold text-[#c1613a] tracking-widest uppercase mb-2">The Team</div>
              <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-bold">Team Listings</h2>
              <p className="text-stone-500 mt-2 text-sm max-w-md">
                More great properties across Southern Utah, listed by the Utah&apos;s Elevated Real Estate team.
              </p>
            </div>
            <Link href="/listings?tab=team" className="text-[#c1613a] hover:text-[#a8502f] font-semibold text-sm flex items-center gap-1 flex-shrink-0 transition-colors">
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

      {/* ── ABOUT MINI ────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl bg-gradient-to-br from-stone-300 via-stone-200 to-amber-100 flex items-center justify-center shadow-lg">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#d4a574] to-[#c1613a] flex items-center justify-center shadow-lg">
                  <span className="font-serif text-4xl font-bold text-white">JO</span>
                </div>
              </div>
              {/* Accent badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#c1613a] text-white rounded-xl px-4 py-3 shadow-lg">
                <div className="text-xs font-semibold opacity-80 uppercase tracking-wider">Team Lead</div>
                <div className="font-serif font-bold text-sm">Utah&apos;s Elevated</div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <div className="text-xs font-semibold text-[#c1613a] tracking-widest uppercase mb-3">Lead Agent & Founder</div>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-bold mb-5">Meet Jess Orvin</h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              Southern Utah native and lead agent at Utah&apos;s Elevated Real Estate. I built this team to do things differently — with elevated marketing, genuine relationships, and deep local knowledge that only comes from truly living here.
            </p>
            <p className="text-stone-600 leading-relaxed mb-8">
              Whether you&apos;re searching for your forever home in the shadow of Snow Canyon or selling a luxury estate in Entrada, my team and I bring the same passion and precision to every transaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/about"
                 className="inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors">
                Learn More About Jess →
              </Link>
              <Link href="/team"
                 className="inline-flex items-center justify-center gap-2 border border-stone-200 hover:border-stone-400 text-stone-700 font-semibold px-6 py-3 rounded-full text-sm transition-colors">
                Meet the Full Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── MEET THE TEAM (mini) ───────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs font-semibold text-[#d4a574] tracking-widest uppercase mb-3">Utah&apos;s Elevated Real Estate</div>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-bold mb-3">The Dream Team</h2>
            <p className="text-stone-400 max-w-lg mx-auto text-sm">
              Six specialists. One mission. Helping you buy, sell, and love where you live in Southern Utah.
            </p>
            {/* Team Instagram */}
            <a href={socials.teamInstagram.url} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-1.5 text-stone-500 hover:text-[#d4a574] text-xs mt-3 transition-colors">
              <InstagramIcon className="w-3.5 h-3.5" />
              {socials.teamInstagram.handle}
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
            {[
              { initials: "JO", name: "Jess Orvin", title: "Lead Agent & Team Lead", color: "from-[#c1613a] to-orange-800" },
              { initials: "CC", name: "Christina Childs", title: "Co-Founder", color: "from-[#d4a574] to-amber-700" },
              { initials: "TB", name: "Tyler Brooks", title: "Real Estate Agent", color: "from-stone-500 to-stone-700" },
              { initials: "MC", name: "Madison Clark", title: "Real Estate Agent", color: "from-stone-500 to-stone-700" },
              { initials: "RT", name: "Ryan Torres", title: "Real Estate Agent", color: "from-stone-500 to-stone-700" },
              { initials: "KJ", name: "Kayla Jensen", title: "Real Estate Agent", color: "from-stone-500 to-stone-700" },
            ].map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center mb-3 shadow-lg`}>
                  <span className="font-serif text-xl font-bold text-white">{member.initials}</span>
                </div>
                <div className="text-white text-xs font-semibold leading-tight mb-0.5">{member.name}</div>
                <div className="text-stone-500 text-[10px]">{member.title}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/team"
               className="inline-flex items-center gap-2 border border-stone-700 hover:border-[#d4a574] text-stone-300 hover:text-[#d4a574] font-semibold px-7 py-3 rounded-full text-sm transition-all">
              Meet the Full Team →
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs font-semibold text-[#c1613a] tracking-widest uppercase mb-2">Client Stories</div>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-bold">What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-7 shadow-sm border border-stone-100 flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-stone-600 text-sm leading-relaxed flex-1 mb-5 italic">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <div className="font-semibold text-stone-900 text-sm">{t.name}</div>
                <div className="text-[#c1613a] text-xs mt-0.5">{t.location}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── VIDEOS ────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#f3f0eb" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-xs font-semibold text-[#c1613a] tracking-widest uppercase mb-2">Market Insights</div>
              <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-bold">Watch My Latest Videos</h2>
              <p className="text-stone-500 mt-2 text-sm">Market updates, neighborhood guides, and buyer/seller tips from Jess.</p>
            </div>
            <Link href="/videos" className="text-[#c1613a] hover:text-[#a8502f] font-semibold text-sm flex-shrink-0 transition-colors">
              View All Videos →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {videos.map((video, i) => (
              <div key={i} className="bg-stone-900 rounded-2xl overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
                <div className="relative h-44 bg-gradient-to-br from-stone-800 via-orange-950 to-stone-900 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-semibold bg-[#c1613a] text-white px-2 py-0.5 rounded-full">{video.topic}</span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="text-xs text-white/60 bg-black/40 px-2 py-0.5 rounded">{video.duration}</span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-white text-sm font-medium leading-snug">{video.title}</p>
                  <p className="text-stone-500 text-xs mt-1">Jess Orvin · Utah&apos;s Elevated Real Estate</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/videos"
               className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-white font-semibold px-7 py-3 rounded-full text-sm transition-colors">
              Watch on YouTube →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOLLOW / SOCIAL ───────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="text-xs font-semibold text-[#c1613a] tracking-widest uppercase mb-2">Stay Connected</div>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-bold mb-3">Follow Along</h2>
          <p className="text-stone-500 text-sm max-w-md mx-auto">
            Behind-the-scenes listings, market tips, and Southern Utah life — on TikTok and Instagram.
          </p>
          <div className="flex items-center justify-center gap-6 mt-6">
            <a href={socials.jessTikTok.url} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 text-stone-600 hover:text-[#c1613a] font-semibold text-sm transition-colors group">
              <TikTokIcon className="w-5 h-5" />
              <div className="text-left">
                <div className="leading-tight">{socials.jessTikTok.handle}</div>
                <div className="text-[10px] text-stone-400 group-hover:text-[#c1613a]/60 font-normal">TikTok</div>
              </div>
            </a>
            <a href={socials.jessInstagram.url} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 text-stone-600 hover:text-[#c1613a] font-semibold text-sm transition-colors group">
              <InstagramIcon className="w-5 h-5" />
              <div className="text-left">
                <div className="leading-tight">{socials.jessInstagram.handle}</div>
                <div className="text-[10px] text-stone-400 group-hover:text-[#c1613a]/60 font-normal">Instagram</div>
              </div>
            </a>
          </div>
        </div>

        {/* Social grid placeholder */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className={`aspect-square rounded-xl overflow-hidden bg-gradient-to-br ${
              i % 3 === 0 ? "from-orange-900 via-red-800 to-stone-900" :
              i % 3 === 1 ? "from-stone-700 via-amber-800 to-orange-900" :
              "from-amber-800 via-orange-700 to-red-900"
            } flex items-center justify-center group cursor-pointer hover:opacity-90 transition-opacity`}>
              <div className="text-center p-2">
                <div className="text-white/30 text-[10px] font-medium">@jessorvin</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <a href={socials.jessInstagram.url} target="_blank" rel="noopener noreferrer"
             className="text-stone-500 hover:text-[#c1613a] text-sm font-medium transition-colors">
            View on Instagram →
          </a>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-stone-900 via-stone-800 to-orange-950">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-xs font-semibold text-[#d4a574] tracking-widest uppercase mb-4">Ready to Make a Move?</div>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-bold mb-5">
            Let&apos;s Find Your Place in Southern Utah
          </h2>
          <p className="text-white/70 mb-10 max-w-xl mx-auto">
            Whether you&apos;re buying your first home or selling a luxury estate, Jess and the Utah&apos;s Elevated Real Estate team are ready to guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/listings"
               className="bg-[#c1613a] hover:bg-[#a8502f] text-white font-semibold px-8 py-4 rounded-full text-base transition-all shadow-lg hover:shadow-xl">
              Browse All Listings
            </Link>
            <Link href="/contact"
               className="border border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-full text-base transition-all">
              Contact Jess
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

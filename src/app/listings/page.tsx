"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadModal from "@/components/LeadModal";
import { type Listing, listings, formatPrice, cities } from "@/lib/listings";

const priceRanges = [
  { label: "Any Price", min: 0, max: Infinity },
  { label: "Under $400k", min: 0, max: 400000 },
  { label: "$400k – $600k", min: 400000, max: 600000 },
  { label: "$600k – $900k", min: 600000, max: 900000 },
  { label: "$900k – $1.2M", min: 900000, max: 1200000 },
  { label: "$1.2M+", min: 1200000, max: Infinity },
];

const bedOptions = [
  { label: "Any Beds", value: 0 },
  { label: "2+ Beds", value: 2 },
  { label: "3+ Beds", value: 3 },
  { label: "4+ Beds", value: 4 },
];

/* ── Full-width listing row ──────────────────────────────── */
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
      <div className="listing-img-wrap relative w-full h-56 sm:h-72 md:h-80">
        <div
          className={`listing-img-inner absolute inset-0 bg-gradient-to-br ${listing.gradient}`}
        />
        {/* Status badge */}
        <div className="absolute top-4 left-5 z-10">
          <span
            className={`text-[9px] tracking-[0.22em] uppercase px-3 py-1.5 font-medium ${
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
        {/* Agent badge */}
        <div className="absolute top-4 right-5 z-10">
          <span className="text-[9px] tracking-[0.15em] uppercase bg-black/50 text-white/80 px-2.5 py-1.5 backdrop-blur-sm">
            {listing.agent}
          </span>
        </div>
        {/* Price overlay */}
        <div className="absolute bottom-5 left-5 z-10">
          <div className="font-display text-3xl sm:text-4xl md:text-5xl text-white font-light leading-none drop-shadow-xl">
            {formatPrice(listing.price)}
          </div>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/12 transition-all duration-500 z-10" />
      </div>

      {/* Detail row */}
      <div className="py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-stone-100 group-hover:border-[#c9a84c]/40 transition-all duration-300">
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-xl sm:text-2xl font-light text-black tracking-wide truncate">
            {listing.address}
          </h3>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5">
            <span className="text-stone-400 text-xs tracking-wide">{listing.city}, {listing.state} {listing.zip}</span>
            <span className="text-stone-200">·</span>
            <span className="text-stone-400 text-xs">{listing.beds} Beds</span>
            <span className="text-stone-200">·</span>
            <span className="text-stone-400 text-xs">{listing.baths} Baths</span>
            <span className="text-stone-200">·</span>
            <span className="text-stone-400 text-xs">{listing.sqft.toLocaleString()} sqft</span>
            <span className="text-stone-200">·</span>
            <span className="text-stone-400 text-xs">{listing.type}</span>
          </div>
        </div>
        <button className="self-start sm:self-auto flex-shrink-0 text-[9px] tracking-[0.22em] uppercase border border-stone-200 text-stone-400 px-6 py-2.5 group-hover:border-[#c9a84c] group-hover:text-[#c9a84c] transition-all duration-300">
          View Details
        </button>
      </div>
    </div>
  );
}

/* ── Filter select ───────────────────────────────────────── */
function FilterSelect({
  value,
  onChange,
  children,
}: {
  value: string | number;
  onChange: (v: string) => void;
  children: React.ReactNode;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border-b border-stone-200 px-0 py-2 text-[10px] tracking-[0.18em] uppercase text-stone-500 bg-transparent focus:outline-none focus:border-[#c9a84c] cursor-pointer hover:text-black transition-colors duration-200 appearance-none pr-5"
    >
      {children}
    </select>
  );
}

/* ── Main listings content ───────────────────────────────── */
function ListingsContent() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");

  const [activeTab, setActiveTab] = useState<"jess" | "team">(
    tabParam === "team" ? "team" : "jess"
  );
  const [selectedListing, setSelectedListing] = useState<Listing | null>(null);
  const [priceRange, setPriceRange] = useState(0);
  const [minBeds, setMinBeds] = useState(0);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [sortBy, setSortBy] = useState<"price-asc" | "price-desc" | "newest">("newest");

  useEffect(() => {
    setPriceRange(0);
    setMinBeds(0);
    setSelectedCity("");
    setSelectedStatus("");
  }, [activeTab]);

  const filteredListings = useMemo(() => {
    const range = priceRanges[priceRange];
    let result = listings.filter((l) => {
      if (l.listingType !== activeTab) return false;
      if (l.price < range.min || l.price > range.max) return false;
      if (minBeds > 0 && l.beds < minBeds) return false;
      if (selectedCity && l.city !== selectedCity) return false;
      if (selectedStatus && l.status !== selectedStatus) return false;
      return true;
    });
    if (sortBy === "price-asc") result = [...result].sort((a, b) => a.price - b.price);
    else if (sortBy === "price-desc") result = [...result].sort((a, b) => b.price - a.price);
    return result;
  }, [activeTab, priceRange, minBeds, selectedCity, selectedStatus, sortBy]);

  const jessCount = listings.filter((l) => l.listingType === "jess").length;
  const teamCount = listings.filter((l) => l.listingType === "team").length;
  const hasFilters = priceRange !== 0 || minBeds !== 0 || selectedCity !== "" || selectedStatus !== "";

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <LeadModal listing={selectedListing} onClose={() => setSelectedListing(null)} />

      {/* ── Hero ─────────────────────────────────────── */}
      <div className="bg-black pt-20 lg:pt-24">
        <div className="h-px bg-[#c9a84c] opacity-40" />
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16 py-16">
          <p className="text-[#c9a84c] text-[10px] tracking-[0.35em] uppercase mb-5">
            Southern Utah Properties
          </p>
          <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-light text-white leading-none mb-6">
            Find Your<br />Home
          </h1>
          <p className="text-white/35 text-sm leading-relaxed tracking-wide max-w-lg">
            Hand-selected properties across St. George, Ivins, Santa Clara, Washington, Hurricane, and beyond.
          </p>
        </div>
        <div className="h-px bg-[#c9a84c] opacity-25" />
      </div>

      {/* ── Tabs + Filters — sticky ───────────────────── */}
      <div className="bg-white border-b border-stone-100 sticky top-[72px] lg:top-20 z-40">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          {/* Tabs */}
          <div className="flex items-center gap-0 -mb-px">
            <button
              onClick={() => setActiveTab("jess")}
              className={`py-4 pr-8 text-[10px] tracking-[0.2em] uppercase font-medium border-b-2 transition-all duration-300 flex items-center gap-2.5 ${
                activeTab === "jess"
                  ? "border-[#c9a84c] text-black"
                  : "border-transparent text-stone-400 hover:text-black"
              }`}
            >
              Jess&apos;s Listings
              <span className={`px-2 py-0.5 text-[9px] ${activeTab === "jess" ? "bg-[#c9a84c] text-black" : "bg-stone-100 text-stone-400"} transition-colors duration-300`}>
                {jessCount}
              </span>
            </button>
            <button
              onClick={() => setActiveTab("team")}
              className={`py-4 px-8 text-[10px] tracking-[0.2em] uppercase font-medium border-b-2 transition-all duration-300 flex items-center gap-2.5 ${
                activeTab === "team"
                  ? "border-[#c9a84c] text-black"
                  : "border-transparent text-stone-400 hover:text-black"
              }`}
            >
              Team Listings
              <span className={`px-2 py-0.5 text-[9px] ${activeTab === "team" ? "bg-[#c9a84c] text-black" : "bg-stone-100 text-stone-400"} transition-colors duration-300`}>
                {teamCount}
              </span>
            </button>
          </div>

          {/* Filters */}
          <div className="py-3 flex flex-wrap items-end gap-6 sm:gap-8">
            <FilterSelect value={priceRange} onChange={(v) => setPriceRange(Number(v))}>
              {priceRanges.map((r, i) => (
                <option key={i} value={i}>{r.label}</option>
              ))}
            </FilterSelect>

            <FilterSelect value={minBeds} onChange={(v) => setMinBeds(Number(v))}>
              {bedOptions.map((b) => (
                <option key={b.value} value={b.value}>{b.label}</option>
              ))}
            </FilterSelect>

            <FilterSelect value={selectedCity} onChange={setSelectedCity}>
              <option value="">All Cities</option>
              {cities.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </FilterSelect>

            <FilterSelect value={selectedStatus} onChange={setSelectedStatus}>
              <option value="">All Status</option>
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
              <option value="Sold">Sold</option>
            </FilterSelect>

            <FilterSelect value={sortBy} onChange={(v) => setSortBy(v as typeof sortBy)}>
              <option value="newest">Newest First</option>
              <option value="price-asc">Price ↑</option>
              <option value="price-desc">Price ↓</option>
            </FilterSelect>

            {hasFilters && (
              <button
                onClick={() => { setPriceRange(0); setMinBeds(0); setSelectedCity(""); setSelectedStatus(""); }}
                className="text-[9px] tracking-[0.18em] uppercase text-stone-300 hover:text-[#c9a84c] transition-colors duration-300 border-b border-transparent hover:border-[#c9a84c] pb-2"
              >
                Clear
              </button>
            )}

            <div className="ml-auto text-[9px] tracking-[0.15em] uppercase text-stone-300 pb-2">
              {filteredListings.length} {filteredListings.length === 1 ? "listing" : "listings"}
            </div>
          </div>
        </div>
      </div>

      {/* ── Listings ─────────────────────────────────── */}
      <div className="max-w-screen-xl mx-auto px-6 lg:px-16 py-12">
        {/* Context header */}
        <div className="mb-10">
          <p className="text-[10px] tracking-[0.25em] uppercase text-stone-400">
            {activeTab === "jess"
              ? "Personally listed by Jess Orvin · Co-Founder, Utah's Elevated Real Estate"
              : "Listed by Utah's Elevated Real Estate · Our team of specialists"}
          </p>
        </div>

        {filteredListings.length === 0 ? (
          <div className="text-center py-32">
            <div className="font-display text-7xl font-light text-stone-100 mb-8">0</div>
            <h3 className="font-display text-3xl font-light text-black mb-3">No listings match</h3>
            <p className="text-stone-400 text-sm mb-8 tracking-wide">Try adjusting your filters — or contact Jess for off-market options.</p>
            <button
              onClick={() => { setPriceRange(0); setMinBeds(0); setSelectedCity(""); setSelectedStatus(""); }}
              className="text-[10px] tracking-[0.22em] uppercase border border-stone-200 text-stone-500 px-8 py-3.5 hover:border-black hover:text-black transition-all duration-300"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-0">
            {filteredListings.map((listing) => (
              <ListingRow key={listing.id} listing={listing} onView={setSelectedListing} />
            ))}
          </div>
        )}

        {filteredListings.length > 0 && (
          <div className="mt-12 pt-8 border-t border-stone-100 flex flex-wrap gap-8 text-[10px] tracking-[0.15em] uppercase text-stone-300">
            <span>
              <span className="text-black">{filteredListings.length}</span> listings shown
            </span>
            <span>
              Range:{" "}
              <span className="text-black">
                {formatPrice(Math.min(...filteredListings.map((l) => l.price)))} – {formatPrice(Math.max(...filteredListings.map((l) => l.price)))}
              </span>
            </span>
            <span>
              Cities:{" "}
              <span className="text-black">
                {[...new Set(filteredListings.map((l) => l.city))].join(", ")}
              </span>
            </span>
          </div>
        )}
      </div>

      {/* ── CTA ─────────────────────────────────────── */}
      <div className="gold-divider" />
      <div className="bg-stone-50 py-20 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-[#c9a84c] text-[10px] tracking-[0.32em] uppercase mb-5">Off-Market & Coming Soon</p>
          <h3 className="font-display text-4xl sm:text-5xl font-light text-black mb-5">
            Don&apos;t See What You&apos;re Looking For?
          </h3>
          <p className="text-stone-400 text-sm leading-relaxed tracking-wide mb-10 max-w-md mx-auto">
            Jess has access to off-market and coming-soon properties across Southern Utah. Tell her exactly what you need.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-[10px] tracking-[0.22em] uppercase bg-black text-white px-10 py-4 hover:bg-[#c9a84c] hover:text-black transition-all duration-300"
          >
            Contact Jess Directly
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default function ListingsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="font-display text-2xl font-light text-stone-200">Loading...</div>
        </div>
      }
    >
      <ListingsContent />
    </Suspense>
  );
}

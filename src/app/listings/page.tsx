"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ListingCard from "@/components/ListingCard";
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
  { label: "Any", value: 0 },
  { label: "2+", value: 2 },
  { label: "3+", value: 3 },
  { label: "4+", value: 4 },
];

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

  // Reset filters when tab changes
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
    <div className="min-h-screen" style={{ backgroundColor: "#faf8f5" }}>
      <Navbar />
      <LeadModal listing={selectedListing} onClose={() => setSelectedListing(null)} />

      {/* ── HERO ────────────────────────────────────── */}
      <div className="pt-20 lg:pt-24 bg-gradient-to-br from-stone-900 via-stone-800 to-orange-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="text-xs font-semibold text-[#d4a574] tracking-widest uppercase mb-3">Southern Utah Properties</div>
          <h1 className="font-serif text-4xl sm:text-5xl text-white font-bold mb-3">
            Find Your Home
          </h1>
          <p className="text-stone-400 text-base max-w-xl">
            Hand-selected properties across St. George, Ivins, Santa Clara, Washington, Hurricane, and beyond — listed by Jess Orvin and the Utah&apos;s Elevated Real Estate team.
          </p>
        </div>
      </div>

      {/* ── TABS + FILTERS ─────────────────────────── */}
      <div className="bg-white border-b border-stone-100 sticky top-16 lg:top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex items-center gap-0 border-b border-stone-100 -mb-px">
            <button
              onClick={() => setActiveTab("jess")}
              className={`px-5 py-4 text-sm font-semibold border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === "jess"
                  ? "border-[#c1613a] text-[#c1613a]"
                  : "border-transparent text-stone-500 hover:text-stone-800"
              }`}
            >
              Jess&apos;s Listings
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                activeTab === "jess" ? "bg-[#c1613a]/10 text-[#c1613a]" : "bg-stone-100 text-stone-500"
              }`}>
                {jessCount}
              </span>
            </button>
            <button
              onClick={() => setActiveTab("team")}
              className={`px-5 py-4 text-sm font-semibold border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === "team"
                  ? "border-[#c1613a] text-[#c1613a]"
                  : "border-transparent text-stone-500 hover:text-stone-800"
              }`}
            >
              Team Listings
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                activeTab === "team" ? "bg-[#c1613a]/10 text-[#c1613a]" : "bg-stone-100 text-stone-500"
              }`}>
                {teamCount}
              </span>
            </button>
          </div>

          {/* Filters */}
          <div className="py-3 flex flex-wrap items-center gap-2 sm:gap-3">
            {/* Price */}
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="border border-stone-200 rounded-lg px-3 py-2 text-sm text-stone-700 bg-white focus:outline-none focus:border-[#c1613a] cursor-pointer"
            >
              {priceRanges.map((r, i) => (
                <option key={i} value={i}>{r.label}</option>
              ))}
            </select>

            {/* Beds */}
            <select
              value={minBeds}
              onChange={(e) => setMinBeds(Number(e.target.value))}
              className="border border-stone-200 rounded-lg px-3 py-2 text-sm text-stone-700 bg-white focus:outline-none focus:border-[#c1613a] cursor-pointer"
            >
              {bedOptions.map((b) => (
                <option key={b.value} value={b.value}>
                  {b.value === 0 ? "Any Beds" : `${b.label} Beds`}
                </option>
              ))}
            </select>

            {/* City */}
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="border border-stone-200 rounded-lg px-3 py-2 text-sm text-stone-700 bg-white focus:outline-none focus:border-[#c1613a] cursor-pointer"
            >
              <option value="">All Cities</option>
              {cities.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>

            {/* Status */}
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="border border-stone-200 rounded-lg px-3 py-2 text-sm text-stone-700 bg-white focus:outline-none focus:border-[#c1613a] cursor-pointer"
            >
              <option value="">All Status</option>
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
              <option value="Sold">Sold</option>
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="border border-stone-200 rounded-lg px-3 py-2 text-sm text-stone-700 bg-white focus:outline-none focus:border-[#c1613a] cursor-pointer"
            >
              <option value="newest">Sort: Newest</option>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
            </select>

            {/* Clear filters */}
            {hasFilters && (
              <button
                onClick={() => { setPriceRange(0); setMinBeds(0); setSelectedCity(""); setSelectedStatus(""); }}
                className="text-xs text-stone-400 hover:text-[#c1613a] transition-colors underline underline-offset-2 ml-1"
              >
                Clear Filters
              </button>
            )}

            {/* Result count */}
            <div className="ml-auto text-xs text-stone-400">
              {filteredListings.length} {filteredListings.length === 1 ? "listing" : "listings"}
            </div>
          </div>
        </div>
      </div>

      {/* ── LISTINGS GRID ───────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Tab context header */}
        <div className="mb-6">
          {activeTab === "jess" ? (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#c1613a] to-orange-800 flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-bold text-white">JO</span>
              </div>
              <div>
                <div className="font-semibold text-stone-900 text-sm">Jess Orvin&apos;s Listings</div>
                <div className="text-xs text-stone-400">Lead Agent · Utah&apos;s Elevated Real Estate</div>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-stone-600 to-stone-800 flex items-center justify-center flex-shrink-0">
                <span className="text-[9px] font-bold text-white">UER</span>
              </div>
              <div>
                <div className="font-semibold text-stone-900 text-sm">Utah&apos;s Elevated Real Estate — Team Listings</div>
                <div className="text-xs text-stone-400">Properties listed by our team of specialists</div>
              </div>
            </div>
          )}
        </div>

        {filteredListings.length === 0 ? (
          <div className="text-center py-24">
            <div className="text-5xl mb-4">🏜️</div>
            <h3 className="font-serif text-xl text-stone-700 mb-2">No listings match your filters</h3>
            <p className="text-stone-400 text-sm mb-6">Try adjusting your search — or contact Jess for off-market options.</p>
            <button
              onClick={() => { setPriceRange(0); setMinBeds(0); setSelectedCity(""); setSelectedStatus(""); }}
              className="bg-[#c1613a] hover:bg-[#a8502f] text-white font-semibold px-6 py-2.5 rounded-full text-sm transition-colors"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} onViewDetails={setSelectedListing} />
            ))}
          </div>
        )}

        {/* Price range summary */}
        {filteredListings.length > 0 && (
          <div className="mt-10 pt-8 border-t border-stone-100 flex flex-wrap gap-6 text-sm text-stone-400">
            <div>
              <span className="text-stone-600 font-medium">{filteredListings.length}</span> listings shown
            </div>
            <div>
              Price range:{" "}
              <span className="text-stone-600 font-medium">
                {formatPrice(Math.min(...filteredListings.map((l) => l.price)))} – {formatPrice(Math.max(...filteredListings.map((l) => l.price)))}
              </span>
            </div>
            <div>
              Cities:{" "}
              <span className="text-stone-600 font-medium">
                {[...new Set(filteredListings.map((l) => l.city))].join(", ")}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* ── CTA ─────────────────────────────────────── */}
      <div className="bg-stone-50 border-t border-stone-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="font-serif text-2xl text-stone-900 font-bold mb-3">Don&apos;t See What You&apos;re Looking For?</h3>
          <p className="text-stone-500 text-sm mb-6">
            Jess has access to off-market and coming-soon properties across Southern Utah. Tell her what you&apos;re looking for.
          </p>
          <a href="/contact"
             className="inline-flex items-center gap-2 bg-[#c1613a] hover:bg-[#a8502f] text-white font-semibold px-7 py-3 rounded-full text-sm transition-colors shadow-sm">
            Contact Jess Directly →
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default function ListingsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#faf8f5" }}>
      <div className="text-stone-400">Loading listings...</div>
    </div>}>
      <ListingsContent />
    </Suspense>
  );
}

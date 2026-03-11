"use client";

import { useState, useEffect } from "react";
import { type Listing, formatPrice } from "@/lib/listings";

type LeadModalProps = {
  listing: Listing | null;
  onClose: () => void;
};

export default function LeadModal({ listing, onClose }: LeadModalProps) {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = listing ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [listing]);

  if (!listing) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.email || !form.phone) {
      setError("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, listingId: listing.id, listingAddress: listing.address, listingPrice: listing.price }),
      });
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <div className="relative bg-white w-full max-w-md overflow-hidden border border-stone-200">
        {/* Top gold accent bar */}
        <div className="h-1 bg-[#c9a84c]" />

        <div className="p-6 sm:p-8">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-stone-400 hover:text-[#0d0d0d] transition-colors p-1"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {submitted ? (
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-[#8b1a4a]/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#8b1a4a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-[#0d0d0d] mb-2">You&apos;re All Set!</h3>
              <p className="text-[#6b7280] text-sm mb-1">
                Jess will be in touch shortly with full details on
              </p>
              <p className="text-[#8b1a4a] font-semibold text-sm mb-6">{listing.address}, {listing.city}</p>
              <button
                onClick={onClose}
                className="w-full bg-[#8b1a4a] hover:bg-[#6d1439] text-white font-semibold py-3 rounded-sm transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              {/* Listing preview */}
              <div className="flex items-start gap-3 mb-6 pb-5 border-b border-stone-100">
                <div className={`w-16 h-16 bg-gradient-to-br ${listing.gradient} flex-shrink-0`} />
                <div className="min-w-0">
                  <div className="text-lg font-bold text-[#0d0d0d]">{formatPrice(listing.price)}</div>
                  <div className="text-sm text-[#6b7280] truncate">{listing.address}</div>
                  <div className="text-xs text-[#9ca3af]">{listing.city}, {listing.state} · {listing.beds}bd / {listing.baths}ba / {listing.sqft.toLocaleString()} sqft</div>
                </div>
              </div>

              {/* Heading */}
              <div className="mb-5">
                <h3 className="font-serif text-2xl text-[#0d0d0d] mb-1">Unlock Listing Details</h3>
                <p className="text-[#6b7280] text-sm">
                  Enter your info and {listing.agent} will send you the full property details right away.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-[#6b7280] mb-1">First Name <span className="text-[#8b1a4a]">*</span></label>
                    <input
                      type="text"
                      placeholder="Jane"
                      value={form.firstName}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      className="w-full border border-stone-200 rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:border-[#8b1a4a] focus:ring-1 focus:ring-[#8b1a4a]/20 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#6b7280] mb-1">Last Name</label>
                    <input
                      type="text"
                      placeholder="Smith"
                      value={form.lastName}
                      onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      className="w-full border border-stone-200 rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:border-[#8b1a4a] focus:ring-1 focus:ring-[#8b1a4a]/20 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#6b7280] mb-1">Email <span className="text-[#8b1a4a]">*</span></label>
                  <input
                    type="email"
                    placeholder="jane@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-stone-200 rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:border-[#8b1a4a] focus:ring-1 focus:ring-[#8b1a4a]/20 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#6b7280] mb-1">Phone <span className="text-[#8b1a4a]">*</span></label>
                  <input
                    type="tel"
                    placeholder="(435) 555-0100"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full border border-stone-200 rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:border-[#8b1a4a] focus:ring-1 focus:ring-[#8b1a4a]/20 transition"
                  />
                </div>

                {error && (
                  <p className="text-red-500 text-xs">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-1 w-full bg-[#8b1a4a] hover:bg-[#6d1439] disabled:opacity-60 text-white font-semibold py-3 rounded-sm transition-colors flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : "Send Me This Listing →"}
                </button>

                <p className="text-center text-[11px] text-[#9ca3af] leading-relaxed">
                  You&apos;ll receive full listing details by email. Jess or a team member may reach out — no pressure, ever.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

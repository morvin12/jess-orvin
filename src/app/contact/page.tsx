"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", message: "", intent: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <div className="pt-20 lg:pt-24 bg-[#0d0d0d]">
        {/* Gold accent */}
        <div className="h-px bg-[#c9a84c] opacity-60" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase">Let&apos;s Connect</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl text-white font-bold mb-3">Contact Jess</h1>
          <p className="text-white/50 text-base max-w-lg">
            Ready to buy, sell, or just have questions about the Southern Utah market? Reach out — Jess personally responds to every inquiry.
          </p>
        </div>
      </div>

      {/* Gold accent bar */}
      <div className="h-0.5 bg-[#c9a84c]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* ── FORM ──────────────────────────────── */}
          <div className="lg:col-span-3">
            <div className="bg-white border border-stone-200 p-8">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-[#8b1a4a] flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl text-[#0d0d0d] mb-2">Message Received!</h3>
                  <p className="text-[#6b7280] text-sm max-w-sm mx-auto">
                    Thanks for reaching out. Jess will get back to you within 24 hours — usually much sooner.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="font-serif text-2xl text-[#0d0d0d] font-bold mb-6">Send a Message</h2>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#0d0d0d] tracking-wider uppercase mb-1.5">Full Name <span className="text-[#8b1a4a]">*</span></label>
                        <input
                          type="text"
                          placeholder="Jane Smith"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full border border-stone-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#8b1a4a] focus:ring-1 focus:ring-[#8b1a4a]/20 transition"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#0d0d0d] tracking-wider uppercase mb-1.5">Phone</label>
                        <input
                          type="tel"
                          placeholder="(435) 555-0100"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full border border-stone-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#8b1a4a] focus:ring-1 focus:ring-[#8b1a4a]/20 transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0d0d0d] tracking-wider uppercase mb-1.5">Email <span className="text-[#8b1a4a]">*</span></label>
                      <input
                        type="email"
                        placeholder="jane@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full border border-stone-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#8b1a4a] focus:ring-1 focus:ring-[#8b1a4a]/20 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0d0d0d] tracking-wider uppercase mb-1.5">Are you buying or selling?</label>
                      <select
                        value={form.intent}
                        onChange={(e) => setForm({ ...form, intent: e.target.value })}
                        className="w-full border border-stone-200 rounded-sm px-4 py-3 text-sm text-[#0d0d0d] bg-white focus:outline-none focus:border-[#8b1a4a] cursor-pointer"
                      >
                        <option value="">Select one…</option>
                        <option value="buying">I&apos;m Looking to Buy</option>
                        <option value="selling">I&apos;m Looking to Sell</option>
                        <option value="both">Buying & Selling</option>
                        <option value="investing">Real Estate Investment</option>
                        <option value="question">Just Have a Question</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0d0d0d] tracking-wider uppercase mb-1.5">Message <span className="text-[#8b1a4a]">*</span></label>
                      <textarea
                        placeholder="Tell Jess what you're looking for, or ask anything about the Southern Utah market…"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        rows={5}
                        className="w-full border border-stone-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#8b1a4a] focus:ring-1 focus:ring-[#8b1a4a]/20 transition resize-none"
                      />
                    </div>

                    {error && <p className="text-red-500 text-xs">{error}</p>}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#8b1a4a] hover:bg-[#6d1439] disabled:opacity-60 text-white font-semibold py-3.5 rounded-sm transition-colors flex items-center justify-center gap-2 text-sm"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                          </svg>
                          Sending…
                        </>
                      ) : "Send Message →"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

          {/* ── INFO SIDEBAR ──────────────────────── */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Jess card */}
            <div className="bg-white border border-stone-200 p-6">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 bg-[#0d0d0d] border border-[#c9a84c] flex items-center justify-center flex-shrink-0">
                  <span className="font-serif text-xl font-bold text-[#c9a84c]">JO</span>
                </div>
                <div>
                  <div className="font-serif font-bold text-[#0d0d0d]">Jess Orvin</div>
                  <div className="text-xs text-[#8b1a4a] font-semibold tracking-wide">Co-Founder</div>
                  <div className="text-xs text-[#9ca3af]">Utah&apos;s Elevated Real Estate</div>
                </div>
              </div>
              <div className="flex flex-col gap-2 text-sm text-[#6b7280]">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#9ca3af] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>St. George, Utah 84770</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#9ca3af] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>Licensed in the State of Utah</span>
                </div>
              </div>
            </div>

            {/* Christina card */}
            <div className="bg-white border border-stone-200 p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#0d0d0d] border border-[#c9a84c]/40 flex items-center justify-center flex-shrink-0">
                  <span className="font-serif text-xl font-bold text-[#c9a84c]">CC</span>
                </div>
                <div>
                  <div className="font-serif font-bold text-[#0d0d0d]">Christina Childs</div>
                  <div className="text-xs text-[#8b1a4a] font-semibold tracking-wide">Co-Founder</div>
                  <div className="text-xs text-[#9ca3af]">Utah&apos;s Elevated Real Estate</div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="bg-[#0d0d0d] p-6 border border-white/5">
              <div className="text-xs font-semibold text-[#c9a84c] uppercase tracking-widest mb-4">Follow Jess</div>
              <div className="flex flex-col gap-3">
                <a href={socials.jessTikTok.url} target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors group">
                  <TikTokIcon className="w-4 h-4 group-hover:text-[#c9a84c] transition-colors" />
                  <div>
                    <div className="font-semibold">{socials.jessTikTok.handle}</div>
                    <div className="text-xs text-stone-600">TikTok</div>
                  </div>
                </a>
                <a href={socials.jessInstagram.url} target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors group">
                  <InstagramIcon className="w-4 h-4 group-hover:text-[#c9a84c] transition-colors" />
                  <div>
                    <div className="font-semibold">{socials.jessInstagram.handle}</div>
                    <div className="text-xs text-stone-600">Instagram</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Response promise */}
            <div className="bg-white border border-[#c9a84c]/30 p-5">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-[#c9a84c] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-[#0d0d0d]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#0d0d0d] mb-1">Quick Response Promise</div>
                  <div className="text-xs text-[#6b7280] leading-relaxed">
                    Jess personally responds to every inquiry — typically within a few hours during business hours.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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

const stats = [
  { value: "50+", label: "Homes Sold" },
  { value: "5★", label: "Average Rating" },
  { value: "6", label: "Team Members" },
  { value: "10+", label: "Years in S. Utah" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#faf8f5" }}>
      <Navbar />

      {/* ── HERO ─────────────────────────────────── */}
      <div className="pt-20 lg:pt-24 bg-gradient-to-br from-stone-900 via-stone-800 to-orange-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Photo placeholder */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-3xl bg-gradient-to-br from-[#d4a574] via-[#c1613a] to-orange-800 flex items-center justify-center shadow-2xl border-4 border-white/10">
                  <span className="font-serif text-6xl font-bold text-white">JO</span>
                </div>
                <div className="absolute -bottom-3 -right-3 bg-white text-stone-900 rounded-xl px-3 py-2 shadow-lg">
                  <div className="text-[10px] font-medium text-stone-500 uppercase tracking-wider">Lead Agent</div>
                  <div className="font-serif font-bold text-xs">Utah&apos;s Elevated</div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div>
              <div className="text-xs font-semibold text-[#d4a574] tracking-widest uppercase mb-3">Lead Agent & Team Founder</div>
              <h1 className="font-serif text-4xl sm:text-5xl text-white font-bold mb-4">Jess Orvin</h1>
              <p className="text-stone-300 text-lg mb-6 max-w-xl leading-relaxed">
                Southern Utah native. Team founder. Your guide to Red Rock Country real estate.
              </p>
              <div className="flex items-center gap-4">
                <a href={socials.jessTikTok.url} target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors">
                  <TikTokIcon className="w-4 h-4" />
                  {socials.jessTikTok.handle}
                </a>
                <a href={socials.jessInstagram.url} target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors">
                  <InstagramIcon className="w-4 h-4" />
                  {socials.jessInstagram.handle}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── STATS ────────────────────────────────── */}
      <div className="bg-white border-b border-stone-100">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <div className="font-serif text-3xl font-bold text-[#c1613a] mb-1">{stat.value}</div>
                <div className="text-xs text-stone-500 font-medium tracking-wide uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* ── ABOUT JESS ───────────────────────────── */}
        <section className="mb-14">
          <div className="text-xs font-semibold text-[#c1613a] tracking-widest uppercase mb-3">Her Story</div>
          <h2 className="font-serif text-3xl text-stone-900 font-bold mb-6">About Jess</h2>
          <div className="flex flex-col gap-4 text-stone-600 leading-relaxed">
            <p>
              Jess Orvin is the lead agent and co-founder of Utah&apos;s Elevated Real Estate — a team built from the ground up with a single belief: Southern Utah buyers and sellers deserve more. More expertise, more marketing sophistication, more genuine care.
            </p>
            <p>
              Born and raised in Southern Utah, Jess knows this landscape the way only a local can. She knows which neighborhoods are on the rise and which canyon views are worth every penny. She understands why families relocate here, why investors are watching it closely, and why the people who live here never want to leave.
            </p>
            <p>
              Before founding Utah&apos;s Elevated Real Estate with co-founder Christina Childs, Jess spent years honing her craft — studying the market, building relationships, and developing the kind of intuition that only comes from truly immersing yourself in a place. Today, she leads a team of six specialists who share her commitment to exceptional service.
            </p>
          </div>
        </section>

        {/* ── THE TEAM BRAND ───────────────────────── */}
        <section className="mb-14 bg-white rounded-2xl p-8 shadow-sm border border-stone-100">
          <div className="text-xs font-semibold text-[#c1613a] tracking-widest uppercase mb-3">The Brand She Built</div>
          <h2 className="font-serif text-2xl text-stone-900 font-bold mb-4">Utah&apos;s Elevated Real Estate</h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            When Jess and Christina Childs co-founded Utah&apos;s Elevated Real Estate, they set out to create something that didn&apos;t exist in Southern Utah — a brokerage that matched the beauty of the landscape with the quality of its work.
          </p>
          <p className="text-stone-600 leading-relaxed mb-6">
            &ldquo;Elevated&rdquo; isn&apos;t just a name. It&apos;s the standard. Every listing gets professional photography, compelling digital marketing, and a strategic pricing approach. Every buyer gets honest guidance, deep local knowledge, and an advocate who genuinely fights for them.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Elevated Marketing", "Local Expertise", "Client-First Philosophy", "Full Team Support", "Digital-First Strategy"].map((tag) => (
              <span key={tag} className="text-xs font-medium bg-stone-50 border border-stone-100 text-stone-600 px-3 py-1.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* ── BEYOND REAL ESTATE ───────────────────── */}
        <section className="mb-14">
          <div className="text-xs font-semibold text-[#c1613a] tracking-widest uppercase mb-3">The Full Picture</div>
          <h2 className="font-serif text-2xl text-stone-900 font-bold mb-5">Beyond Real Estate</h2>
          <div className="flex flex-col sm:flex-row gap-8 items-start">
            <div className="flex-1 text-stone-600 leading-relaxed flex flex-col gap-4">
              <p>
                Jess brings the same eye for beauty and detail to everything she does. Known for her lifestyle brand and presence across TikTok and Instagram, she&apos;s built a following of people who appreciate her authentic take on Southern Utah living — the sunsets, the canyon hikes, the hidden gems that only a local knows.
              </p>
              <p>
                That same sensibility informs her real estate work. She doesn&apos;t just list homes — she tells their story. And that difference shows in the results.
              </p>
            </div>
            <div className="flex-shrink-0 flex flex-col gap-3">
              <a href={socials.jessTikTok.url} target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-3 bg-stone-900 hover:bg-stone-800 text-white px-5 py-3 rounded-xl text-sm font-semibold transition-colors">
                <TikTokIcon className="w-4 h-4" />
                Follow on TikTok
              </a>
              <a href={socials.jessInstagram.url} target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-3 border border-stone-200 hover:border-[#c1613a] text-stone-700 hover:text-[#c1613a] px-5 py-3 rounded-xl text-sm font-semibold transition-colors">
                <InstagramIcon className="w-4 h-4" />
                Follow on Instagram
              </a>
            </div>
          </div>
        </section>

        {/* ── CREDENTIALS ──────────────────────────── */}
        <section className="mb-14 bg-stone-50 rounded-2xl p-8 border border-stone-100">
          <div className="text-xs font-semibold text-[#c1613a] tracking-widest uppercase mb-3">Credentials</div>
          <h2 className="font-serif text-2xl text-stone-900 font-bold mb-6">Qualifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Utah Real Estate License", detail: "Licensed Realtor, State of Utah" },
              { label: "Team Founder", detail: "Utah's Elevated Real Estate" },
              { label: "Southern Utah Specialist", detail: "Washington County Expert" },
              { label: "Luxury Property Certified", detail: "High-end residential sales" },
              { label: "Investment Property Specialist", detail: "STR & long-term rental strategies" },
              { label: "Digital Marketing Expert", detail: "TikTok, Instagram, targeted ads" },
            ].map((cred) => (
              <div key={cred.label} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#c1613a]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-[#c1613a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-stone-900">{cred.label}</div>
                  <div className="text-xs text-stone-500">{cred.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────── */}
        <section className="bg-gradient-to-br from-stone-900 to-orange-950 rounded-2xl p-8 text-center">
          <h2 className="font-serif text-2xl text-white font-bold mb-3">Ready to Work With Jess?</h2>
          <p className="text-stone-400 text-sm mb-6 max-w-md mx-auto">
            Whether you&apos;re buying your first home or selling a luxury estate in Southern Utah, Jess and her team are ready to guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/contact"
               className="bg-[#c1613a] hover:bg-[#a8502f] text-white font-semibold px-7 py-3 rounded-full text-sm transition-colors shadow-lg">
              Contact Jess →
            </Link>
            <Link href="/listings"
               className="border border-white/20 hover:border-white/50 text-white font-semibold px-7 py-3 rounded-full text-sm transition-colors">
              View Listings
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

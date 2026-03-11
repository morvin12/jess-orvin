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

const jessStats = [
  { value: "50+", label: "Homes Sold" },
  { value: "5★", label: "Average Rating" },
  { value: "10+", label: "Years in S. Utah" },
  { value: "#1", label: "Your Expert" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ══════════════════════════════════════════════════════
          PART 1: ABOUT JESS — Personal Brand
      ══════════════════════════════════════════════════════ */}

      {/* ── JESS HERO ─────────────────────────────────────── */}
      <div className="pt-20 lg:pt-24 bg-[#0d0d0d]">
        {/* Gold top accent */}
        <div className="h-px bg-[#c9a84c] opacity-60" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Photo placeholder */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-48 h-48 sm:w-64 sm:h-64 bg-[#111111] border border-[#c9a84c] flex items-center justify-center">
                  <span className="font-serif text-6xl font-bold text-[#c9a84c]">JO</span>
                </div>
                <div className="absolute -bottom-3 -right-3 bg-white text-[#0d0d0d] px-3 py-2">
                  <div className="text-[10px] font-medium text-[#9ca3af] uppercase tracking-widest">Personal Brand</div>
                  <div className="font-serif font-bold text-xs">Jess Orvin</div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#c9a84c]" />
                <span className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase">Your Southern Utah Real Estate Expert</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl text-white font-bold mb-4">About Jess Orvin</h1>
              <p className="text-white/60 text-lg mb-6 max-w-xl leading-relaxed">
                Southern Utah native. Real estate expert. Lifestyle creator. Your guide to Red Rock Country.
              </p>
              <div className="flex items-center gap-4">
                <a href={socials.jessTikTok.url} target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 text-white/50 hover:text-[#c9a84c] text-sm transition-colors">
                  <TikTokIcon className="w-4 h-4" />
                  {socials.jessTikTok.handle}
                </a>
                <a href={socials.jessInstagram.url} target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 text-white/50 hover:text-[#c9a84c] text-sm transition-colors">
                  <InstagramIcon className="w-4 h-4" />
                  {socials.jessInstagram.handle}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gold accent bar */}
      <div className="h-0.5 w-full bg-[#c9a84c]" />

      {/* ── JESS STATS ──────────────────────────────────────── */}
      <div className="bg-white border-b border-stone-100">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {jessStats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <div className="font-serif text-3xl font-bold text-[#8b1a4a] mb-1">{stat.value}</div>
                <div className="text-xs text-[#6b7280] font-medium tracking-wide uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* ── ABOUT JESS ───────────────────────────────────── */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-[#c9a84c]" />
            <div className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase">Her Story</div>
          </div>
          <h2 className="font-serif text-3xl text-[#0d0d0d] font-bold mb-6">About Jess</h2>
          <div className="flex flex-col gap-4 text-[#6b7280] leading-relaxed">
            <p>
              Jess Orvin is Southern Utah&apos;s real estate expert — born and raised in the red rock canyons, she knows this landscape the way only a true local can. She knows which neighborhoods are on the rise, which views are worth every penny, and why the people who move here never want to leave.
            </p>
            <p>
              Her journey into real estate was a natural extension of her love for Southern Utah. After years of building deep local knowledge and genuine relationships in the community, Jess launched her career with a single belief: buyers and sellers in this market deserve more. More expertise. More marketing sophistication. More genuine care.
            </p>
            <p>
              Today, Jess is one of the region&apos;s most trusted agents — and the proud co-founder of Utah&apos;s Elevated Real Estate, which she built alongside Christina Childs to serve the growing Southern Utah market at the highest level.
            </p>
          </div>
        </section>

        {/* ── GOLD DIVIDER ─────────────────────────────────── */}
        <div className="flex items-center gap-4 mb-14">
          <div className="flex-1 h-px bg-stone-100" />
          <div className="w-2 h-2 bg-[#c9a84c]" style={{ transform: "rotate(45deg)" }} />
          <div className="flex-1 h-px bg-stone-100" />
        </div>

        {/* ── BEYOND REAL ESTATE ───────────────────────────── */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-[#c9a84c]" />
            <div className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase">The Full Picture</div>
          </div>
          <h2 className="font-serif text-2xl text-[#0d0d0d] font-bold mb-5">Beyond Real Estate</h2>
          <div className="flex flex-col sm:flex-row gap-8 items-start">
            <div className="flex-1 text-[#6b7280] leading-relaxed flex flex-col gap-4">
              <p>
                Jess brings the same eye for beauty and detail to everything she does. Known for her lifestyle brand and presence across TikTok and Instagram, she&apos;s built a following of people who appreciate her authentic take on Southern Utah living — the sunsets, the canyon hikes, the hidden gems that only a local knows.
              </p>
              <p>
                That same sensibility informs her real estate work. She doesn&apos;t just list homes — she tells their story. And that difference shows in the results.
              </p>
            </div>
            <div className="flex-shrink-0 flex flex-col gap-3">
              <a href={socials.jessTikTok.url} target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-3 bg-[#0d0d0d] hover:bg-[#1a1a1a] text-white px-5 py-3 rounded-sm text-sm font-semibold transition-colors">
                <TikTokIcon className="w-4 h-4" />
                Follow on TikTok
              </a>
              <a href={socials.jessInstagram.url} target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-3 border border-stone-200 hover:border-[#c9a84c] text-[#6b7280] hover:text-[#0d0d0d] px-5 py-3 rounded-sm text-sm font-semibold transition-colors">
                <InstagramIcon className="w-4 h-4" />
                Follow on Instagram
              </a>
            </div>
          </div>
        </section>

        {/* ── CREDENTIALS ──────────────────────────────────── */}
        <section className="mb-14 bg-stone-50 p-8 border border-stone-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-[#c9a84c]" />
            <div className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase">Credentials</div>
          </div>
          <h2 className="font-serif text-2xl text-[#0d0d0d] font-bold mb-6">Qualifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Utah Real Estate License", detail: "Licensed Realtor, State of Utah" },
              { label: "Co-Founder", detail: "Utah's Elevated Real Estate" },
              { label: "Southern Utah Specialist", detail: "Washington County Expert" },
              { label: "Luxury Property Certified", detail: "High-end residential sales" },
              { label: "Investment Property Specialist", detail: "STR & long-term rental strategies" },
              { label: "Digital Marketing Expert", detail: "TikTok, Instagram, targeted ads" },
            ].map((cred) => (
              <div key={cred.label} className="flex items-start gap-3">
                <div className="w-5 h-5 bg-[#c9a84c] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-[#0d0d0d]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#0d0d0d]">{cred.label}</div>
                  <div className="text-xs text-[#6b7280]">{cred.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA (Jess personal) ──────────────────────────── */}
        <section className="bg-[#0d0d0d] p-8 text-center mb-0">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="w-10 h-px bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase">Work with Jess</span>
            <div className="w-10 h-px bg-[#c9a84c]" />
          </div>
          <h2 className="font-serif text-2xl text-white font-bold mb-3">Ready to Work With Jess?</h2>
          <p className="text-white/50 text-sm mb-6 max-w-md mx-auto">
            Whether you&apos;re buying your first home or selling a luxury estate in Southern Utah, Jess is ready to guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/contact"
               className="bg-[#8b1a4a] hover:bg-[#6d1439] text-white font-semibold px-7 py-3 rounded-sm text-sm transition-colors">
              Contact Jess →
            </Link>
            <Link href="/listings"
               className="border border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-black font-semibold px-7 py-3 rounded-sm text-sm transition-colors">
              View Listings
            </Link>
          </div>
        </section>
      </div>

      {/* ══════════════════════════════════════════════════════
          BRAND DIVIDER — transition to team brand
      ══════════════════════════════════════════════════════ */}
      <div className="py-12 px-4 bg-stone-50 border-y border-stone-100">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-6">
          <div className="flex-1 h-px bg-stone-200" />
          <div className="text-center px-4">
            <p className="text-[#9ca3af] text-xs font-semibold tracking-widest uppercase mb-2">Jess is co-founder of</p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-6 h-px" style={{ backgroundColor: "#c9a84c" }} />
              <span className="font-serif text-xl font-bold" style={{ color: "#1a2744" }}>Utah&apos;s Elevated Real Estate</span>
              <div className="w-6 h-px" style={{ backgroundColor: "#c9a84c" }} />
            </div>
          </div>
          <div className="flex-1 h-px bg-stone-200" />
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          PART 2: ABOUT UTAH'S ELEVATED — Team Brand (navy/gold)
      ══════════════════════════════════════════════════════ */}

      {/* ── TEAM BRAND HEADER ───────────────────────────────── */}
      <div className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#1a2744" }}>
        <div className="max-w-4xl mx-auto">
          {/* Brand identifier */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 flex items-center justify-center border-2 flex-shrink-0" style={{ backgroundColor: "rgba(201,168,76,0.15)", borderColor: "#c9a84c" }}>
              <span className="font-serif text-base font-bold" style={{ color: "#c9a84c" }}>UE</span>
            </div>
            <div>
              <div className="text-xs font-semibold tracking-widest uppercase mb-0.5" style={{ color: "#c9a84c" }}>The Team Brand</div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">Utah&apos;s Elevated Real Estate</h2>
              <p className="text-xs font-semibold tracking-wider mt-0.5" style={{ color: "rgba(201,168,76,0.7)" }}>Utah&apos;s Premier Real Estate Team</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
            <div className="flex flex-col gap-4">
              <p>
                When Jess Orvin and Christina Childs co-founded Utah&apos;s Elevated Real Estate, they set out to create something that didn&apos;t exist in Southern Utah — a team that matched the beauty of the landscape with the quality of its work.
              </p>
              <p>
                &ldquo;Elevated&rdquo; isn&apos;t just a name. It&apos;s the standard they hold themselves to every single day. Every listing gets professional photography, compelling digital marketing, and a strategic pricing approach. Every buyer gets honest guidance, deep local knowledge, and an advocate who genuinely fights for them.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p>
                Today, the team is six specialists strong — each one bringing unique expertise to the table, and all united by the same commitment to excellence that Jess and Christina built the company on.
              </p>
              <p>
                From first-time buyers to luxury estate sellers, from St. George to Hurricane to Ivins, Utah&apos;s Elevated Real Estate is the team Southern Utah trusts most.
              </p>
            </div>
          </div>

          {/* Team stats */}
          <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t" style={{ borderColor: "rgba(201,168,76,0.2)" }}>
            {[
              { value: "6", label: "Team Specialists" },
              { value: "100+", label: "Homes Sold" },
              { value: "2", label: "Co-Founders" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-serif text-2xl font-bold mb-0.5" style={{ color: "#c9a84c" }}>{stat.value}</div>
                <div className="text-xs font-medium tracking-wide uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Values */}
          <div className="mt-10">
            <div className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#c9a84c" }}>Our Values</div>
            <div className="flex flex-wrap gap-2">
              {["Elevated Marketing", "Local Expertise", "Client-First Philosophy", "Full Team Support", "Digital-First Strategy", "Honest Guidance"].map((tag) => (
                <span key={tag} className="text-xs font-medium px-3 py-1.5 border" style={{ backgroundColor: "rgba(201,168,76,0.08)", borderColor: "rgba(201,168,76,0.25)", color: "rgba(201,168,76,0.9)" }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Founders callout */}
          <div className="mt-10 pt-10 border-t" style={{ borderColor: "rgba(201,168,76,0.2)" }}>
            <div className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#c9a84c" }}>Founded By</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { initials: "JO", name: "Jess Orvin", role: "Co-Founder", detail: "Southern Utah native, lifestyle creator, and the driving force behind the team's vision." },
                { initials: "CC", name: "Christina Childs", role: "Co-Founder", detail: "Operational expert and market strategist who keeps the team running at its absolute best." },
              ].map((founder) => (
                <div key={founder.name} className="flex items-start gap-4 p-4" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(201,168,76,0.2)" }}>
                  <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 border" style={{ backgroundColor: "rgba(201,168,76,0.15)", borderColor: "rgba(201,168,76,0.3)" }}>
                    <span className="font-serif text-base font-bold" style={{ color: "#c9a84c" }}>{founder.initials}</span>
                  </div>
                  <div>
                    <div className="font-serif font-bold text-white text-sm">{founder.name}</div>
                    <div className="text-xs mb-1.5" style={{ color: "#c9a84c" }}>{founder.role}</div>
                    <div className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{founder.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <Link href="/team"
               className="inline-flex items-center gap-2 font-semibold px-7 py-3 rounded-sm text-sm transition-all"
               style={{ backgroundColor: "#c9a84c", color: "#1a2744" }}>
              Meet the Full Team →
            </Link>
            <a href={socials.teamInstagram.url} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 border font-semibold px-7 py-3 rounded-sm text-sm transition-all"
               style={{ borderColor: "rgba(201,168,76,0.4)", color: "#c9a84c" }}>
              <InstagramIcon className="w-4 h-4" />
              {socials.teamInstagram.handle}
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

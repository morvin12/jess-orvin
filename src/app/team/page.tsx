import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { socials } from "@/lib/socials";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

const founders = [
  {
    initials: "JO",
    name: "Jess Orvin",
    title: "Lead Agent & Team Lead",
    role: "Co-Founder",
    isFounder: true,
    bio: "Southern Utah native and the driving force behind Utah's Elevated Real Estate. Jess brings an elevated approach to every transaction — combining deep local knowledge, cutting-edge marketing, and genuine care for her clients. When she's not closing deals, you'll find her exploring the canyon trails and sharing Southern Utah life with her audience on TikTok and Instagram.",
    specialties: ["Luxury Homes", "Buyer Representation", "Listing Strategy", "Investment Properties"],
    social: { instagram: socials.jessInstagram.url },
  },
  {
    initials: "CC",
    name: "Christina Childs",
    title: "Co-Founder",
    role: "Co-Founder",
    isFounder: true,
    bio: "Christina co-founded Utah's Elevated Real Estate alongside Jess with a shared vision: build the most trusted, most elevated real estate team in Southern Utah. Her operational expertise and market insight keep the team running at its best, while her client-first philosophy ensures every buyer and seller feels supported from first showing to final signature.",
    specialties: ["Team Operations", "Buyer Representation", "Market Analysis", "New Construction"],
    social: {},
  },
];

const agents = [
  {
    initials: "TB",
    name: "Tyler Brooks",
    title: "Real Estate Agent",
    bio: "Tyler specializes in helping first-time buyers navigate the Southern Utah market with confidence. Patient, detail-oriented, and always in your corner.",
    specialties: ["First-Time Buyers", "St. George", "Washington County"],
  },
  {
    initials: "MC",
    name: "Madison Clark",
    title: "Real Estate Agent",
    bio: "Madison's background in design gives her a unique eye for what makes a home truly special — and how to market it to stand out in any market.",
    specialties: ["Listing Presentation", "Hurricane", "Toquerville"],
  },
  {
    initials: "RT",
    name: "Ryan Torres",
    title: "Real Estate Agent",
    bio: "Ryan is the team's investment property expert. If you're looking for short-term rental potential or long-term appreciation in Southern Utah, he's your guy.",
    specialties: ["Investment Properties", "STR Strategy", "Ivins & Santa Clara"],
  },
  {
    initials: "KJ",
    name: "Kayla Jensen",
    title: "Real Estate Agent",
    bio: "Kayla brings warmth and hustle to every transaction. Her clients rave about her responsiveness and genuine dedication to finding the perfect fit.",
    specialties: ["Relocation", "Buyer Advocacy", "Washington & Hurricane"],
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#faf8f5" }}>
      <Navbar />

      {/* ── TEAM HERO — Navy/Gold branding (distinct from Jess personal brand) ── */}
      <div className="pt-20 lg:pt-24" style={{ backgroundColor: "#1a2744" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          {/* Gold divider top */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px" style={{ backgroundColor: "#c9a84c" }} />
            <div className="w-10 h-10 rounded-lg flex items-center justify-center border" style={{ backgroundColor: "rgba(201,168,76,0.15)", borderColor: "#c9a84c" }}>
              <span className="font-serif text-sm font-bold" style={{ color: "#c9a84c" }}>UE</span>
            </div>
            <div className="w-12 h-px" style={{ backgroundColor: "#c9a84c" }} />
          </div>

          <div className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9a84c" }}>Our People</div>
          <h1 className="font-serif text-4xl sm:text-5xl text-white font-bold mb-2">
            Utah&apos;s Elevated Real Estate
          </h1>
          <p className="font-semibold text-sm tracking-widest uppercase mb-6" style={{ color: "rgba(201,168,76,0.7)" }}>
            Utah&apos;s Premier Real Estate Team
          </p>
          <p className="text-base max-w-xl mx-auto mb-6" style={{ color: "rgba(255,255,255,0.55)" }}>
            Six specialists united by one purpose — helping you find, buy, and sell Southern Utah real estate at the highest level.
          </p>
          <a
            href={socials.teamInstagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm transition-colors"
            style={{ color: "#c9a84c" }}
          >
            <InstagramIcon className="w-4 h-4" />
            {socials.teamInstagram.handle}
          </a>

          {/* Team stats row */}
          <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto mt-12 pt-8 border-t" style={{ borderColor: "rgba(201,168,76,0.2)" }}>
            {[
              { value: "6", label: "Specialists" },
              { value: "100+", label: "Homes Sold" },
              { value: "5★", label: "Team Rating" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <div className="font-serif text-2xl font-bold mb-0.5" style={{ color: "#c9a84c" }}>{stat.value}</div>
                <div className="text-xs font-medium tracking-wide uppercase" style={{ color: "rgba(255,255,255,0.4)" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gold accent bar */}
      <div className="h-1 w-full" style={{ backgroundColor: "#c9a84c" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* ── FOUNDERS (side by side, larger) ─────── */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 mb-2">
            <div className="w-4 h-px" style={{ backgroundColor: "#c9a84c" }} />
            <div className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#1a2744" }}>Leadership</div>
          </div>
          <h2 className="font-serif text-2xl text-stone-900 font-bold">The Founders</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {founders.map((founder) => (
            <div key={founder.name} className="bg-white rounded-2xl shadow-sm border overflow-hidden" style={{ borderColor: "rgba(26,39,68,0.1)" }}>
              {/* Photo area — navy gradient */}
              <div className="h-64 relative flex items-end p-6" style={{ background: "linear-gradient(135deg, #1a2744 0%, #243460 60%, #1a3a5c 100%)" }}>
                {/* Subtle pattern */}
                <div className="absolute inset-0 overflow-hidden opacity-10">
                  <svg viewBox="0 0 600 260" className="absolute bottom-0 w-full" preserveAspectRatio="xMidYMax slice">
                    <path d="M0 260 L0 160 Q80 120 150 140 L200 80 L260 110 Q310 60 370 90 L430 40 L490 70 L540 30 L600 55 L600 260 Z" fill="white"/>
                  </svg>
                </div>
                {/* Gold accent line */}
                <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: "#c9a84c" }} />
                {/* Initials circle */}
                <div className="relative z-10 flex items-end gap-4">
                  <div className="w-24 h-24 rounded-2xl flex items-center justify-center backdrop-blur-sm shadow-lg border-2" style={{ backgroundColor: "rgba(201,168,76,0.15)", borderColor: "#c9a84c" }}>
                    <span className="font-serif text-3xl font-bold" style={{ color: "#c9a84c" }}>{founder.initials}</span>
                  </div>
                  <div className="pb-1">
                    <div className="text-white font-serif text-2xl font-bold leading-tight">{founder.name}</div>
                    <div className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{founder.title}</div>
                    {founder.role && (
                      <span className="inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wider uppercase" style={{ backgroundColor: "rgba(201,168,76,0.2)", color: "#c9a84c" }}>
                        {founder.role}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <p className="text-stone-600 text-sm leading-relaxed mb-5">{founder.bio}</p>

                {/* Specialties */}
                <div className="mb-5">
                  <div className="text-[10px] font-semibold text-stone-400 uppercase tracking-wider mb-2">Specialties</div>
                  <div className="flex flex-wrap gap-2">
                    {founder.specialties.map((s) => (
                      <span key={s} className="text-xs font-medium px-3 py-1 rounded-full border" style={{ backgroundColor: "rgba(26,39,68,0.04)", borderColor: "rgba(26,39,68,0.1)", color: "#1a2744" }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Socials */}
                {founder.social?.instagram && (
                  <div className="flex items-center gap-3 pt-4 border-t border-stone-100">
                    <a href={founder.social.instagram} target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-1.5 text-xs transition-colors font-medium text-stone-400 hover:text-[#1a2744]">
                      <InstagramIcon className="w-3.5 h-3.5" />
                      {socials.jessInstagram.handle}
                    </a>
                  </div>
                )}

                <div className="mt-4">
                  <Link href="/contact"
                     className="w-full flex items-center justify-center font-semibold py-2.5 rounded-xl text-sm transition-colors text-white"
                     style={{ backgroundColor: "#1a2744" }}>
                    Connect with {founder.name.split(" ")[0]}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── AGENTS GRID ─────────────────────────── */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 mb-2">
            <div className="w-4 h-px" style={{ backgroundColor: "#c9a84c" }} />
            <div className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#1a2744" }}>The Team</div>
          </div>
          <h2 className="font-serif text-2xl text-stone-900 font-bold">Our Agents</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((agent) => (
            <div key={agent.name} className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden group hover:shadow-md transition-shadow">
              {/* Photo area — navy */}
              <div className="h-40 relative flex items-end p-4" style={{ background: "linear-gradient(135deg, #1a2744 0%, #243460 100%)" }}>
                <div className="absolute inset-0 overflow-hidden opacity-10">
                  <svg viewBox="0 0 300 160" className="absolute bottom-0 w-full" preserveAspectRatio="xMidYMax slice">
                    <path d="M0 160 L0 100 Q40 70 80 85 L110 50 L145 70 Q175 40 210 55 L250 25 L280 45 L300 30 L300 160 Z" fill="white"/>
                  </svg>
                </div>
                <div className="absolute top-0 left-0 right-0 h-0.5" style={{ backgroundColor: "#c9a84c" }} />
                <div className="relative z-10 flex items-end gap-3">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center border" style={{ backgroundColor: "rgba(201,168,76,0.15)", borderColor: "rgba(201,168,76,0.4)" }}>
                    <span className="font-serif text-lg font-bold" style={{ color: "#c9a84c" }}>{agent.initials}</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm leading-tight">{agent.name}</div>
                    <div className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{agent.title}</div>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <p className="text-stone-500 text-xs leading-relaxed mb-4">{agent.bio}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {agent.specialties.map((s) => (
                    <span key={s} className="text-[10px] font-medium px-2 py-0.5 rounded-full border" style={{ backgroundColor: "rgba(26,39,68,0.04)", borderColor: "rgba(26,39,68,0.1)", color: "#1a2744" }}>
                      {s}
                    </span>
                  ))}
                </div>
                <Link href="/contact"
                   className="w-full flex items-center justify-center border font-semibold py-2 rounded-lg text-xs transition-colors"
                   style={{ borderColor: "rgba(26,39,68,0.2)", color: "#1a2744" }}>
                  Get in Touch
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── JOIN THE TEAM CTA — navy ──────────────────────────── */}
      <div className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#1a2744" }}>
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-px" style={{ backgroundColor: "#c9a84c" }} />
            <div className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#c9a84c" }}>Careers</div>
            <div className="w-8 h-px" style={{ backgroundColor: "#c9a84c" }} />
          </div>
          <h2 className="font-serif text-3xl text-white font-bold mb-4">Interested in Joining the Team?</h2>
          <p className="text-sm mb-8 max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.5)" }}>
            Utah&apos;s Elevated Real Estate is always looking for exceptional agents who share our commitment to quality and client care.
          </p>
          <Link href="/contact"
             className="inline-flex items-center gap-2 font-semibold px-7 py-3 rounded-full text-sm transition-all"
             style={{ backgroundColor: "#c9a84c", color: "#1a2744" }}>
            Reach Out to Jess or Christina →
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

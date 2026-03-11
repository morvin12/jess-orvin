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

const videos = [
  { title: "St. George Market Update — March 2026", duration: "8:24", topic: "Market Update", views: "4.2K", month: "March 2026", desc: "What's happening in the St. George market right now — inventory levels, price trends, and what buyers and sellers should know." },
  { title: "Is Ivins the Best Place to Buy Right Now?", duration: "12:11", topic: "Neighborhood Guide", views: "7.1K", month: "February 2026", desc: "A deep dive into the Ivins real estate market — why this small town adjacent to Snow Canyon is one of the most sought-after in Southern Utah." },
  { title: "5 Things I Wish I Knew Before Buying in Southern Utah", duration: "9:47", topic: "Buyer Tips", views: "11.3K", month: "February 2026", desc: "Honest advice for anyone relocating to or buying in the St. George area. From HOA rules to short-term rental regs — know before you buy." },
  { title: "Hurricane, Utah — Hidden Gem or Overhyped?", duration: "10:22", topic: "Neighborhood Guide", views: "5.8K", month: "January 2026", desc: "Exploring Hurricane's rapidly growing real estate market, proximity to Zion, and why investors keep calling Jess about it." },
  { title: "How to Price Your Home to Sell Fast (And for More)", duration: "7:15", topic: "Seller Tips", views: "6.4K", month: "January 2026", desc: "The pricing strategy Jess uses for every listing — and why going too high upfront almost always costs sellers money." },
  { title: "My Favorite Luxury Listings in Southern Utah Right Now", duration: "14:03", topic: "Listings Tour", views: "9.2K", month: "December 2025", desc: "A walkthrough of some of the most stunning high-end properties currently on the market in Ivins, Entrada, and St. George." },
];

const topicColors: Record<string, string> = {
  "Market Update": "bg-blue-500",
  "Neighborhood Guide": "bg-emerald-500",
  "Buyer Tips": "bg-amber-500",
  "Seller Tips": "bg-purple-500",
  "Listings Tour": "bg-[#c1613a]",
};

export default function VideosPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#faf8f5" }}>
      <Navbar />

      {/* Hero */}
      <div className="pt-20 lg:pt-24 bg-gradient-to-br from-stone-900 via-stone-800 to-orange-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="text-xs font-semibold text-[#d4a574] tracking-widest uppercase mb-3">Market Intelligence</div>
          <h1 className="font-serif text-4xl sm:text-5xl text-white font-bold mb-3">Videos & Market Insights</h1>
          <p className="text-stone-400 text-base max-w-xl mb-6">
            Southern Utah market updates, neighborhood guides, and real estate tips from Jess — straight from the source.
          </p>
          <div className="flex items-center gap-5">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Featured / first video larger */}
        <div className="mb-12">
          <div className="text-xs font-semibold text-[#c1613a] tracking-widest uppercase mb-5">Latest Video</div>
          <div className="bg-stone-900 rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto bg-gradient-to-br from-stone-800 via-orange-950 to-stone-900 flex items-center justify-center min-h-[280px]">
              <div className="absolute inset-0 overflow-hidden opacity-20">
                <svg viewBox="0 0 600 400" className="absolute bottom-0 w-full" preserveAspectRatio="xMidYMax slice">
                  <path d="M0 400 L0 240 Q80 180 160 210 L220 130 L300 170 Q380 100 460 140 L530 80 L600 110 L600 400 Z" fill="white"/>
                </svg>
              </div>
              <div className="relative z-10 w-20 h-20 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </div>
              <div className="absolute top-4 left-4">
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full text-white ${topicColors[videos[0].topic] || "bg-stone-600"}`}>
                  {videos[0].topic}
                </span>
              </div>
              <div className="absolute bottom-4 right-4 text-sm text-white/60 bg-black/40 px-2 py-1 rounded">
                {videos[0].duration}
              </div>
            </div>
            <div className="p-7 flex flex-col justify-center">
              <div className="text-[#d4a574] text-xs font-semibold uppercase tracking-wider mb-2">{videos[0].month}</div>
              <h2 className="font-serif text-2xl text-white font-bold mb-3">{videos[0].title}</h2>
              <p className="text-stone-400 text-sm leading-relaxed mb-5">{videos[0].desc}</p>
              <div className="flex items-center gap-3">
                <span className="text-stone-500 text-xs">{videos[0].views} views</span>
                <span className="text-stone-700">·</span>
                <span className="text-stone-500 text-xs">Jess Orvin</span>
              </div>
            </div>
          </div>
        </div>

        {/* All videos grid */}
        <div className="text-xs font-semibold text-[#c1613a] tracking-widest uppercase mb-5">All Videos</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.slice(1).map((video, i) => (
            <div key={i} className="bg-stone-900 rounded-2xl overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
              <div className="relative h-44 bg-gradient-to-br from-stone-800 via-orange-950 to-stone-900 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 overflow-hidden opacity-15">
                  <svg viewBox="0 0 300 180" className="absolute bottom-0 w-full" preserveAspectRatio="xMidYMax slice">
                    <path d="M0 180 L0 110 Q40 80 80 95 L115 55 L150 75 Q185 45 225 60 L265 30 L300 50 L300 180 Z" fill="white"/>
                  </svg>
                </div>
                <div className="relative z-10 w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
                <div className="absolute top-3 left-3">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full text-white ${topicColors[video.topic] || "bg-stone-600"}`}>
                    {video.topic}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 text-xs text-white/60 bg-black/40 px-2 py-0.5 rounded">
                  {video.duration}
                </div>
              </div>
              <div className="p-4">
                <div className="text-[#d4a574] text-[10px] font-semibold uppercase tracking-wider mb-1">{video.month}</div>
                <p className="text-white text-sm font-semibold leading-snug mb-2">{video.title}</p>
                <p className="text-stone-500 text-xs leading-relaxed mb-3 line-clamp-2">{video.desc}</p>
                <div className="text-stone-600 text-xs">{video.views} views · Jess Orvin</div>
              </div>
            </div>
          ))}
        </div>

        {/* Social CTA */}
        <div className="mt-14 bg-stone-900 rounded-2xl p-8 text-center">
          <div className="text-[#d4a574] text-xs font-semibold uppercase tracking-wider mb-3">Never Miss a Video</div>
          <h2 className="font-serif text-2xl text-white font-bold mb-3">Follow Jess for Weekly Content</h2>
          <p className="text-stone-400 text-sm mb-6 max-w-md mx-auto">
            Market updates, neighborhood tours, and real estate tips — posted every week across TikTok and Instagram.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href={socials.jessTikTok.url} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 bg-white hover:bg-stone-100 text-stone-900 font-semibold px-6 py-3 rounded-full text-sm transition-colors">
              <TikTokIcon className="w-4 h-4" />
              Follow on TikTok
            </a>
            <a href={socials.jessInstagram.url} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 border border-stone-700 hover:border-[#d4a574] text-stone-300 hover:text-[#d4a574] font-semibold px-6 py-3 rounded-full text-sm transition-all">
              <InstagramIcon className="w-4 h-4" />
              Follow on Instagram
            </a>
          </div>
        </div>

        {/* Also search listings */}
        <div className="mt-8 text-center">
          <p className="text-stone-400 text-sm mb-3">Saw a property in one of Jess&apos;s videos?</p>
          <Link href="/listings"
             className="inline-flex items-center gap-1.5 text-[#c1613a] hover:text-[#a8502f] font-semibold text-sm transition-colors">
            Browse All Listings →
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

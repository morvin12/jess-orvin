import { type Listing, formatPrice } from "@/lib/listings";

type ListingCardProps = {
  listing: Listing;
  onViewDetails: (listing: Listing) => void;
};

export default function ListingCard({ listing, onViewDetails }: ListingCardProps) {
  return (
    <div className="bg-white border border-stone-200 overflow-hidden group hover:border-stone-300 transition-colors flex flex-col">
      {/* Photo placeholder */}
      <div className="relative">
        <div className={`h-52 bg-gradient-to-br ${listing.gradient} flex items-end p-4`}>
          {/* Status badge */}
          <div className="absolute top-3 left-3">
            <span className={`text-xs font-bold px-2.5 py-1 rounded-sm ${
              listing.status === "Active"
                ? "bg-[#c9a84c] text-[#0d0d0d]"
                : listing.status === "Pending"
                ? "bg-[#0d0d0d] text-white"
                : "bg-stone-500 text-white"
            }`}>
              {listing.status}
            </span>
          </div>

          {/* Tag badge */}
          {listing.tag && (
            <div className="absolute top-3 right-3">
              <span className="text-[10px] font-semibold px-2 py-1 rounded-sm bg-black/50 text-white">
                {listing.tag}
              </span>
            </div>
          )}

          {/* Price */}
          <div className="relative z-10">
            <div className="text-white font-serif text-2xl font-bold drop-shadow">
              {formatPrice(listing.price)}
            </div>
            <div className="text-white/80 text-xs font-medium">{listing.type}</div>
          </div>
        </div>
      </div>

      {/* Card body */}
      <div className="p-4 flex flex-col flex-1">
        {/* Address */}
        <div className="mb-3">
          <div className="font-semibold text-[#0d0d0d] text-sm leading-snug">
            {listing.address}
          </div>
          <div className="text-[#6b7280] text-xs mt-0.5">
            {listing.city}, {listing.state} {listing.zip}
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 text-sm text-[#6b7280] mb-3 pb-3 border-b border-stone-100">
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5 text-stone-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="font-medium text-[#0d0d0d]">{listing.beds}</span><span className="text-stone-400">bd</span>
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5 text-stone-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 6a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6z" clipRule="evenodd" />
            </svg>
            <span className="font-medium text-[#0d0d0d]">{listing.baths}</span><span className="text-stone-400">ba</span>
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            <span className="font-medium text-[#0d0d0d]">{listing.sqft.toLocaleString()}</span><span className="text-stone-400">sqft</span>
          </span>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {listing.features.slice(0, 3).map((f) => (
            <span key={f} className="text-[10px] font-medium bg-stone-50 border border-stone-200 text-[#6b7280] px-2 py-0.5 rounded-sm">
              {f}
            </span>
          ))}
          {listing.features.length > 3 && (
            <span className="text-[10px] text-stone-400 px-1 py-0.5">+{listing.features.length - 3} more</span>
          )}
        </div>

        {/* Agent + CTA */}
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-sm bg-[#0d0d0d] flex items-center justify-center text-[9px] font-bold text-white flex-shrink-0">
              {listing.agent.split(" ").map((n) => n[0]).join("")}
            </div>
            <div className="leading-tight">
              <div className="text-xs font-semibold text-[#0d0d0d]">{listing.agent}</div>
              <div className="text-[10px] text-[#9ca3af]">{listing.agentTitle}</div>
            </div>
          </div>

          <button
            onClick={() => onViewDetails(listing)}
            className="bg-[#8b1a4a] hover:bg-[#6d1439] text-white text-xs font-semibold px-3.5 py-2 rounded-sm transition-colors"
          >
            View Details →
          </button>
        </div>
      </div>
    </div>
  );
}

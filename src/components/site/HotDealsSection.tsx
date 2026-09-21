import { useState, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { Heart, ChevronLeft, ChevronRight, Flame, Star, Sparkles, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface DealPackage {
  id: string;
  title: string;
  country: string;
  flag: string;
  duration: string;
  amenities: string;
  highlights: string[];
  discountBadge: string;
  rating: number;
  reviews: string;
  tag: string;
  image: string;
  link: string;
}

const DEALS: DealPackage[] = [
  {
    id: "thailand-phuket",
    title: "Thailand Bangkok & Phuket Island",
    country: "Thailand",
    flag: "🇹🇭",
    duration: "6 Days / 5 Nights",
    amenities: "Beachfront Resort | Coral Island Speedboat",
    highlights: ["Wat Arun & Grand Palace", "Phuket Beachfront", "Sticker & eVisa"],
    discountBadge: "Popular Pick",
    rating: 4.9,
    reviews: "2.4k",
    tag: "Top Choice",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=800&auto=format&fit=crop",
    link: "/countries/south-asia/thailand",
  },
  {
    id: "malaysia-kl",
    title: "Malaysia Kuala Lumpur & Langkawi",
    country: "Malaysia",
    flag: "🇲🇾",
    duration: "5 Days / 4 Nights",
    amenities: "4-Star Modern Hotel | City & Cable Car Tour",
    highlights: ["Petronas Twin Towers", "Genting Highlands", "48-Hour eVisa"],
    discountBadge: "Fast Approval",
    rating: 4.8,
    reviews: "1.6k",
    tag: "Family Special",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=800&auto=format&fit=crop",
    link: "/countries/south-asia/malaysia",
  },
  {
    id: "indonesia-bali",
    title: "Indonesia Bali Tropical Paradise",
    country: "Indonesia",
    flag: "🇮🇩",
    duration: "6 Days / 5 Nights",
    amenities: "Private Pool Villa | Nusa Penida Tour",
    highlights: ["Ubud Sacred Monkey Forest", "Ulun Danu Lake Temple", "Visa on Arrival"],
    discountBadge: "Island Special",
    rating: 4.9,
    reviews: "1.9k",
    tag: "Exotic Retreat",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop",
    link: "/countries/south-asia/indonesia",
  },
  {
    id: "singapore-city",
    title: "Singapore Marina Bay & Sentosa",
    country: "Singapore",
    flag: "🇸🇬",
    duration: "4 Days / 3 Nights",
    amenities: "Luxury City Hotel | Universal Studios & Night Safari",
    highlights: ["Marina Bay Sands", "Gardens by the Bay", "Instant e-Visa"],
    discountBadge: "Futuristic",
    rating: 5.0,
    reviews: "2.8k",
    tag: "Modern Wonder",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=800&auto=format&fit=crop",
    link: "/countries/south-asia/singapore",
  },
  {
    id: "nepal-himalayas",
    title: "Nepal Kathmandu & Himalayan Wonder",
    country: "Nepal",
    flag: "🇳🇵",
    duration: "5 Days / 4 Nights",
    amenities: "Scenic Mountain Resort | Valley & Pokhara Sightseeing",
    highlights: ["Everest Mountain Flight", "Pokhara Lake Boating", "Visa on Arrival"],
    discountBadge: "Nature Tour",
    rating: 4.8,
    reviews: "1.2k",
    tag: "Scenic Trip",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop",
    link: "/countries/south-asia/nepal",
  },
  {
    id: "umrah-luxury",
    title: "Umrah VIP 5-Star Experience",
    country: "Saudi Arabia",
    flag: "🕋",
    duration: "10 Days / 9 Nights",
    amenities: "5-Star Hotels Facing Haram | VIP Transfers",
    highlights: ["Clock Tower Stay", "Guided Ziyarat Tours", "Nusuk Support"],
    discountBadge: "VIP Package",
    rating: 5.0,
    reviews: "4.1k",
    tag: "Spiritual Tour",
    image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=800&auto=format&fit=crop",
    link: "/umrah",
  },
  {
    id: "dubai-desert-safari",
    title: "Dubai Desert & Marina Luxury",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    duration: "5 Days / 4 Nights",
    amenities: "5-Star Hotel | Desert Safari & Marina Cruise",
    highlights: ["Burj Khalifa Entry", "Desert Dune Bashing", "Fast 24h E-Visa"],
    discountBadge: "Best Seller",
    rating: 5.0,
    reviews: "3.2k",
    tag: "Instant Visa",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop",
    link: "/countries/middle-east/united-arab-emirates",
  },
  {
    id: "italy-schengen",
    title: "Italy & Schengen Grand Tour",
    country: "Italy & Europe",
    flag: "🇮🇹",
    duration: "7 Days / 6 Nights",
    amenities: "Luxury Stay | Free Breakfast & Guided Tours",
    highlights: ["Rome Colosseum", "Venice Gondola Ride", "Schengen 29 Nations"],
    discountBadge: "Top Rated",
    rating: 4.9,
    reviews: "1.8k",
    tag: "Europe Special",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=800&auto=format&fit=crop",
    link: "/countries/schengen/italy",
  },
];

export function HotDealsSection() {
  const [startIndex, setStartIndex] = useState(0);
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const carouselRef = useRef<HTMLDivElement>(null);

  // Show 4 items per page on desktop, 2 on tablet, 1 on mobile
  const visibleCount = 4;
  const maxIndex = DEALS.length - visibleCount;

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const visibleDeals = DEALS.slice(startIndex, startIndex + visibleCount);
  // Wrap around if near the end
  if (visibleDeals.length < visibleCount) {
    visibleDeals.push(...DEALS.slice(0, visibleCount - visibleDeals.length));
  }

  return (
    <section className="py-24 bg-gradient-to-b from-white via-[#FAF7FB] to-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Section Header with Controls ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-5">
          <div className="text-center sm:text-left">
            <div className="inline-flex items-center gap-2.5 text-[#702D88] font-black uppercase tracking-wider text-xl sm:text-2xl">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-100/80 text-[#702D88] shadow-sm">
                <Flame size={20} className="text-[#FF4D4D] fill-[#FF4D4D] animate-bounce" />
              </span>
              <span>EXCLUSIVE TRAVEL PACKAGES</span>
            </div>
            <p className="mt-1.5 text-sm text-gray-600 font-semibold flex items-center justify-center sm:justify-start gap-2">
              <span>All-inclusive international packages curated for Pakistani travelers</span>
              <span className="hidden md:inline-flex items-center gap-1 rounded-full bg-purple-100 text-[#702D88] px-2.5 py-0.5 text-[10px] font-black border border-purple-200">
                <Sparkles size={11} /> Guaranteed Best Market Rates
              </span>
            </p>
          </div>

          {/* Interactive Carousel Slider Controls */}
          <div className="flex items-center justify-center sm:justify-end gap-3">
            <span className="text-xs font-bold text-gray-400">
              {startIndex + 1} - {Math.min(startIndex + visibleCount, DEALS.length)} of {DEALS.length}
            </span>
            <button
              onClick={handlePrev}
              aria-label="Previous deal"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-purple-200 bg-white text-gray-700 hover:border-[#702D88] hover:text-[#702D88] hover:bg-purple-50 transition-all active:scale-95 shadow-md shadow-purple-900/5 hover:shadow-lg"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next deal"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-purple-200 bg-white text-gray-700 hover:border-[#702D88] hover:text-[#702D88] hover:bg-purple-50 transition-all active:scale-95 shadow-md shadow-purple-900/5 hover:shadow-lg"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* ── Interactive Sliding Cards Carousel ── */}
        <div ref={carouselRef} className="relative overflow-hidden">
          <motion.div
            key={startIndex}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -25 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {visibleDeals.map((deal) => {
              const isFav = !!favorites[deal.id];
              return (
                <motion.div
                  key={deal.id}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-[2.2rem] bg-gray-950 shadow-xl shadow-purple-950/10 border border-purple-100/60 aspect-[3/4.6] flex flex-col justify-between p-5.5 hover:shadow-2xl hover:shadow-purple-900/25 hover:border-purple-300 transition-all"
                >
                  {/* Background Image with Zoom */}
                  <img
                    src={deal.image}
                    alt={deal.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Dark Vignette Overlay for Razor-Sharp Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/25" />
                  <div className="absolute inset-0 bg-purple-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Top Row: Tags & Wishlist Heart */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="rounded-full bg-gradient-to-r from-[#702D88] to-[#9333EA] text-white px-3 py-1 text-xs font-black tracking-wide shadow-md shadow-purple-950/40 border border-white/20">
                        {deal.flag} {deal.discountBadge}
                      </span>
                      <span className="rounded-full bg-black/45 backdrop-blur-md text-amber-300 px-2.5 py-0.5 text-[10px] font-extrabold border border-white/10">
                        {deal.tag}
                      </span>
                    </div>

                    <button
                      onClick={(e) => toggleFavorite(deal.id, e)}
                      aria-label="Add to wishlist"
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/90 backdrop-blur-md text-gray-700 hover:text-[#EF4444] transition-all shadow-md hover:scale-110 active:scale-95"
                    >
                      <Heart
                        size={16}
                        className={isFav ? "fill-[#EF4444] text-[#EF4444]" : "text-gray-700"}
                      />
                    </button>
                  </div>

                  {/* Bottom Content Area */}
                  <div className="relative z-10 text-white space-y-3">
                    {/* Rating & Inclusions */}
                    <div className="flex items-center justify-between text-[11px] font-bold">
                      <div className="flex items-center gap-1 text-amber-300">
                        <Star size={12} className="fill-amber-300" />
                        <span>{deal.rating}</span>
                        <span className="text-gray-300/80 font-normal">({deal.reviews})</span>
                      </div>
                      <span className="text-purple-200 font-semibold text-[10px] uppercase tracking-wider bg-white/10 px-2 py-0.5 rounded-full border border-white/10">
                        {deal.country}
                      </span>
                    </div>

                    {/* Title & Duration */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-black tracking-tight text-white drop-shadow-sm group-hover:text-purple-200 transition-colors leading-tight">
                        {deal.title}
                      </h3>
                      <p className="text-xs text-amber-300/95 font-bold mt-1 flex items-center gap-1.5">
                        <Clock size={12} className="text-amber-300" />
                        <span>{deal.duration}</span>
                      </p>
                      <p className="text-[11px] text-gray-200/90 font-medium line-clamp-1 mt-1">
                        {deal.amenities}
                      </p>
                    </div>

                    {/* Feature Highlights Pills (Replacing hardcoded price) */}
                    <div className="flex items-center gap-1.5 flex-wrap pt-1 border-t border-white/15">
                      {deal.highlights.map((h) => (
                        <span
                          key={h}
                          className="inline-flex items-center gap-1 text-[10px] font-semibold text-purple-100 bg-white/10 backdrop-blur-sm px-2 py-0.5 rounded-md border border-white/10"
                        >
                          <CheckCircle2 size={10} className="text-emerald-400" />
                          <span>{h}</span>
                        </span>
                      ))}
                    </div>

                    {/* High-Contrast Modern Action Button */}
                    <div className="pt-1.5">
                      <Link
                        to={deal.link}
                        className="flex items-center justify-center gap-2 w-full text-center rounded-full bg-gradient-to-r from-[#702D88] via-[#8B5CF6] to-[#702D88] hover:from-[#581c87] hover:to-[#702D88] text-white py-3 text-xs font-black tracking-wider uppercase transition-all shadow-lg shadow-purple-950/40 border border-white/20 group-hover:scale-[1.02] active:scale-98"
                      >
                        <span>View Package Details</span>
                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* ── Carousel Slide Pagination Dots ── */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setStartIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                startIndex === idx
                  ? "w-8 bg-[#702D88]"
                  : "w-2 bg-purple-200 hover:bg-purple-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Plane, Star, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { SearchFilterBar } from "./SearchFilterBar";
import { COMPANY } from "@/data/company";

interface ShowcaseLandmark {
  id: string;
  country: string;
  flag: string;
  city: string;
  visaTag: string;
  rating: number;
  image: string;
  link: string;
}

const LANDMARKS: ShowcaseLandmark[] = [
  {
    id: "thailand",
    country: "Thailand",
    flag: "🇹🇭",
    city: "Bangkok & Phuket",
    visaTag: "Top Tourist Favorite",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=800&auto=format&fit=crop",
    link: "/countries/south-asia/thailand",
  },
  {
    id: "malaysia",
    country: "Malaysia",
    flag: "🇲🇾",
    city: "Kuala Lumpur (Petronas)",
    visaTag: "Fast 48h eVisa",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=800&auto=format&fit=crop",
    link: "/countries/south-asia/malaysia",
  },
  {
    id: "indonesia",
    country: "Indonesia",
    flag: "🇮🇩",
    city: "Bali Island (Ulun Danu)",
    visaTag: "Visa on Arrival / B211A",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop",
    link: "/countries/south-asia/indonesia",
  },
  {
    id: "singapore",
    country: "Singapore",
    flag: "🇸🇬",
    city: "Marina Bay Sands",
    visaTag: "Fast Electronic Visa",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=800&auto=format&fit=crop",
    link: "/countries/south-asia/singapore",
  },
  {
    id: "nepal",
    country: "Nepal",
    flag: "🇳🇵",
    city: "Kathmandu & Himalayas",
    visaTag: "Scenic & Everest Base",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop",
    link: "/countries/south-asia/nepal",
  },
];

export function Hero() {
  const [activeCenter, setActiveCenter] = useState(1); // default to Malaysia center, Thailand left, Indonesia right

  const rotateNext = () => {
    setActiveCenter((prev) => (prev + 1) % LANDMARKS.length);
  };

  const rotatePrev = () => {
    setActiveCenter((prev) => (prev - 1 + LANDMARKS.length) % LANDMARKS.length);
  };

  // Get 3 consecutive items for the staggered 3D arched display
  const leftItem = LANDMARKS[(activeCenter - 1 + LANDMARKS.length) % LANDMARKS.length];
  const centerItem = LANDMARKS[activeCenter];
  const rightItem = LANDMARKS[(activeCenter + 1) % LANDMARKS.length];

  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
      {/* ── Background Panoramic Sunset Bridge Image with Cinematic Depth ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop"
          alt="Sunset city bridge skyline"
          className="h-full w-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(147,51,234,0.18),transparent_50%)]" />
      </div>

      <div className="container-px relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          {/* ── Left Column: Headline, Trust Badges & CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 xl:col-span-6 text-white pt-2 lg:pt-6"
          >
            {/* Live Accreditation Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full bg-white/10 backdrop-blur-md px-4 py-1.5 border border-white/25 mb-5 shadow-lg shadow-black/20">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400" />
              </span>
              <span className="text-xs font-black uppercase tracking-wider text-amber-300">
                Pakistan's #1 IATA Authorized Agency
              </span>
              <span className="text-white/40">|</span>
              <span className="text-xs font-bold text-white/90">98% Visa Approval</span>
            </div>

            {/* Bold Stylized Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black uppercase tracking-tight leading-[1.03] text-white drop-shadow-md">
              EXPLORE <br />
              BEAUTIFUL WORLD <br />
              <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent italic font-serif lowercase tracking-normal text-5xl sm:text-6xl lg:text-7xl xl:text-8xl drop-shadow-[0_4px_20px_rgba(251,191,36,0.35)]">
                with us
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base sm:text-lg font-medium text-white/90 leading-relaxed drop-shadow">
              {COMPANY.name} — Expert visa consultancy for 50+ countries, cheap air ticketing, luxury stays &amp; Umrah packages from Blue Area, Islamabad.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/visa-services"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#702D88] via-[#9333EA] to-[#6B21A8] hover:from-[#581c87] hover:to-[#702D88] text-white px-8 py-4 text-sm font-black tracking-wide shadow-[0_12px_30px_rgba(112,45,136,0.55)] transition-all duration-300 hover:scale-105 active:scale-98 border border-white/20"
              >
                <span>Discover Now</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#702D88] transition-transform duration-300 group-hover:translate-x-1 shadow-sm">
                  <ArrowRight size={13} strokeWidth={3} />
                </span>
              </Link>
              <Link
                to="/air-ticketing"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 px-6 py-4 text-sm font-bold transition-all hover:scale-105 shadow-md"
              >
                <Plane size={16} className="text-amber-300" />
                <span>Book Flights</span>
              </Link>
            </div>

            {/* Quick Metrics */}
            <div className="mt-10 flex items-center gap-6 sm:gap-8 pt-6 border-t border-white/15">
              <div>
                <p className="text-2xl font-black text-white leading-none">15+</p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-amber-300 mt-1">Years Experience</p>
              </div>
              <div className="h-8 w-[1px] bg-white/20" />
              <div>
                <p className="text-2xl font-black text-white leading-none">98%</p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-amber-300 mt-1">Approval Rate</p>
              </div>
              <div className="h-8 w-[1px] bg-white/20" />
              <div>
                <p className="text-2xl font-black text-white leading-none">20,000+</p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-amber-300 mt-1">Happy Travelers</p>
              </div>
            </div>
          </motion.div>

          {/* ── Right Column: Interactive 3D Sliding Arched Landmark Showcase ── */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-center lg:items-end justify-center">
            {/* Slider Switcher Controls */}
            <div className="flex items-center gap-2 mb-3 self-center lg:self-end text-xs font-bold text-white/80">
              <span className="text-[11px] text-amber-300 uppercase tracking-wider font-extrabold flex items-center gap-1 mr-1">
                <Sparkles size={12} /> Slide Destinations:
              </span>
              <button
                onClick={rotatePrev}
                aria-label="Previous destination"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-black/40 hover:bg-[#702D88] text-white border border-white/20 backdrop-blur-md transition-all active:scale-95 shadow-md"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={rotateNext}
                aria-label="Next destination"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-black/40 hover:bg-[#702D88] text-white border border-white/20 backdrop-blur-md transition-all active:scale-95 shadow-md"
              >
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Staggered Arched Cards with Dynamic 3D Layering */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5 perspective-1000">
              {/* Left Card (Slightly back) */}
              <motion.div
                key={`left-${leftItem.id}`}
                initial={{ opacity: 0, x: -20, scale: 0.95 }}
                animate={{ opacity: 0.88, x: 0, scale: 0.96 }}
                whileHover={{ opacity: 1, scale: 1.02, y: -6 }}
                transition={{ duration: 0.4 }}
                onClick={() => setActiveCenter((activeCenter - 1 + LANDMARKS.length) % LANDMARKS.length)}
                className="w-28 sm:w-36 md:w-44 h-72 sm:h-88 md:h-[26rem] rounded-[2rem] md:rounded-[2.4rem] overflow-hidden border-[3.5px] border-white/85 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group relative cursor-pointer ring-1 ring-white/20"
              >
                <img
                  src={leftItem.image}
                  alt={leftItem.city}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/30" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 right-3 flex justify-between items-center">
                  <span className="rounded-full bg-black/60 backdrop-blur-md px-2.5 py-0.5 text-[9px] font-black text-white border border-white/20">
                    {leftItem.flag} {leftItem.country}
                  </span>
                  <span className="flex items-center gap-0.5 text-[10px] font-bold text-amber-300 bg-black/40 backdrop-blur-md px-1.5 py-0.5 rounded-full">
                    <Star size={10} className="fill-amber-300" /> {leftItem.rating}
                  </span>
                </div>

                <div className="absolute bottom-4 left-3 right-3 text-white text-center">
                  <p className="text-[11px] font-black uppercase tracking-wider text-amber-300">{leftItem.city}</p>
                  <p className="text-xs font-bold text-white/95 leading-tight">{leftItem.visaTag}</p>
                </div>
              </motion.div>

              {/* Center Card (Front, Taller, Elevated with Glow) */}
              <motion.div
                key={`center-${centerItem.id}`}
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: -16 }}
                whileHover={{ scale: 1.03, y: -22 }}
                transition={{ duration: 0.45 }}
                className="w-32 sm:w-42 md:w-52 h-80 sm:h-96 md:h-[29rem] rounded-[2rem] md:rounded-[2.6rem] overflow-hidden border-[4px] border-white shadow-[0_30px_80px_rgba(112,45,136,0.5)] group relative ring-4 ring-purple-400/40 cursor-pointer z-20"
              >
                <img
                  src={centerItem.image}
                  alt={centerItem.city}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/20" />

                {/* Top Badge */}
                <div className="absolute top-4 left-3 right-3 flex justify-between items-center">
                  <span className="rounded-full bg-[#702D88]/90 backdrop-blur-md px-3 py-1 text-[10px] font-black text-white border border-purple-300/50 shadow-md">
                    {centerItem.flag} {centerItem.country}
                  </span>
                  <span className="flex items-center gap-0.5 text-[10px] font-bold text-amber-300 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/20">
                    <Star size={10} className="fill-amber-300" /> {centerItem.rating}
                  </span>
                </div>

                <div className="absolute bottom-5 left-3 right-3 text-white text-center">
                  <p className="text-[11px] font-black uppercase tracking-wider text-amber-300">{centerItem.city}</p>
                  <p className="text-sm font-black text-white/95 leading-tight">{centerItem.visaTag}</p>
                  <span className="inline-block mt-1 text-[10px] font-bold text-purple-200 bg-white/15 backdrop-blur-sm px-2.5 py-0.5 rounded-full">
                    Click to View
                  </span>
                </div>
                <Link to={centerItem.link} className="absolute inset-0" aria-label={`View ${centerItem.country}`} />
              </motion.div>

              {/* Right Card (Slightly back) */}
              <motion.div
                key={`right-${rightItem.id}`}
                initial={{ opacity: 0, x: 20, scale: 0.95 }}
                animate={{ opacity: 0.88, x: 0, scale: 0.96 }}
                whileHover={{ opacity: 1, scale: 1.02, y: -6 }}
                transition={{ duration: 0.4 }}
                onClick={() => setActiveCenter((activeCenter + 1) % LANDMARKS.length)}
                className="w-28 sm:w-36 md:w-44 h-72 sm:h-88 md:h-[26rem] rounded-[2rem] md:rounded-[2.4rem] overflow-hidden border-[3.5px] border-white/85 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group relative cursor-pointer ring-1 ring-white/20"
              >
                <img
                  src={rightItem.image}
                  alt={rightItem.city}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/30" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 right-3 flex justify-between items-center">
                  <span className="rounded-full bg-black/60 backdrop-blur-md px-2.5 py-0.5 text-[9px] font-black text-white border border-white/20">
                    {rightItem.flag} {rightItem.country}
                  </span>
                  <span className="flex items-center gap-0.5 text-[10px] font-bold text-amber-300 bg-black/40 backdrop-blur-md px-1.5 py-0.5 rounded-full">
                    <Star size={10} className="fill-amber-300" /> {rightItem.rating}
                  </span>
                </div>

                <div className="absolute bottom-4 left-3 right-3 text-white text-center">
                  <p className="text-[11px] font-black uppercase tracking-wider text-amber-300">{rightItem.city}</p>
                  <p className="text-xs font-bold text-white/95 leading-tight">{rightItem.visaTag}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Booking / Search Bar */}
      <div className="mt-12 lg:mt-16">
        <SearchFilterBar />
      </div>
    </section>
  );
}

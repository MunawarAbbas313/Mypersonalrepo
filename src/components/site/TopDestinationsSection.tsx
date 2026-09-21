import { Link } from "@tanstack/react-router";
import { Plane, ArrowRight, Sparkles, Star } from "lucide-react";
import { motion } from "framer-motion";

interface DestinationItem {
  id: string;
  flag: string;
  country: string;
  landmark: string;
  tag: string;
  image: string;
  link: string;
}

const FEATURED_VISIT_DESTINATIONS: DestinationItem[] = [
  {
    id: "thailand",
    flag: "🇹🇭",
    country: "THAILAND",
    landmark: "Bangkok & Phuket (Wat Arun)",
    tag: "Top Tourist Pick",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=800&auto=format&fit=crop",
    link: "/countries/south-asia/thailand",
  },
  {
    id: "malaysia",
    flag: "🇲🇾",
    country: "MALAYSIA",
    landmark: "Kuala Lumpur (Petronas Towers)",
    tag: "Instant 48h eVisa",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=800&auto=format&fit=crop",
    link: "/countries/south-asia/malaysia",
  },
  {
    id: "indonesia",
    flag: "🇮🇩",
    country: "INDONESIA",
    landmark: "Bali Island & Jakarta",
    tag: "Visa on Arrival / B211A",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop",
    link: "/countries/south-asia/indonesia",
  },
  {
    id: "singapore",
    flag: "🇸🇬",
    country: "SINGAPORE",
    landmark: "Marina Bay Sands & Sentosa",
    tag: "Instant Electronic Visa",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=800&auto=format&fit=crop",
    link: "/countries/south-asia/singapore",
  },
  {
    id: "nepal",
    flag: "🇳🇵",
    country: "NEPAL",
    landmark: "Kathmandu & Himalayas",
    tag: "Scenic Adventure",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop",
    link: "/countries/south-asia/nepal",
  },
  {
    id: "uae",
    flag: "🇦🇪",
    country: "UNITED ARAB EMIRATES",
    landmark: "Dubai Burj Khalifa & Marina",
    tag: "24-48h Express",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=800&auto=format&fit=crop",
    link: "/countries/middle-east/united-arab-emirates",
  },
  {
    id: "pakistan",
    flag: "🇵🇰",
    country: "PAKISTAN",
    landmark: "Hunza Valley & Historic Heritage",
    tag: "Inbound Tourism",
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800&auto=format&fit=crop",
    link: "/pakistan-visa",
  },
];

export function TopDestinationsSection() {
  return (
    <section className="py-24 bg-[#FBF9FC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-[#702D88] font-black uppercase tracking-wider text-xl sm:text-2xl">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-100/80 text-[#702D88] shadow-sm">
              <Plane size={20} className="text-[#702D88]" />
            </span>
            <span>FEATURED VISIT VISA DESTINATIONS</span>
          </div>
          <p className="mt-2 text-sm text-gray-500 font-semibold max-w-xl mx-auto">
            Thailand, Malaysia, Indonesia, Umrah, Nepal &amp; Dubai — hassle-free visa processing with guaranteed documentation support
          </p>
        </div>

        {/* ── Bento Grid: Left Tall Umrah Feature Card + Right 6 Grid Cards ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Tall Feature Card: Umrah & Saudi Arabia */}
          <div className="lg:col-span-4 flex">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group relative w-full h-full min-h-[480px] lg:min-h-[530px] overflow-hidden rounded-[2.2rem] bg-gray-950 shadow-xl shadow-purple-950/20 flex flex-col justify-between p-8 border border-purple-200/60 hover:border-purple-400/80 transition-all"
            >
              <img
                src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=800&auto=format&fit=crop"
                alt="Umrah Makkah Grand Mosque Kaaba"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/20" />

              {/* Top Feature Badges */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-3.5 py-1 text-xs font-black text-amber-300 border border-amber-300/30">
                  <span>🕋</span>
                  <span>Sacred Journey</span>
                </span>
                <span className="flex items-center gap-1 rounded-full bg-emerald-600/90 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-black text-white shadow-sm">
                  VIP Packages 2026
                </span>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 text-white space-y-3.5">
                <div>
                  <h3 className="text-3xl font-black tracking-tight text-white uppercase">
                    UMRAH PACKAGES
                  </h3>
                  <p className="text-base font-bold text-amber-300">
                    Makkah &amp; Madinah Luxury Stays
                  </p>
                </div>

                <p className="text-xs text-gray-200/95 leading-relaxed max-w-sm">
                  Complete Umrah visa processing, 5-star luxury hotels near Haram, VIP airport transfers, curated ziyarat tours &amp; dedicated 24/7 Nusuk platform assistance.
                </p>

                <div className="pt-2">
                  <Link
                    to="/umrah"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#702D88] to-[#581c87] hover:from-[#581c87] hover:to-[#3b0764] text-white px-7 py-3 text-xs font-black tracking-wider uppercase shadow-lg shadow-purple-950/30 transition-all hover:scale-105"
                  >
                    <span>Explore Umrah Packages</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Grid: 6 Destination Cards (Thailand, Malaysia, Indonesia, Nepal, UAE, Pakistan) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {FEATURED_VISIT_DESTINATIONS.map((dest) => (
              <motion.div
                key={dest.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group relative h-60 sm:h-64 overflow-hidden rounded-[1.8rem] bg-gray-950 shadow-md shadow-purple-950/10 border border-purple-100/50 flex flex-col justify-between p-5 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-900/20 transition-all cursor-pointer"
              >
                <img
                  src={dest.image}
                  alt={`${dest.country} ${dest.landmark}`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/15" />

                {/* Top Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="rounded-full bg-black/55 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold text-white border border-white/20">
                    {dest.flag} {dest.country.split(" ")[0]}
                  </span>
                  <span className="rounded-full bg-[#702D88]/85 backdrop-blur-md px-2 py-0.5 text-[9px] font-black text-amber-300 border border-purple-400/40">
                    {dest.tag}
                  </span>
                </div>

                {/* Bottom Title */}
                <div className="relative z-10 text-white">
                  <h4 className="text-sm font-black tracking-wider text-white uppercase group-hover:text-purple-200 transition-colors">
                    {dest.country}
                  </h4>
                  <p className="text-xs font-semibold text-gray-200 mt-0.5 flex items-center justify-between">
                    <span className="line-clamp-1">{dest.landmark}</span>
                    <ArrowRight size={13} className="text-amber-300 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 shrink-0 ml-1" />
                  </p>
                </div>

                <Link
                  to={dest.link}
                  className="absolute inset-0 z-20"
                  aria-label={`View ${dest.country} packages`}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── View All Destinations CTA ── */}
        <div className="mt-14 text-center">
          <Link
            to="/countries"
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#702D88] to-[#581c87] hover:from-[#581c87] hover:to-[#3b0764] text-white px-9 py-4 text-sm font-black shadow-xl shadow-purple-900/25 transition-all duration-300 hover:scale-105 active:scale-98 border border-purple-300/30"
          >
            <span>View All Destinations</span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#702D88] transition-transform duration-300 group-hover:translate-x-1 shadow-sm">
              <ArrowRight size={13} strokeWidth={3} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

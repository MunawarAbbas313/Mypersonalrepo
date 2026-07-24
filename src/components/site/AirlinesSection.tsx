import { motion } from "framer-motion";
import { Plane, ArrowRight, Globe } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const ASIAN_DESTINATIONS = [
  { n: "Thailand", s: "thailand", f: "TH" },
  { n: "Malaysia", s: "malaysia", f: "MY" },
  { n: "Indonesia", s: "indonesia", f: "ID" },
  { n: "Singapore", s: "singapore", f: "SG" },
  { n: "Sri Lanka", s: "sri-lanka", f: "LK" },
  { n: "Maldives", s: "maldives", f: "MV" },
];

const MIDDLE_EAST_DESTINATIONS = [
  { n: "Turkey", s: "turkey", f: "TR" },
  { n: "UAE", s: "uae", f: "AE" },
  { n: "Saudi Arabia", s: "saudi-arabia", f: "SA" },
  { n: "China", s: "china", f: "CN" },
  { n: "Japan", s: "japan", f: "JP" },
  { n: "South Korea", s: "south-korea", f: "KR" },
];

const TOP_AIRLINES = [
  { label: "PIA Pakistan", to: "/partner-airlines", f: "PK" },
  { label: "Emirates", to: "/partner-airlines", f: "AE" },
  { label: "Qatar Airways", to: "/partner-airlines", f: "QA" },
  { label: "Turkish Airlines", to: "/partner-airlines", f: "TR" },
  { label: "Saudia", to: "/partner-airlines", f: "SA" },
  { label: "Etihad Airways", to: "/partner-airlines", f: "AE" },
];

export function AirlinesSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0D47A1]/20 to-transparent" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#0D47A1]/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#F7941D]/5 rounded-full blur-3xl" />

      <div className="container-px mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2 border border-[#0D47A1]/10 shadow-sm mb-6 font-black uppercase tracking-[0.3em] text-[10px] text-[#0D47A1]">
              <Globe size={14} className="animate-pulse" /> Global Reach
            </div>
            <h2 className="text-5xl font-black tracking-tighter text-foreground sm:text-6xl leading-[0.9]">
              Connecting You <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D47A1] to-[#F7941D]">Globally.</span>
            </h2>
          </div>
          <Link
            to="/countries"
            className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 border border-[#E5E7EB] shadow-sm text-sm font-black uppercase tracking-widest text-[#0D47A1] hover:border-[#0D47A1]/30 hover:shadow-md transition-all"
          >
            Explore All <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Column 1: Asian Destinations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group/card relative p-8 rounded-[2rem] bg-white/80 backdrop-blur-xl border border-white shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(13,71,161,0.12)] transition-all duration-500 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#0D47A1] to-blue-400" />
            <div className="flex items-center gap-4 mb-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0D47A1] to-blue-600 text-white shadow-lg shadow-blue-900/20 group-hover/card:scale-110 transition-transform duration-500">
                <Globe size={24} strokeWidth={2} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0D47A1] mb-1">Top Spots</p>
                <h3 className="text-xl font-black tracking-tight text-slate-800">Asian Destinations</h3>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ASIAN_DESTINATIONS.map((dest) => (
                <Link
                  key={dest.s}
                  to="/countries"
                  className="group flex items-center gap-3 p-3 rounded-xl bg-slate-50/50 hover:bg-blue-50 border border-transparent hover:border-blue-100 transition-all duration-300"
                >
                  <div className="relative overflow-hidden rounded-[3px] shadow-sm">
                    <img
                      src={`https://flagcdn.com/w40/${dest.f.toLowerCase()}.png`}
                      srcSet={`https://flagcdn.com/w80/${dest.f.toLowerCase()}.png 2x`}
                      alt={dest.n}
                      loading="lazy"
                      decoding="async"
                      className="w-8 h-5 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-sm font-bold text-slate-700 group-hover:text-[#0D47A1] transition-colors">{dest.n}</span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Middle East & Beyond */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group/card relative p-8 rounded-[2rem] bg-white/80 backdrop-blur-xl border border-white shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(247,148,29,0.15)] transition-all duration-500 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#F7941D] to-orange-400" />
            <div className="flex items-center gap-4 mb-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F7941D] to-orange-500 text-white shadow-lg shadow-orange-900/20 group-hover/card:scale-110 transition-transform duration-500">
                <Globe size={24} strokeWidth={2} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#F7941D] mb-1">Discover</p>
                <h3 className="text-xl font-black tracking-tight text-slate-800">Middle East &amp; Beyond</h3>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {MIDDLE_EAST_DESTINATIONS.map((dest) => (
                <Link
                  key={dest.s}
                  to="/countries"
                  className="group flex items-center gap-3 p-3 rounded-xl bg-slate-50/50 hover:bg-orange-50 border border-transparent hover:border-orange-100 transition-all duration-300"
                >
                  <div className="relative overflow-hidden rounded-[3px] shadow-sm">
                    <img
                      src={`https://flagcdn.com/w40/${dest.f.toLowerCase()}.png`}
                      srcSet={`https://flagcdn.com/w80/${dest.f.toLowerCase()}.png 2x`}
                      alt={dest.n}
                      loading="lazy"
                      decoding="async"
                      className="w-8 h-5 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-sm font-bold text-slate-700 group-hover:text-[#F7941D] transition-colors">{dest.n}</span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Column 3: Ticketing & Airlines */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group/card relative p-8 rounded-[2rem] bg-white/80 backdrop-blur-xl border border-white shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(41,171,226,0.15)] transition-all duration-500 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#29ABE2] to-cyan-400" />
            <div className="flex items-center gap-4 mb-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#29ABE2] to-cyan-500 text-white shadow-lg shadow-cyan-900/20 group-hover/card:scale-110 transition-transform duration-500">
                <Plane size={24} strokeWidth={2} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#29ABE2] mb-1">IATA Approved</p>
                <h3 className="text-xl font-black tracking-tight text-slate-800">Ticketing &amp; Airlines</h3>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {TOP_AIRLINES.map((link) => (
                <Link
                  key={link.label}
                  to={link.to as any}
                  className="group flex items-center gap-3 p-3 rounded-xl bg-slate-50/50 hover:bg-cyan-50 border border-transparent hover:border-cyan-100 transition-all duration-300"
                >
                  <div className="relative overflow-hidden rounded-[3px] shadow-sm flex items-center justify-center bg-white p-0.5">
                    <img
                      src={`https://flagcdn.com/w40/${link.f.toLowerCase()}.png`}
                      srcSet={`https://flagcdn.com/w80/${link.f.toLowerCase()}.png 2x`}
                      loading="lazy"
                      decoding="async"
                      alt={link.label}
                      className="w-7 h-auto object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-sm font-bold text-slate-700 group-hover:text-[#29ABE2] transition-colors leading-tight">{link.label}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Plane, Award, Sparkles, Globe2, Users } from "lucide-react";
import heroBg from "@/assets/dest-middleeast.jpg";
import mainImg from "@/assets/dest-schengen.jpg";
import subImg from "@/assets/dest-canada.jpg";
import { BookingWidget } from "./BookingWidget";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0D47A1]/90 via-[#0D47A1]/70 to-[#29ABE2]/60 text-white">
      {/* Background image overlay */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="h-full w-full object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D47A1]/85 via-[#0D47A1]/75 to-[#29ABE2]/65" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.08)_0%,_transparent_50%)]" />

      <div className="container-px relative mx-auto max-w-7xl pt-32 md:pt-36 pb-16 lg:pb-20">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <div className="inline-flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-md px-5 py-2 border border-white/20 mb-6">
              <Sparkles size={14} className="text-[#F7941D] animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/90">Pakistan's #1 Travel Agency</span>
            </div>
            
            <h1 className="text-5xl font-black leading-[0.95] tracking-tighter text-white sm:text-6xl lg:text-7xl mb-6">
              Best Travel Agency <br />
              <span className="text-[#F7941D] italic">in Pakistan</span>
            </h1>
            
            <p className="max-w-lg text-base sm:text-lg font-medium leading-relaxed text-white/70 mb-8">
              AL ARBAB TRAVEL & TOURS — IATA-authorized visa consultancy, airline ticketing, 
              Umrah packages & travel insurance. 98% visa approval rate from Islamabad.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <Link
                to="/visa-services"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#F7941D] hover:bg-white hover:text-[#0D47A1] px-8 py-4 text-sm font-black text-white shadow-[0_10px_30px_rgba(247,148,29,0.35)] transition-all duration-300 hover:-translate-y-1"
              >
                Apply for Visa
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/air-ticketing"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-white/10 backdrop-blur-md hover:bg-white hover:text-[#0D47A1] px-8 py-4 text-sm font-black text-white border border-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                <Plane size={18} /> Book Flights
              </Link>
            </div>

            {/* Compact Stats Row */}
            <div className="flex flex-wrap gap-6">
              {[
                { v: "15+", l: "Years", icon: Award },
                { v: "98%", l: "Success", icon: ShieldCheck },
                { v: "20K+", l: "Clients", icon: Users },
                { v: "50+", l: "Countries", icon: Globe2 },
              ].map((s) => (
                <div key={s.l} className="flex items-center gap-3 group cursor-default">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 group-hover:bg-white/20 transition-colors">
                    <s.icon size={18} className="text-[#F7941D]" />
                  </div>
                  <div>
                    <p className="text-lg font-black text-white leading-none">{s.v}</p>
                    <p className="text-[9px] uppercase font-bold tracking-widest text-white/50 mt-0.5">{s.l}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right side — compact image collage */}
          <div className="hidden lg:block relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4 items-end">
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.3)] border-4 border-white/20 aspect-[3/4] group">
                  <img
                    src={mainImg}
                    alt="Schengen visa expert from Islamabad Pakistan"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-[9px] font-black uppercase tracking-[0.25em] text-[#F7941D] mb-1">Top Destination</p>
                    <h3 className="text-2xl font-black tracking-tight leading-tight">Schengen<br/>Visa Expert</h3>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] border-4 border-white/20 aspect-square group">
                    <img
                      src={subImg}
                      alt="Canada visa consultancy from Pakistan"
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-[1500ms]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <p className="text-xs font-black text-white">Canada & Americas</p>
                    </div>
                  </div>
                  <div className="relative p-6 rounded-[2rem] bg-white/10 backdrop-blur-md border border-white/15 shadow-lg">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F7941D] text-white mb-3 shadow-lg">
                      <Plane size={20} strokeWidth={2.5} />
                    </div>
                    <p className="text-[9px] font-black text-[#F7941D] uppercase tracking-[0.2em] mb-1">IATA Authorized</p>
                    <p className="text-sm font-black text-white leading-tight">Expert Airline Ticketing</p>
                  </div>
                </div>
              </div>

              {/* Floating IATA Badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-1/4 h-20 w-20 rounded-full bg-[#F7941D] flex flex-col items-center justify-center text-white shadow-[0_10px_30px_rgba(247,148,29,0.4)] border-4 border-white/30 z-20"
              >
                <span className="text-lg font-black leading-none">IATA</span>
                <span className="text-[8px] font-bold uppercase tracking-tighter">Authorized</span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Booking Widget */}
        <div className="mt-12 lg:mt-16 relative z-50">
          <BookingWidget />
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg
          className="relative block w-full h-[50px] md:h-[80px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,115.1,188.44,98.6,236.8,84.7,279.4,71.06,321.39,56.44Z"
            className="fill-background"
          ></path>
        </svg>
      </div>
    </section>
  );
}

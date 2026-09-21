import { ShieldCheck, Headphones, Ticket, Award, Compass } from "lucide-react";
import { motion } from "framer-motion";
import { COMPANY } from "@/data/company";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Best Price Guarantee",
    desc: "IATA-authorized airfares and transparent visa fees with no hidden charges.",
    iconColor: "text-[#BE185D]",
    iconBg: "bg-pink-50 border-pink-100",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    desc: `Direct phone & WhatsApp support: ${COMPANY.phone} available anytime.`,
    iconColor: "text-[#702D88]",
    iconBg: "bg-purple-50 border-purple-100",
  },
  {
    icon: Ticket,
    title: "Easy & Fast Booking",
    desc: "Seamless document review, online appointments & instant ticket issuance.",
    iconColor: "text-[#BE185D]",
    iconBg: "bg-pink-50 border-pink-100",
  },
  {
    icon: Award,
    title: "98% Visa Success Rate",
    desc: "Over 15 years of industry excellence and 20,000+ happy travelers.",
    iconColor: "text-[#702D88]",
    iconBg: "bg-purple-50 border-purple-100",
  },
];

export function WhyTravelWithUsSection() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* ── Panoramic Background (Hot air balloons over landscape) ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=2000&auto=format&fit=crop"
          alt="Scenic hot air balloons over landscape"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/45 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>

      <div className="container-px relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Section Title ── */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-white font-black uppercase tracking-wider text-2xl sm:text-3xl drop-shadow-md">
            <Compass size={26} className="text-purple-300" />
            <span>WHY TRAVEL WITH US?</span>
          </div>
        </div>

        {/* ── 4 Glassmorphic Feature Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="rounded-2xl bg-white/90 backdrop-blur-md p-6 shadow-xl border border-white/60 flex flex-col justify-center transition-all duration-300 hover:bg-white"
            >
              <div className="flex items-center gap-4 mb-3">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${item.iconBg} ${item.iconColor} shadow-sm`}
                >
                  <item.icon size={24} strokeWidth={2.2} />
                </div>
                <h3 className="text-base font-extrabold text-gray-900 tracking-tight leading-snug">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs font-medium text-gray-600 leading-relaxed pl-16 sm:pl-0">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

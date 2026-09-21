import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Phone, User, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TicketPlanLogo } from "./TicketPlanLogo";
import { COMPANY } from "@/data/company";

const NAV_DROPDOWNS = [
  {
    label: "Visa Services",
    items: [
      { name: "Schengen Visa (Europe)", to: "/countries/schengen/france", desc: "France, Italy, Germany & 29 EU nations" },
      { name: "UK & USA Visas", to: "/countries/united-states", desc: "Tourist, business & conference visas" },
      { name: "Canada & Australia", to: "/countries/canada", desc: "TRV, visit & immigration consultancy" },
      { name: "All 50+ Countries", to: "/visa-services", desc: "98% visa approval rate from Islamabad" },
    ],
  },
  {
    label: "Packages Tour",
    items: [
      { name: "Umrah Packages 2026", to: "/umrah", desc: "Economy & VIP luxury stays in Makkah & Madinah" },
      { name: "Europe & UK Tours", to: "/countries/schengen/italy", desc: "Complete guided holiday packages" },
      { name: "Turkey & Middle East", to: "/countries/central-asia/turkey", desc: "Istanbul, Cappadocia & Dubai packages" },
      { name: "All Destinations", to: "/countries", desc: "Explore curated international travel" },
    ],
  },
  {
    label: "Air Ticketing",
    items: [
      { name: "International Flights", to: "/air-ticketing", desc: "IATA authorized real-time airline fares" },
      { name: "Partner Airlines (22+)", to: "/partner-airlines", desc: "Emirates, Qatar, PIA, Saudia & Turkish" },
      { name: "Group Flight Bookings", to: "/contact", desc: "Special discounted corporate & family fares" },
    ],
  },
  {
    label: "Pages",
    items: [
      { name: "About Al Arbab", to: "/about", desc: "15+ years experience & IATA accreditation" },
      { name: "Hotel Bookings", to: "/hotel-booking", desc: "Worldwide 3 to 5 star hotel reservations" },
      { name: "Travel Insurance", to: "/travel-insurance", desc: "Schengen & international approved cover" },
      { name: "Contact & Location", to: "/contact", desc: "Blue Area, Islamabad office" },
    ],
  },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_4px_25px_rgba(112,45,136,0.08)] border-b border-purple-100/60 py-2.5"
            : "bg-white/90 backdrop-blur-sm border-b border-gray-100 py-3.5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* ── Brand Logo ── */}
          <Link to="/" className="shrink-0 transition-transform hover:scale-[1.02]">
            <TicketPlanLogo />
          </Link>

          {/* ── Desktop Navigation ── */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {/* Home link */}
            <Link
              to="/"
              className={`relative px-3.5 py-2 text-sm font-bold transition-colors ${
                location.pathname === "/" ? "text-[#702D88]" : "text-gray-700 hover:text-[#702D88]"
              }`}
            >
              Home
              {location.pathname === "/" && (
                <motion.span
                  layoutId="activeNavTab"
                  className="absolute inset-x-3.5 -bottom-1 h-0.5 rounded-full bg-[#702D88]"
                />
              )}
            </Link>

            {/* Dropdown menus */}
            {NAV_DROPDOWNS.map((menu) => (
              <div
                key={menu.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(menu.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold transition-colors ${
                    activeDropdown === menu.label ? "text-[#702D88]" : "text-gray-700 hover:text-[#702D88]"
                  }`}
                >
                  <span>{menu.label}</span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      activeDropdown === menu.label ? "rotate-180 text-[#702D88]" : "text-gray-400"
                    }`}
                  />
                </button>

                {/* Dropdown Card */}
                <AnimatePresence>
                  {activeDropdown === menu.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-0 top-full pt-2 w-72 z-50"
                    >
                      <div className="rounded-2xl bg-white p-3 shadow-2xl border border-purple-100/80 ring-1 ring-black/5">
                        {menu.items.map((item) => (
                          <Link
                            key={item.name}
                            to={item.to}
                            className="group flex flex-col rounded-xl px-3 py-2.5 transition-colors hover:bg-purple-50/70"
                          >
                            <span className="text-sm font-bold text-gray-800 group-hover:text-[#702D88] transition-colors">
                              {item.name}
                            </span>
                            <span className="text-xs text-gray-500 line-clamp-1">{item.desc}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* ── Desktop Right Actions (Phone & Apply Now) ── */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Real Phone Pill */}
            <a
              href={`tel:${COMPANY.mobile}`}
              className="inline-flex items-center gap-2 rounded-full bg-purple-50 hover:bg-purple-100/80 text-[#702D88] border border-purple-200/80 px-4 py-2 text-xs font-bold transition-all hover:shadow-sm"
            >
              <Phone size={14} className="text-[#702D88]" />
              <span>{COMPANY.phone}</span>
            </a>

            {/* Apply Now Pill Button */}
            <Link
              to="/visa-services"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#702D88] to-[#581c87] hover:from-[#581c87] hover:to-[#3b0764] text-white px-5 py-2 text-xs font-bold shadow-md shadow-purple-900/20 transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              <Send size={13} />
              <span>Apply Visa</span>
            </Link>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-[#702D88] hover:bg-purple-100 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] bg-black/40 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 240 }}
              className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white p-6 shadow-2xl overflow-y-auto flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <TicketPlanLogo />
                  <button
                    onClick={() => setOpen(false)}
                    className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-100"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="py-4 space-y-1">
                  <Link
                    to="/"
                    className="block px-3 py-2.5 rounded-xl text-sm font-bold text-[#702D88] bg-purple-50"
                  >
                    Home
                  </Link>
                  {NAV_DROPDOWNS.map((section) => (
                    <div key={section.label} className="py-2">
                      <p className="px-3 text-xs font-extrabold uppercase tracking-wider text-purple-900/60">
                        {section.label}
                      </p>
                      <div className="mt-1 space-y-0.5">
                        {section.items.map((it) => (
                          <Link
                            key={it.name}
                            to={it.to}
                            className="block px-3 py-2 rounded-lg text-xs font-semibold text-gray-700 hover:bg-purple-50 hover:text-[#702D88]"
                          >
                            {it.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 space-y-3">
                <a
                  href={`tel:${COMPANY.mobile}`}
                  className="flex items-center justify-center gap-2 rounded-full bg-purple-50 text-[#702D88] border border-purple-200 py-2.5 text-xs font-bold"
                >
                  <Phone size={14} />
                  {COMPANY.phoneDisplay}
                </a>
                <Link
                  to="/visa-services"
                  className="flex items-center justify-center gap-2 rounded-full bg-[#702D88] text-white py-2.5 text-xs font-bold shadow-md shadow-purple-900/20"
                >
                  <Send size={14} />
                  Apply Visa Now
                </Link>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronRight, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/data/navigation";
import { COMPANY } from "@/data/company";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const VISA_REGIONS = [
  {
    id: "asia",
    label: "Asia",
    countries: [
      { name: "Azerbaijan", code: "az" },
      { name: "Bahrain", code: "bh" },
      { name: "China", code: "cn" },
      { name: "Cambodia", code: "kh" },
      { name: "Indonesia", code: "id" },
      { name: "Japan", code: "jp" },
      { name: "Kazakhstan", code: "kz" },
      { name: "Malaysia", code: "my" },
      { name: "Maldives", code: "mv" },
    ]
  },
  {
    id: "europe",
    label: "Europe",
    countries: [
      { name: "Schengen Area", code: "eu" },
      { name: "United Kingdom", code: "gb" },
      { name: "Turkey", code: "tr" },
      { name: "Germany", code: "de" },
      { name: "France", code: "fr" },
    ]
  },
  {
    id: "africa",
    label: "Africa",
    countries: [
      { name: "Egypt", code: "eg" },
      { name: "Morocco", code: "ma" },
      { name: "South Africa", code: "za" },
    ]
  }
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeRegion, setActiveRegion] = useState(VISA_REGIONS[0].id);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 z-[100] mx-auto w-[96%] max-w-7xl transition-all duration-500 ${
          scrolled
            ? "top-2 h-14 md:h-16 rounded-[1.5rem] glass-modern shadow-[0_8px_30px_rgba(13,71,161,0.08)]"
            : "top-3 md:top-8 h-16 md:h-20 rounded-xl md:rounded-[1.75rem] glass-modern border border-[rgba(229,231,235,0.3)] shadow-sm"
        }`}
      >
        <div className="px-3 sm:px-6 mx-auto flex h-full items-center justify-between gap-2 lg:gap-4 w-full">
          {/* ── Brand & Expanded Logo ── */}
          <Link to="/" className="group flex flex-shrink-0 items-center gap-2 lg:gap-3 py-1">
            <div className="relative flex items-center justify-center">
              <img
                src={logo}
                alt={COMPANY.name}
                className={`${scrolled ? "h-8 sm:h-10" : "h-10 sm:h-12"} w-auto max-w-[150px] xl:max-w-[200px] object-contain transition-all duration-500 group-hover:scale-105 filter drop-shadow-sm`}
              />
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="text-sm md:text-base lg:text-[15px] xl:text-lg font-black tracking-tight text-[#F9B319] whitespace-nowrap">
                AL ARBAB <span className="text-[#004AAD]">TRAVEL &amp; TOURS</span>
              </span>
              <span className="text-[8px] xl:text-[9px] font-black uppercase tracking-[0.25em] text-muted-foreground/70 whitespace-nowrap mt-0.5">
                Islamabad, Pakistan
              </span>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center lg:gap-0.5 xl:gap-1.5 flex-1 justify-center px-1">
            {NAV_LINKS.map((l) => (
              <div key={l.to} className={cn("group/navitem relative", l.label === "Visa" && "cursor-pointer")}>
                <Link
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  className="group relative px-2 xl:px-3 py-2 text-[11px] xl:text-[12px] font-bold text-foreground/80 hover:text-[#0D47A1] transition-all duration-300 data-[status=active]:text-[#0D47A1] data-[status=active]:font-extrabold whitespace-nowrap rounded-lg hover:bg-primary/5 flex items-center gap-1"
                >
                  <span className="relative z-10 transition-transform group-hover:-translate-y-0.5 inline-block">
                    {l.label}
                  </span>
                  <span className="absolute inset-x-2 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-[#0D47A1] transition-transform duration-300 group-hover:scale-x-100 group-data-[status=active]:scale-x-100" />
                </Link>

                {l.label === "Visa" && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[380px] opacity-0 invisible group-hover/navitem:opacity-100 group-hover/navitem:visible transition-all duration-300 transform group-hover/navitem:translate-y-0 translate-y-2 z-[200]">
                    <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-border/40 overflow-hidden flex">
                      {/* Left Pane: Regions */}
                      <div className="w-[120px] bg-[#F8FAFC] border-r border-border/40 py-2 flex flex-col">
                        {VISA_REGIONS.map(region => (
                          <button
                            key={region.id}
                            onMouseEnter={() => setActiveRegion(region.id)}
                            className={cn(
                              "w-full text-left px-5 py-2.5 text-[13px] font-bold transition-all",
                              activeRegion === region.id 
                                ? "text-[#0D47A1] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)] border-l-[3px] border-[#0D47A1]" 
                                : "text-foreground/70 hover:text-[#0D47A1] hover:bg-white/50 border-l-[3px] border-transparent"
                            )}
                          >
                            {region.label}
                          </button>
                        ))}
                      </div>
                      {/* Right Pane: Countries */}
                      <div className="flex-1 bg-white p-2 max-h-[300px] overflow-y-auto custom-scrollbar">
                        <div className="grid gap-0.5">
                          {VISA_REGIONS.find(r => r.id === activeRegion)?.countries.map(country => (
                            <Link
                              key={country.code}
                              to="/countries"
                              className="flex items-center gap-3.5 px-3 py-2 rounded-xl hover:bg-muted/60 transition-colors group/country"
                            >
                              <img 
                                src={`https://flagcdn.com/w40/${country.code}.png`} 
                                srcSet={`https://flagcdn.com/w80/${country.code}.png 2x`} 
                                alt={country.name} 
                                loading="lazy"
                                decoding="async"
                                className="w-5 h-auto shadow-sm rounded-sm group-hover/country:scale-110 transition-transform" 
                              />
                              <span className="text-[13px] font-bold text-foreground group-hover/country:text-[#0D47A1] transition-colors">{country.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* ── Desktop Right Actions ── */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {/* SSL Badge */}
            <div className="relative group/ssl flex items-center justify-center h-9 w-9 shrink-0 rounded-full border border-primary/15 bg-primary/5 transition-all hover:bg-primary/10 cursor-help">
              <ShieldCheck size={16} className="text-[#0D47A1] relative z-10" />
              <span className="absolute inset-0 rounded-full bg-primary/10 animate-ping opacity-30" />
              {/* Tooltip */}
              <div className="absolute top-full mt-3 right-0 w-56 origin-top-right scale-95 opacity-0 invisible group-hover/ssl:visible group-hover/ssl:scale-100 group-hover/ssl:opacity-100 transition-all duration-300 z-[200]">
                <div className="absolute -top-3 left-0 w-full h-3" />
                <div className="rounded-xl bg-card border border-border shadow-2xl p-3.5">
                  <div className="flex items-start gap-2.5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[#0D47A1]">
                      <ShieldCheck size={16} />
                    </div>
                    <div className="flex flex-col text-left">
                      <h4 className="text-xs font-bold text-foreground">SSL Secure</h4>
                      <p className="text-[10px] text-muted-foreground leading-relaxed mt-1 font-medium">
                        256-bit encrypted &amp; IATA authorized.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/visa-services"
              className="group/btn relative inline-flex items-center p-1 rounded-full bg-gradient-to-r from-[#E61B1B] via-[#E4247E] to-[#C845B6] shadow-[0_4px_18px_rgba(228,36,126,0.4)] transition-all duration-300 hover:shadow-[0_6px_25px_rgba(228,36,126,0.65)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="relative inline-flex items-center gap-1.5 rounded-full border border-white/40 px-5 py-2 text-xs font-black uppercase tracking-wider text-white transition-all duration-300 group-hover/btn:border-white/70 group-hover/btn:bg-white/10 drop-shadow-sm">
                <span>🔥</span>
                <span>Apply Visa Now</span>
                <ChevronRight size={15} className="transition-transform duration-300 group-hover/btn:translate-x-0.5 text-white" />
              </span>
            </Link>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/70 text-foreground shadow-sm backdrop-blur-md transition-all hover:bg-muted active:scale-95"
            aria-label="Open menu"
          >
            <Menu size={20} className="text-[#0D47A1]" />
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
              className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-background shadow-2xl z-[151]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between border-b border-border px-5 py-4">
                  <div className="flex items-center gap-3">
                    <img src={logo} alt={COMPANY.name} className="h-8 w-auto" />
                    <div className="flex flex-col leading-none">
                      <span className="text-sm font-black text-[#F9B319]">AL ARBAB</span>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-[#004AAD]">Travel &amp; Tours</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-xl hover:bg-muted transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={20} />
                  </button>
                </div>

                <nav className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                  <div className="space-y-1">
                    {NAV_LINKS.map((l, i) => (
                      <motion.div
                        key={l.to}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.03 + 0.1 }}
                      >
                        <Link
                          to={l.to}
                          activeOptions={{ exact: l.to === "/" }}
                          activeProps={{ className: "bg-primary/5 text-primary" }}
                          className="flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold text-foreground/80 transition-colors hover:bg-muted"
                        >
                          {l.label}
                          <ChevronRight size={16} className="opacity-40" />
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </nav>

                <div className="p-5 border-t border-border bg-muted/30">
                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2 rounded-[12px] bg-[#F7941D] hover:bg-[#0D47A1] px-4 py-3.5 text-sm font-black text-white shadow-lg transition-transform active:scale-[0.98]"
                  >
                    Contact Us <ChevronRight size={16} />
                  </Link>

                  <div className="mt-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-600">
                      <ShieldCheck size={15} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-black text-emerald-700 leading-none">SSL Certified Secure</span>
                      <span className="text-[9px] font-bold text-emerald-600/70 mt-0.5">Active 256-bit Encryption</span>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="text-[10px] font-medium text-muted-foreground flex items-center gap-2">
                      <div className="h-1 w-1 rounded-full bg-primary" /> {COMPANY.address}
                    </div>
                    <p className="text-[9px] text-muted-foreground/50 text-center uppercase tracking-widest font-bold">
                      &copy; {new Date().getFullYear()} {COMPANY.name}
                    </p>
                  </div>
                </div>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

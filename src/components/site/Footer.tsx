import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Phone, Mail, MapPin, ArrowRight, Plane, Award, Globe, Shield } from "lucide-react";
import { COMPANY } from "@/data/company";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";
import { AirlinesCloud } from "./AirlinesCloud";

const TOP_DESTINATIONS = [
  { code: "TH", name: "Thailand", flag: "🇹🇭", tag: "Tropical Vibes" },
  { code: "MY", name: "Malaysia", flag: "🇲🇾", tag: "Twin Towers" },
  { code: "ID", name: "Indonesia", flag: "🇮🇩", tag: "Bali & Beyond" },
  { code: "SG", name: "Singapore", flag: "🇸🇬", tag: "Modern City" },
  { code: "LK", name: "Sri Lanka", flag: "🇱🇰", tag: "Island Pearl" },
  { code: "MV", name: "Maldives", flag: "🇲🇻", tag: "Luxury Escape" },
  { code: "TR", name: "Turkey", flag: "🇹🇷", tag: "East meets West" },
  { code: "AE", name: "UAE", flag: "🇦🇪", tag: "Dubai & Abu Dhabi" },
  { code: "SA", name: "Saudi Arabia", flag: "🇸🇦", tag: "Umrah & Hajj" },
  { code: "CN", name: "China", flag: "🇨🇳", tag: "Great Wall" },
  { code: "JP", name: "Japan", flag: "🇯🇵", tag: "Tech & Tradition" },
  { code: "KR", name: "South Korea", flag: "🇰🇷", tag: "K-Culture" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <AirlinesCloud />

      {/* ── Global Destinations Strip ── */}
      <section className="bg-[#03060f] border-t border-white/5 py-16">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <Globe size={12} className="text-primary" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Global Destinations</span>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white tracking-tight leading-tight">
                Popular Asian &amp; Global Destinations
              </h3>
              <p className="text-xs text-white/30 font-medium mt-1.5 max-w-md">
                Explore breathtaking destinations across Asia and beyond with AL ARBAB TRAVEL AND TOURS's premium holiday packages.
              </p>
            </div>
            <Link
              to="/countries"
              className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-primary hover:text-white transition-colors border border-primary/20 hover:border-white/20 px-5 py-2.5 rounded-full"
            >
              View All Destinations <ArrowRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {TOP_DESTINATIONS.map((dest) => (
              <Link
                key={dest.code}
                to="/countries"
                className="group flex flex-col items-center gap-2 p-3 rounded-[12px] bg-white/8 border border-white/10 hover:bg-[#0D47A1] hover:border-[#F7941D] hover:-translate-y-2 hover:scale-[1.05] hover:shadow-[0_10px_20px_rgba(247,148,29,0.2)] transition-all duration-300 text-center"
              >
                <img 
                  src={`https://flagcdn.com/w40/${dest.code.toLowerCase()}.png`}
                  srcSet={`https://flagcdn.com/w80/${dest.code.toLowerCase()}.png 2x`}
                  alt={`${dest.name} flag`} 
                  className="w-8 h-auto rounded-sm shadow-sm transition-transform duration-300 group-hover:rotate-12 group-hover:scale-125"
                />
                <div className="flex flex-col gap-0.5 mt-1">
                  <span className="text-[11px] font-black text-white/90 group-hover:text-white transition-colors leading-tight">{dest.name}</span>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#29ABE2] group-hover:text-[#F7941D] transition-colors">{dest.tag}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Trust Badges Row */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Award, label: "IATA Authorized", sub: "Official travel agent" },
              { icon: Shield, label: "SSL Secured", sub: "256-bit encryption" },
              { icon: Globe, label: "Global Coverage", sub: "120+ countries served" },
              { icon: Phone, label: "24/7 Support", sub: "WhatsApp & call" },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3 p-3 rounded-xl bg-white/3 border border-white/5">
                <div className="h-8 w-8 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon size={14} className="text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-white/80 leading-none">{label}</span>
                  <span className="text-[9px] text-white/30 font-medium mt-0.5">{sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main Footer ── */}
      <footer className="relative overflow-hidden bg-[#0D47A1] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_55%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#29ABE2]/30 to-transparent" />

        <div className="container-px mx-auto max-w-7xl pt-20 pb-10 relative z-10">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">

            {/* Brand Section & Expanded Logo */}
            <div className="lg:col-span-4 space-y-8">
              <div className="space-y-5">
                <Link to="/" className="flex items-center gap-4 group">
                  <div className="relative p-2 rounded-2xl bg-white/95 shadow-lg border border-white/20 transition-transform duration-500 group-hover:scale-105">
                    <img src={logo} alt={COMPANY.name} className="h-12 sm:h-14 w-auto max-w-[200px] object-contain" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-black text-white tracking-tighter leading-none uppercase">AL ARBAB</span>
                    <span className="text-xs font-black text-[#F9B319] tracking-[0.25em] uppercase mt-1">TRAVEL &amp; TOURS</span>
                  </div>
                </Link>
                <p className="text-sm text-white/45 leading-relaxed font-medium">
                  Pakistan's premier IATA-authorized travel consultancy based in Blue Area, Islamabad. Specialists in Schengen, UK, USA &amp; Canada visas, global airline ticketing, and Umrah packages.
                </p>
              </div>

              {/* Meta Tags / Keywords (hidden for SEO, visible as chips) */}
              <div className="space-y-3">
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20">Travel Categories</p>
                <div className="flex flex-wrap gap-2">
                  {["Visa Consultancy", "Air Ticketing", "Umrah Packages", "Hotel Booking", "Travel Insurance", "AirLinks Partner"].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/8 text-[9px] font-bold text-white/40 uppercase tracking-wider hover:bg-white/10 hover:text-white/70 transition-colors cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-10">
                <div className="space-y-3">
                  <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20">Follow Us</h4>
                  <div className="flex gap-3">
                    {[
                      { Icon: Facebook, href: COMPANY.socials.facebook, color: "hover:bg-blue-600" },
                      { Icon: Instagram, href: COMPANY.socials.instagram, color: "hover:bg-pink-600" },
                    ].map(({ Icon, href, color }) => (
                      <a
                        key={href}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn("h-9 w-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-115 hover:text-[#F7941D] hover:border-[#F7941D]", color)}
                      >
                        <Icon size={15} />
                      </a>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20">Our Office</h4>
                  <a href={COMPANY.mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/50 hover:text-white transition-colors group/map">
                    <MapPin size={14} className="text-primary group-hover/map:scale-110 transition-transform shrink-0" />
                    <span className="text-xs font-bold">Eagle Plaza, Blue Area, Islamabad (Map)</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Links Grid */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">

                {/* Asian Destinations 1 */}
                <div className="space-y-6">
                  <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-white">Asian Destinations</h4>
                  <ul className="space-y-3">
                    {[
                      { n: "Thailand", s: "thailand", f: "TH" },
                      { n: "Malaysia", s: "malaysia", f: "MY" },
                      { n: "Indonesia", s: "indonesia", f: "ID" },
                      { n: "Singapore", s: "singapore", f: "SG" },
                      { n: "Sri Lanka", s: "sri-lanka", f: "LK" },
                      { n: "Maldives", s: "maldives", f: "MV" },
                    ].map((d) => (
                      <li key={d.s}>
                        <Link to="/countries" className="text-xs font-medium text-white/80 hover:text-[#F7941D] transition-all flex items-center gap-2.5 group/link">
                          <img src={`https://flagcdn.com/w20/${d.f.toLowerCase()}.png`} alt={d.n} className="w-4 h-auto shadow-sm group-hover/link:scale-110 transition-transform rounded-[2px]" />
                          {d.n}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Asian Destinations 2 */}
                <div className="space-y-6">
                  <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-white">Middle East & Beyond</h4>
                  <ul className="space-y-3">
                    {[
                      { n: "Turkey", s: "turkey", f: "TR" },
                      { n: "UAE", s: "uae", f: "AE" },
                      { n: "Saudi Arabia", s: "saudi-arabia", f: "SA" },
                      { n: "China", s: "china", f: "CN" },
                      { n: "Japan", s: "japan", f: "JP" },
                      { n: "South Korea", s: "south-korea", f: "KR" },
                    ].map((d) => (
                      <li key={d.s}>
                        <Link to="/countries" className="text-xs font-medium text-white/80 hover:text-[#F7941D] transition-all flex items-center gap-2.5 group/link">
                          <img src={`https://flagcdn.com/w20/${d.f.toLowerCase()}.png`} alt={d.n} className="w-4 h-auto shadow-sm group-hover/link:scale-110 transition-transform rounded-[2px]" />
                          {d.n}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ticketing & Airlines */}
                <div className="space-y-6">
                  <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-white flex items-center gap-2">
                    <Plane size={9} className="text-primary" /> Ticketing & Airlines
                  </h4>
                  <ul className="space-y-3">
                    {[
                      { label: "PIA Pakistan", to: "/partner-airlines", f: "PK" },
                      { label: "Emirates", to: "/partner-airlines", f: "AE" },
                      { label: "Qatar Airways", to: "/partner-airlines", f: "QA" },
                      { label: "Turkish Airlines", to: "/partner-airlines", f: "TR" },
                      { label: "Saudia", to: "/partner-airlines", f: "SA" },
                      { label: "Etihad Airways", to: "/partner-airlines", f: "AE" },
                    ].map((link) => (
                      <li key={link.label}>
                        <Link to={link.to as any} className="text-xs font-medium text-white/80 hover:text-[#F7941D] transition-all flex items-center gap-2.5 group/link">
                          <img 
                            src={`https://flagcdn.com/w20/${link.f.toLowerCase()}.png`} 
                            alt={link.label} 
                            loading="lazy"
                            decoding="async"
                            className="w-4 h-auto shadow-sm group-hover/link:scale-110 transition-transform rounded-[2px]" 
                          />
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact */}
                <div className="space-y-6">
                  <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-white">Contact</h4>
                  <div className="space-y-5">
                    <div className="group block">
                      <p className="text-[9px] font-black uppercase tracking-[0.2em] text-primary mb-1 flex items-center gap-1">
                        <Phone size={8} /> Direct Call
                      </p>
                      <p className="text-xs font-black text-white/90">
                        <a href={`tel:${COMPANY.mobile}`} className="hover:text-white hover:underline underline-offset-4">{COMPANY.mobile}</a>
                        {" "}<span className="text-white/40">|</span>{" "}
                        <a href={`tel:${COMPANY.landline.replace(/\D/g, "")}`} className="hover:text-white hover:underline underline-offset-4">{COMPANY.landline}</a>
                      </p>
                    </div>
                    <a href={`mailto:${COMPANY.email}`} className="group block">
                      <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/60 mb-1 flex items-center gap-1">
                        <Mail size={8} /> Email
                      </p>
                      <p className="text-xs font-black text-white group-hover:text-[#F7941D] group-hover:underline underline-offset-4 break-all">{COMPANY.email}</p>
                    </a>
                    <a href={`https://wa.me/${COMPANY.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest text-white/80 hover:text-[#F7941D] transition-colors">
                      WhatsApp Us <ArrowRight size={10} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col items-center md:items-start gap-1.5">
              <p className="text-[10px] font-bold text-white/50 tracking-[0.2em] uppercase text-center md:text-left">
                © {year} AL ARBAB TRAVEL AND TOURS Travel &amp; Tours · All Rights Reserved.
              </p>
              <p className="text-[9px] font-bold text-white/30 uppercase tracking-widest text-center md:text-left">
                IATA Authorized Agent · AirLinks Partner Network · Islamabad
              </p>
            </div>

            <div className="flex items-center gap-5 text-[9px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-white/70 transition-colors">
              <span>Privacy Policy</span>
              <div className="h-3 w-px bg-white/20" />
              <span>Terms of Service</span>
              <div className="h-3 w-px bg-white/20" />
              <span>Sitemap</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

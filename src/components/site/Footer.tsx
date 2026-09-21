import { Link } from "@tanstack/react-router";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Award,
  ShieldCheck,
  Globe,
  Headphones,
} from "lucide-react";
import { TicketPlanLogo } from "./TicketPlanLogo";
import { COMPANY } from "@/data/company";

const TRUST_METRICS = [
  { icon: Award, title: "IATA Authorized Agent", desc: "Official accredited travel & ticketing consultant" },
  { icon: ShieldCheck, title: "98% Visa Success Rate", desc: "Schengen, UK, USA, Canada & Australia experts" },
  { icon: Globe, title: "50+ Global Destinations", desc: "Worldwide holiday packages & visa guidance" },
  { icon: Headphones, title: "24/7 Dedicated Support", desc: "Direct Islamabad desk & WhatsApp helpline" },
];

const QUICK_LINKS = [
  { name: "Visa Consultancy", to: "/visa-services" },
  { name: "Umrah Packages 2026", to: "/umrah" },
  { name: "Air Ticketing", to: "/air-ticketing" },
  { name: "Hotel Bookings", to: "/hotel-booking" },
  { name: "Partner Airlines", to: "/partner-airlines" },
  { name: "About Us", to: "/about" },
  { name: "Contact Us", to: "/contact" },
];

const TOP_DESTINATIONS = [
  { name: "Thailand", flag: "🇹🇭", to: "/countries/south-asia/thailand", note: "Bangkok & Phuket" },
  { name: "Malaysia", flag: "🇲🇾", to: "/countries/south-asia/malaysia", note: "Kuala Lumpur" },
  { name: "Indonesia", flag: "🇮🇩", to: "/countries/south-asia/indonesia", note: "Bali Island" },
  { name: "Singapore", flag: "🇸🇬", to: "/countries/south-asia/singapore", note: "City Tour" },
  { name: "Nepal", flag: "🇳🇵", to: "/countries/south-asia/nepal", note: "Kathmandu" },
  { name: "Europe & Schengen", flag: "🇪🇺", to: "/countries/schengen/italy", note: "29 EU Nations" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#0D47A1] text-white pt-14 pb-8 border-t border-[#08357a]">
      {/* Background radial highlight & subtle golden gradient line */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_55%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F9B319]/40 to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Top Trust Badges Strip (Equal 4 Columns) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-12 border-b border-white/10">
          {TRUST_METRICS.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F9B319]/15 text-[#F9B319] border border-[#F9B319]/25 shadow-sm">
                <item.icon size={20} strokeWidth={2.2} />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-black text-white tracking-tight leading-tight truncate">
                  {item.title}
                </span>
                <span className="text-[10px] text-white/65 font-medium mt-0.5 leading-snug line-clamp-1">
                  {item.desc}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Main Footer Columns (Balanced 12-Column Grid: 4 + 2 + 3 + 3 = 12) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 py-12 border-b border-white/10">
          {/* ── Col 1: Brand Info & Socials (Span 4) ── */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-block group">
              <TicketPlanLogo light={true} />
            </Link>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed max-w-sm">
              Pakistan's No.1 travel agency &amp; world-class visa consultancy. IATA-accredited experts for Schengen, USA, UK, Canada, Australia visas &amp; Umrah packages.
            </p>

            {/* Authority Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {["IATA Authorized", "15+ Years Trust", "98% Approval Rate", "Islamabad Blue Area"].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/10 text-white/90 border border-white/15 cursor-default"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Follow Us Social Links */}
            <div className="space-y-2 pt-2">
              <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold block">
                Connect With Us
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={COMPANY.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-[#F9B319] hover:text-[#0D47A1] text-white transition-all duration-200 hover:scale-105"
                >
                  <Facebook size={15} />
                </a>
                <a
                  href={COMPANY.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-[#F9B319] hover:text-[#0D47A1] text-white transition-all duration-200 hover:scale-105"
                >
                  <Instagram size={15} />
                </a>
                <a
                  href={COMPANY.socials.twitter}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-[#F9B319] hover:text-[#0D47A1] text-white transition-all duration-200 hover:scale-105"
                >
                  <Twitter size={15} />
                </a>
                <a
                  href={COMPANY.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-[#F9B319] hover:text-[#0D47A1] text-white transition-all duration-200 hover:scale-105"
                >
                  <Linkedin size={15} />
                </a>
              </div>
            </div>
          </div>

          {/* ── Col 2: Quick Links (Span 2) ── */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-black uppercase tracking-wider text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-white/80 hover:text-[#F9B319] transition-colors inline-block whitespace-nowrap"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Top Destinations (Span 3) ── */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white mb-4">
              Top Destinations
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              {TOP_DESTINATIONS.map((dest) => (
                <li key={dest.name}>
                  <Link
                    to={dest.to}
                    className="group flex items-center gap-2.5 text-white/80 hover:text-[#F9B319] transition-colors"
                  >
                    <span className="text-sm shrink-0">{dest.flag}</span>
                    <span className="font-semibold text-white/90 group-hover:text-[#F9B319] transition-colors whitespace-nowrap">
                      {dest.name}
                    </span>
                    <span className="text-[10px] text-white/45 hidden sm:inline whitespace-nowrap">
                      ({dest.note})
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Contact & Head Office (Span 3) ── */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-white mb-4">
              Contact &amp; Head Office
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm font-medium">
              {/* Helplines */}
              <li className="flex items-start gap-3 text-white/85">
                <Phone size={16} className="text-[#F9B319] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-white/50 font-bold">
                    Helpline &amp; Landline
                  </span>
                  <div className="flex flex-wrap items-center gap-2 mt-0.5">
                    <a href={`tel:${COMPANY.mobile}`} className="hover:text-[#F9B319] transition-colors font-bold">
                      {COMPANY.mobile}
                    </a>
                    <span className="text-white/30">|</span>
                    <a href={`tel:${COMPANY.landline.replace(/\D/g, "")}`} className="hover:text-[#F9B319] transition-colors font-bold">
                      {COMPANY.landline}
                    </a>
                  </div>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-start gap-3 text-white/85">
                <Mail size={16} className="text-[#F9B319] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-white/50 font-bold">
                    Email Inquiries
                  </span>
                  <a href={`mailto:${COMPANY.email}`} className="hover:text-[#F9B319] transition-colors font-bold mt-0.5 break-all">
                    {COMPANY.email}
                  </a>
                </div>
              </li>

              {/* Address */}
              <li className="flex items-start gap-3 text-white/85">
                <MapPin size={16} className="text-[#F9B319] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-white/50 font-bold">
                    Blue Area Office
                  </span>
                  <span className="leading-relaxed text-white/80 mt-0.5">
                    {COMPANY.address}
                  </span>
                </div>
              </li>

              {/* Timing */}
              <li className="flex items-start gap-3 text-white/85">
                <Clock size={16} className="text-[#F9B319] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-white/50 font-bold">
                    Office Hours
                  </span>
                  <span className="text-white/80 mt-0.5">
                    Monday – Saturday: 10:00 AM – 7:00 PM
                  </span>
                </div>
              </li>
            </ul>

            {/* Instant WhatsApp CTA Button */}
            <div className="pt-2">
              <a
                href={`https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2.5 text-xs font-bold shadow-lg shadow-green-950/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageSquare size={16} />
                <span>Instant WhatsApp Inquiry</span>
              </a>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar: Copyright & Terms ── */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <p>© {currentYear} {COMPANY.name}. All Rights Reserved.</p>
            <span className="hidden sm:inline text-white/30">·</span>
            <p className="text-[11px] text-white/50">IATA Authorized Agent · Islamabad, Pakistan</p>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-[#F9B319] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/20">|</span>
            <Link to="/terms" className="hover:text-[#F9B319] transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

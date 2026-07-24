import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CountryCard } from "@/components/site/CountryCard";
import { TestimonialCard } from "@/components/site/TestimonialCard";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { ContactForm } from "@/components/site/ContactForm";
import { Reveal } from "@/components/site/Reveal";
import { DESTINATIONS } from "@/data/destinations";
import { COMPANY } from "@/data/company";
import { FAQS } from "@/data/faqs";
import { TESTIMONIALS } from "@/data/testimonials";
import { AirlinesSection } from "@/components/site/AirlinesSection";
import {
  Plane,
  Hotel,
  ShieldCheck,
  Globe2,
  GraduationCap,
  Briefcase,
  Users,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Award,
  Clock4,
  ThumbsUp,
  FileCheck2,
  MessageSquare,
  Stamp,
  Facebook,
  Shield,
  Moon,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AL ARBAB TRAVEL AND TOURS — Pakistan's No.1 Travel Agency & Best Visa Consultant 2026 | Islamabad" },
      {
        name: "description",
        content:
          "AL ARBAB TRAVEL AND TOURS is Pakistan's #1 travel agency & best visa consultant in Islamabad. IATA-accredited experts for Schengen, USA, UK, Canada & Australia visas. Cheap flights, Umrah packages, hotel bookings & travel insurance. 98% approval rate. Blue Area, Islamabad.",
      },
      {
        name: "keywords",
        content:
          "best travel agency in pakistan 2026, pakistan no 1 travel agency, top travel agency islamabad, #1 visa consultant pakistan, best visa agency islamabad blue area, top tour operator pakistan, cheap flights from pakistan, schengen visa consultant islamabad, uk visa agent islamabad, usa visa consultant pakistan, canada immigration consultant islamabad, corporate travel agency pakistan, reliable travel agents in pakistan, flight booking pakistan, hotel reservation islamabad, best travel and tours pakistan, top immigration consultant pakistan, IATA accredited travel agent islamabad, umrah packages from pakistan 2026, cheap umrah packages islamabad, travel insurance islamabad, passport services islamabad, world best travel agency, international visa consultant, visa success rate pakistan, affordable travel agency islamabad, online travel booking pakistan, multi city flights islamabad, business class deals pakistan, economy flights islamabad to london, islamabad to dubai cheap tickets, best visa approval rate pakistan, trusted visa consultant near me islamabad",
      },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
      { name: "author", content: "AL ARBAB TRAVEL AND TOURS" },
      { name: "geo.region", content: "PK-IS" },
      { name: "geo.placename", content: "Islamabad, Pakistan" },
      { name: "geo.position", content: "33.7135;73.0673" },
      { name: "ICBM", content: "33.7135, 73.0673" },
      { name: "rating", content: "general" },
      { name: "revisit-after", content: "3 days" },
      { name: "language", content: "English" },
      { name: "coverage", content: "Worldwide" },
      { name: "distribution", content: "Global" },
      {
        property: "og:title",
        content: "AL ARBAB TRAVEL AND TOURS — Pakistan's No.1 Travel Agency & Best Visa Consultant 2026",
      },
      {
        property: "og:description",
        content:
          "IATA-accredited travel agency in Islamabad. Expert Schengen, USA, UK, Canada & Australia visa consultancy. Cheap flights, Umrah packages & hotel bookings. 98% approval rate.",
      },
      { property: "og:image", content: "https://alarbabtravels.pk/src/assets/hero-travel.jpg" },
      { property: "og:url", content: "https://alarbabtravels.pk/" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_PK" },
      { property: "og:site_name", content: "AL ARBAB TRAVEL AND TOURS — Pakistan's No.1 Travel Agency" },
      {
        name: "twitter:card", content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "AL ARBAB TRAVEL AND TOURS | Pakistan's #1 Travel Agency & Visa Consultant 2026",
      },
      {
        name: "twitter:description",
        content:
          "IATA-accredited. 98% visa approval rate. Schengen, UK, USA, Canada & Australia visas from Islamabad. Cheap flights & Umrah packages.",
      },
      { name: "twitter:image", content: "https://alarbabtravels.pk/src/assets/hero-travel.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://alarbabtravels.pk/" },
      { rel: "alternate", hrefLang: "en-PK", href: "https://alarbabtravels.pk/" },
      { rel: "alternate", hrefLang: "en", href: "https://alarbabtravels.pk/" },
      { rel: "alternate", hrefLang: "x-default", href: "https://alarbabtravels.pk/" },
    ],
  }),
  component: Home,
});

const PROCESS = [
  {
    icon: MessageSquare,
    title: "Free Consultation",
    desc: "Tell us your travel goal and we'll map the right visa pathway.",
  },
  {
    icon: FileCheck2,
    title: "Document Prep",
    desc: "We curate, review and validate every required document.",
  },
  {
    icon: Stamp,
    title: "Application & Submission",
    desc: "Forms, appointments and submission handled end-to-end.",
  },
  {
    icon: ThumbsUp,
    title: "Approval & Travel",
    desc: "Receive your visa, then we handle tickets, hotels and insurance.",
  },
];

function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "AL ARBAB TRAVEL AND TOURS",
    url: "https://alarbabtravels.pk/",
    logo: "https://alarbabtravels.pk/logo.png",
    description: "Top Travel Agency & Visa Consultant in Pakistan.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Blue Area",
      addressLocality: "Islamabad",
      addressCountry: "PK",
    },
    telephone: COMPANY.phone,
    email: COMPANY.email,
  };

  const ALL_SERVICES = [
    { icon: Plane, title: "Airline Tickets", desc: "IATA-authorized ticketing with real-time fares from 22+ global carriers.", to: "/air-ticketing", color: "from-blue-500/10 to-blue-500/5", iconColor: "text-blue-600" },
    { icon: Stamp, title: "Visa Consultancy", desc: "Expert visa assistance for 50+ countries with a 98% approval rate.", to: "/visa-services", color: "from-[#0D47A1]/10 to-[#0D47A1]/5", iconColor: "text-[#0D47A1]" },
    { icon: Moon, title: "Umrah Packages", desc: "Economy to premium Umrah packages with flights, hotel & transfers.", to: "/umrah", color: "from-amber-500/10 to-amber-500/5", iconColor: "text-amber-600" },
    { icon: Hotel, title: "Hotel Booking", desc: "Luxury and budget stays from trusted global partners. Best rates.", to: "/hotel-booking", color: "from-emerald-500/10 to-emerald-500/5", iconColor: "text-emerald-600" },
    { icon: Globe2, title: "Schengen Visa", desc: "Single visa to explore 29 European countries seamlessly.", to: "/visa-services", color: "from-sky-500/10 to-sky-500/5", iconColor: "text-sky-600" },
    { icon: Shield, title: "Travel Insurance", desc: "Schengen-compliant medical & trip cancellation cover for every journey.", to: "/travel-insurance", color: "from-violet-500/10 to-violet-500/5", iconColor: "text-violet-600" },
    { icon: GraduationCap, title: "Student Visa", desc: "Study abroad support — UK, USA, Canada, Australia & more.", to: "/visa-services", color: "from-rose-500/10 to-rose-500/5", iconColor: "text-rose-600" },
    { icon: Briefcase, title: "Business Visa", desc: "Business and corporate travel visas, fast and reliable.", to: "/visa-services", color: "from-orange-500/10 to-orange-500/5", iconColor: "text-orange-600" },
  ];

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
      <Hero />

      {/* ═══════════════════════════════════════════════════
          TRUST BAR — Instant credibility strip
      ═══════════════════════════════════════════════════ */}
      <section className="relative z-20 -mt-6 md:-mt-10">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal>
            <div className="rounded-[2rem] bg-white border border-border/40 shadow-[0_20px_60px_rgba(0,0,0,0.06)] p-6 md:p-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
                {[
                  { value: "15+", label: "Years Experience", icon: Award, color: "text-[#0D47A1]" },
                  { value: "98%", label: "Visa Success Rate", icon: ShieldCheck, color: "text-emerald-600" },
                  { value: "20K+", label: "Happy Travelers", icon: Users, color: "text-[#F7941D]" },
                  { value: "50+", label: "Countries Served", icon: Globe2, color: "text-[#29ABE2]" },
                  { value: "IATA", label: "Authorized Agent", icon: Plane, color: "text-[#0D47A1]" },
                ].map((stat) => (
                  <div key={stat.label} className="group flex items-center gap-4 p-3 rounded-2xl hover:bg-muted/30 transition-colors cursor-default">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted/50 ${stat.color} group-hover:scale-110 transition-transform`}>
                      <stat.icon size={22} strokeWidth={2.5} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-2xl font-black tracking-tight text-foreground leading-none">{stat.value}</p>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-1 truncate">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          OUR SERVICES — Unified grid (Visa + Travel merged)
      ═══════════════════════════════════════════════════ */}
      <section className="container-px mx-auto max-w-7xl py-24 md:py-32">
        <SectionHeader
          eyebrow="Our Services"
          title="Everything You Need, Under One Roof"
          subtitle="From visa consultancy to airline tickets, hotels, and insurance — we are your complete travel partner."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ALL_SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.04}>
              <Link to={s.to} className="group block h-full">
                <div className="relative h-full overflow-hidden rounded-[2rem] bg-white p-8 border border-border/40 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:border-[#0D47A1]/20 hover:-translate-y-2">
                  <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-[#0D47A1] opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative z-10">
                    <div className={`mb-8 inline-flex h-16 w-16 items-center justify-center rounded-[1.5rem] bg-muted/30 ${s.iconColor} transition-all duration-500 group-hover:scale-110 group-hover:bg-[#0D47A1] group-hover:text-white group-hover:rotate-6`}>
                      <s.icon size={28} strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-black tracking-tight text-foreground">{s.title}</h3>
                    <p className="mt-3 text-[13px] font-medium leading-relaxed text-muted-foreground line-clamp-2">{s.desc}</p>
                    <div className="mt-6 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#0D47A1] opacity-0 -translate-x-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                      Learn More <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <AirlinesSection />

      {/* ═══════════════════════════════════════════════════
          DESTINATIONS
      ═══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-white py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--primary-glow)_0%,_transparent_40%)] opacity-[0.05]" />
        <div className="container-px relative mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Destinations"
            title="Explore Our Iconic Destinations"
            subtitle="Premium visa consultancy and curated travel experiences for the world's most sought-after locations."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {DESTINATIONS.slice(0, 8).map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.04}>
                <CountryCard
                  slug={c.slug}
                  name={c.name}
                  short={c.shortDesc}
                  image={c.image}
                  accent="Visa Assistance"
                />
              </Reveal>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link
              to="/countries"
              className="inline-flex items-center gap-3 rounded-full border-2 border-[#0D47A1]/20 bg-background px-8 py-4 text-sm font-black text-[#0D47A1] transition-all hover:bg-[#F7941D] hover:text-white hover:border-[#F7941D] shadow-sm hover:shadow-[0_10px_25px_rgba(247,148,29,0.3)]"
            >
              Browse All Destinations <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          HOW IT WORKS — Connected Timeline
      ═══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0D47A1] to-[#29ABE2] py-24 md:py-32 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.08)_0%,_transparent_60%)]" />
        <div className="container-px relative mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 border border-white/20 mb-6 text-[10px] font-black uppercase tracking-[0.3em] text-white/80">
                How It Works
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-6">
                Four Simple Steps to <span className="text-[#F7941D] italic">Your Visa</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base md:text-lg text-white/60 font-medium max-w-2xl mx-auto">
                We handle the complexity so you can focus on the adventure ahead.
              </p>
            </Reveal>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden xl:block absolute top-20 left-[12%] right-[12%] h-[2px] bg-white/15" />
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {PROCESS.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.1}>
                  <div className="relative group h-full">
                    {/* Step number circle on the line */}
                    <div className="hidden xl:flex absolute -top-[4px] left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-[#F7941D] text-white text-sm font-black shadow-[0_0_20px_rgba(247,148,29,0.5)] border-4 border-[#0D47A1] z-10 group-hover:scale-125 transition-transform">
                      {i + 1}
                    </div>
                    <div className="h-full rounded-[2.5rem] bg-white/[0.07] backdrop-blur-sm border border-white/10 p-10 pt-16 xl:pt-14 transition-all duration-500 hover:bg-white/[0.12] hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)]">
                      <div className="xl:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#F7941D] text-white text-sm font-black shadow-lg mb-6">
                        {i + 1}
                      </div>
                      <div className="h-14 w-14 rounded-2xl bg-white/10 text-[#F7941D] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-white/20 transition-all">
                        <p.icon size={28} strokeWidth={2} />
                      </div>
                      <h3 className="text-xl font-black tracking-tight text-white mb-4">{p.title}</h3>
                      <p className="text-sm text-white/50 font-medium leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          WHY CHOOSE US — Split layout with stats
      ═══════════════════════════════════════════════════ */}
      <section className="container-px mx-auto max-w-7xl py-24 md:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeader
              center={false}
              eyebrow="Why Choose Us"
              title="A Premium Travel Consultancy You Can Trust"
              subtitle="We combine deep embassy expertise with a personalized, transparent process to ensure your application stands out from the rest."
            />
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  icon: Award,
                  t: "98% Success Rate",
                  d: "Proven track record across major embassies globally.",
                  color: "from-primary/10 to-transparent",
                  iconColor: "text-primary"
                },
                { 
                  icon: Clock4, 
                  t: "Express Processing", 
                  d: "Visa documentation prepared within 48-72 hours.",
                  color: "from-emerald-500/10 to-transparent",
                  iconColor: "text-emerald-600"
                },
                {
                  icon: ShieldCheck,
                  t: "Authorized GDS",
                  d: "Direct access to real-time global flight inventory.",
                  color: "from-blue-500/10 to-transparent",
                  iconColor: "text-blue-600"
                },
                {
                  icon: Sparkles,
                  t: "Expert Officers",
                  d: "Dedicated visa consultants for every client case.",
                  color: "from-amber-500/10 to-transparent",
                  iconColor: "text-amber-600"
                },
              ].map((b) => (
                <div
                  key={b.t}
                  className="group relative rounded-[2rem] border border-border/40 bg-white p-8 transition-all duration-500 hover:shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:border-primary/20 overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${b.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <span className={`relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-muted/50 ${b.iconColor} transition-all duration-500 group-hover:bg-white group-hover:scale-110`}>
                    <b.icon size={22} strokeWidth={2.5} />
                  </span>
                  <p className="relative mt-6 text-lg font-black text-foreground tracking-tight">{b.t}</p>
                  <p className="relative mt-2 text-[13px] text-muted-foreground font-medium leading-relaxed">{b.d}</p>
                </div>
              ))}
            </div>
          </div>
          <Reveal>
            <div className="relative group">
              <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
              <div className="relative rounded-[2.5rem] border border-border/50 bg-card/80 backdrop-blur-xl p-8 sm:p-12 shadow-elevated overflow-hidden">
                <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
                
                <div className="flex items-center justify-between relative z-10">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60">
                      Average Visa Approval
                    </p>
                    <p className="mt-2 text-6xl sm:text-7xl font-black gradient-text tracking-tighter">98%</p>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-accent blur-xl opacity-30 animate-pulse" />
                    <span className="relative inline-flex h-16 w-16 items-center justify-center rounded-[1.25rem] bg-gradient-to-br from-accent to-accent-glow text-accent-foreground shadow-glow group-hover:scale-110 transition-transform duration-500">
                      <Award size={32} strokeWidth={2.5} />
                    </span>
                  </div>
                </div>

                <div className="mt-10 grid grid-cols-3 gap-4 text-center relative z-10">
                  {[
                    { n: "15+", l: "Years Exp" },
                    { n: "20K+", l: "Travelers" },
                    { n: "50+", l: "Countries" },
                  ].map((s: { n: string; l: string }) => (
                    <div key={s.l} className="rounded-2xl bg-secondary/50 p-4 border border-border/50 hover:border-primary/20 transition-colors">
                      <p className="text-2xl font-black text-foreground">{s.n}</p>
                      <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{s.l}</p>
                    </div>
                  ))}
                </div>

                <p className="mt-10 text-[15px] text-muted-foreground font-medium leading-relaxed relative z-10 border-t border-border/50 pt-8">
                  Backed by a meticulous review process and embassy-aligned documentation, our expert case
                  officers maximize approval chances for every single application.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════════════════ */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader eyebrow="Testimonials" title="Loved by travelers across Pakistan" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.slice(0, 6).map((t, i) => (
              <Reveal key={t.author} delay={i * 0.05}>
                <TestimonialCard {...t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════════ */}
      <section className="container-px mx-auto max-w-5xl py-20 md:py-32">
        <SectionHeader eyebrow="FAQ" title="Your Travel Questions, Resolved" subtitle="Everything you need to know about our visa processes and travel services." />
        <div className="mt-12 p-8 md:p-12 rounded-[3.5rem] border border-border/40 bg-white shadow-xl">
          <FAQAccordion items={FAQS.slice(0, 5)} />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CONTACT
      ═══════════════════════════════════════════════════ */}
      <section className="container-px mx-auto max-w-7xl pb-20">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader
              center={false}
              eyebrow="Contact"
              title="Let's plan your journey"
              subtitle="Drop us a message and our team will respond within 1 business hour."
            />
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPin className="text-primary mt-0.5" size={18} /> Blue Area, Islamabad, Pakistan
              </li>
              <li className="flex gap-3">
                <Phone className="text-primary mt-0.5" size={18} />{" "}
                <a className="hover:text-primary" href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}>
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="text-primary mt-0.5" size={18} />{" "}
                <a className="hover:text-primary" href={`mailto:${COMPANY.email}`}>
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Facebook className="text-primary mt-0.5" size={18} />{" "}
                <a
                  className="hover:text-primary"
                  href={COMPANY.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook Page
                </a>
              </li>
            </ul>
            <div className="mt-6 overflow-hidden rounded-2xl border border-border shadow-soft">
              <iframe
                title="Office location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.46788506085!2d73.067341!3d33.7135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf9ce9999999%3A0x9999999999999999!2sAir%20Connection%20Travel%20%26%20Tours!5e0!3m2!1sen!2spk!4v1717616428789!5m2!1sen!2spk"
                loading="lazy"
                className="h-64 w-full"
              />
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

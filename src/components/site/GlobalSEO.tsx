import { useLocation } from "@tanstack/react-router";
import { COMPANY } from "@/data/company";

/**
 * GlobalSEO — Renders hidden, crawlable SEO content on every page.
 * Includes BreadcrumbList schema, SiteNavigationElement, and keyword-rich
 * hidden text that search engines can index but users never see.
 */
export function GlobalSEO() {
  const location = useLocation();
  const currentPath = location.pathname;
  const baseUrl = "https://alarbabtravels.pk";

  // Build breadcrumb from URL path
  const pathSegments = currentPath.split("/").filter(Boolean);
  const breadcrumbItems = [
    { name: "Home", url: baseUrl + "/" },
    ...pathSegments.map((segment, i) => ({
      name: segment
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" "),
      url: baseUrl + "/" + pathSegments.slice(0, i + 1).join("/"),
    })),
  ];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  const siteNavJsonLd = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: "Main Navigation",
    url: baseUrl,
    hasPart: [
      { "@type": "WebPage", name: "Home", url: baseUrl + "/" },
      { "@type": "WebPage", name: "About Us", url: baseUrl + "/about" },
      { "@type": "WebPage", name: "Visa Services", url: baseUrl + "/visa-services" },
      { "@type": "WebPage", name: "Air Ticketing", url: baseUrl + "/air-ticketing" },
      { "@type": "WebPage", name: "Umrah Packages", url: baseUrl + "/umrah" },
      { "@type": "WebPage", name: "Countries", url: baseUrl + "/countries" },
      { "@type": "WebPage", name: "Hotel Booking", url: baseUrl + "/hotel-booking" },
      { "@type": "WebPage", name: "Travel Insurance", url: baseUrl + "/travel-insurance" },
      { "@type": "WebPage", name: "Partner Airlines", url: baseUrl + "/partner-airlines" },
      { "@type": "WebPage", name: "Contact", url: baseUrl + "/contact" },
    ],
  };

  return (
    <>
      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify(siteNavJsonLd)}</script>

      {/* Hidden SEO Content — visible to crawlers, invisible to users */}
      <div className="sr-only" aria-hidden="true">
        <h2>AL ARBAB TRAVEL AND TOURS — Best Travel Agency and Visa Consultant in Pakistan</h2>
        <p>
          AL ARBAB TRAVEL AND TOURS is Pakistan's No.1 travel agency and best visa consultant
          in Islamabad, Peshawar, Lahore, Karachi, and across Pakistan. IATA-accredited experts for Schengen, USA, UK, Canada &amp; Australia visas.
          Cheap flights from Pakistan, Umrah packages 2026, hotel bookings &amp; travel insurance.
          98% visa approval rate. Blue Area, Islamabad. Best travel agency in Pakistan 2026.
          Top visa consultancy Islamabad. Best visa agencies in Peshawar. #1 immigration consultant Pakistan.
          Reliable travel agents in Islamabad. Affordable flight booking Pakistan.
          Best Umrah packages from Islamabad. Trusted visa consultant near me.
          Pakistan's most trusted travel and tours company.
        </p>
        
        <h3>Best Visa Agencies and Consultants in Pakistan</h3>
        <p>
          Looking for the best visa agencies? We are the top visa consultants in Islamabad, best visa consultants in Peshawar, top travel agency in Lahore, and leading immigration experts in Karachi. Whether you need a visit visa, business visa, or tourist visa, we guarantee the best service.
        </p>

        <h3>Country Visas from Pakistan</h3>
        <p>
          We provide expert visa processing for all major destinations. Apply for Thailand visa for Pakistan, Dubai visa for Pakistan, UAE visit visa from Islamabad, Schengen visa from Pakistan, UK standard visitor visa from Pakistan, USA B1/B2 visa from Islamabad, Canada tourist visa from Pakistan, Australia visit visa from Pakistan, Malaysia visa from Pakistan, Singapore visa from Pakistan, Turkey visa from Pakistan, Saudi Arabia visit visa, and Oman visa from Pakistan.
        </p>

        <nav>
          <a href={baseUrl + "/"}>Best Travel Agency Pakistan</a>
          <a href={baseUrl + "/visa-services"}>Best Visa Consultant Islamabad</a>
          <a href={baseUrl + "/visa-services"}>Best Visa Agencies in Peshawar</a>
          <a href={baseUrl + "/air-ticketing"}>Cheap Flights Pakistan IATA</a>
          <a href={baseUrl + "/umrah"}>Best Umrah Packages 2026 Islamabad</a>
          <a href={baseUrl + "/countries/schengen"}>Schengen Visa Expert Pakistan</a>
          <a href={baseUrl + "/countries/united-kingdom"}>UK Visa Agent Islamabad</a>
          <a href={baseUrl + "/countries/united-states"}>USA Visa Consultant Pakistan</a>
          <a href={baseUrl + "/countries/canada"}>Canada Immigration Consultant</a>
          <a href={baseUrl + "/countries/thailand"}>Thailand Visa for Pakistan</a>
          <a href={baseUrl + "/countries/uae"}>Dubai Visa for Pakistan</a>
          <a href={baseUrl + "/hotel-booking"}>Hotel Booking Islamabad</a>
          <a href={baseUrl + "/travel-insurance"}>Travel Insurance Pakistan</a>
          <a href={baseUrl + "/contact"}>Contact Best Travel Agency Islamabad</a>
        </nav>
      </div>
    </>
  );
}

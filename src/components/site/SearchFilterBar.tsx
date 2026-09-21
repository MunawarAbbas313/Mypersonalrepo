import React, { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { MapPin, Calendar, Users, Search, ChevronDown, Sparkles } from "lucide-react";

const QUICK_TRENDS = [
  { label: "Thailand 🇹🇭", query: "Thailand", to: "/countries/south-asia/thailand" },
  { label: "Malaysia 🇲🇾", query: "Malaysia", to: "/countries/south-asia/malaysia" },
  { label: "Indonesia 🇮🇩", query: "Indonesia", to: "/countries/south-asia/indonesia" },
  { label: "Umrah Packages 🕋", query: "Umrah", to: "/umrah" },
  { label: "Nepal 🇳🇵", query: "Nepal", to: "/countries/south-asia/nepal" },
  { label: "Dubai 🇦🇪", query: "Dubai", to: "/countries/middle-east/united-arab-emirates" },
];

export function SearchFilterBar() {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [travelers, setTravelers] = useState("2 Adults, 1 Child");
  const [showTravelersDropdown, setShowTravelersDropdown] = useState(false);

  const travelerOptions = [
    "1 Adult",
    "2 Adults",
    "2 Adults, 1 Child",
    "2 Adults, 2 Children",
    "Group (4+ Travelers)",
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const destLower = destination.trim().toLowerCase();
    if (destLower.includes("thai")) {
      navigate({ to: "/countries/south-asia/thailand" });
    } else if (destLower.includes("malay")) {
      navigate({ to: "/countries/south-asia/malaysia" });
    } else if (destLower.includes("indo") || destLower.includes("bali")) {
      navigate({ to: "/countries/south-asia/indonesia" });
    } else if (destLower.includes("sing")) {
      navigate({ to: "/countries/south-asia/singapore" });
    } else if (destLower.includes("nepal")) {
      navigate({ to: "/countries/south-asia/nepal" });
    } else if (destLower.includes("dubai") || destLower.includes("uae") || destLower.includes("emirates")) {
      navigate({ to: "/countries/middle-east/united-arab-emirates" });
    } else if (destLower.includes("umrah") || destLower.includes("makkah") || destLower.includes("madinah")) {
      navigate({ to: "/umrah" });
    } else if (destLower.includes("turk")) {
      navigate({ to: "/countries/central-asia/turkey" });
    } else if (destLower.includes("usa") || destLower.includes("america") || destLower.includes("states")) {
      navigate({ to: "/countries/united-states" });
    } else if (destLower.includes("canada")) {
      navigate({ to: "/countries/canada" });
    } else if (destLower.includes("schengen") || destLower.includes("europe") || destLower.includes("italy") || destLower.includes("france")) {
      navigate({ to: "/countries/schengen/italy" });
    } else {
      navigate({ to: "/countries" });
    }
  };

  return (
    <div className="relative z-30 mx-auto max-w-6xl px-4 sm:px-6">
      {/* ── Quick Trending Chips ── */}
      <div className="hidden sm:flex items-center gap-2 mb-3.5 justify-center text-xs font-semibold text-white/90 drop-shadow">
        <span className="flex items-center gap-1.5 text-amber-300 font-extrabold uppercase tracking-wider">
          <Sparkles size={14} /> Trending:
        </span>
        {QUICK_TRENDS.map((chip) => (
          <button
            key={chip.label}
            type="button"
            onClick={() => setDestination(chip.query)}
            className="rounded-full bg-black/45 hover:bg-[#702D88] text-white/95 hover:text-white px-3.5 py-1 text-xs font-bold border border-white/25 backdrop-blur-md transition-all duration-200 hover:scale-105 shadow-sm"
          >
            {chip.label}
          </button>
        ))}
      </div>

      {/* ── Main Booking & Search Card ── */}
      <form
        onSubmit={handleSearch}
        className="rounded-[2.2rem] bg-white p-2.5 sm:p-3 shadow-[0_25px_70px_rgba(76,29,149,0.18)] border border-purple-100/80 ring-1 ring-black/5"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-2 items-center w-full">
          {/* 1. Where to? (Span 4 out of 12) */}
          <div className="lg:col-span-4 flex items-center gap-3 px-4 py-2.5 hover:bg-purple-50/50 rounded-2xl transition-colors border-b sm:border-b-0 sm:border-r border-gray-100">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-50 text-[#702D88]">
              <MapPin size={18} />
            </div>
            <div className="flex-1 min-w-0">
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-wider">
                Where to?
              </label>
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Search destination"
                className="w-full bg-transparent text-sm font-bold text-gray-800 placeholder:text-gray-400 focus:outline-none"
              />
            </div>
          </div>

          {/* 2. Check In (Span 2 out of 12) */}
          <div className="lg:col-span-2 flex items-center gap-2.5 px-3 py-2.5 hover:bg-purple-50/50 rounded-2xl transition-colors border-b sm:border-b-0 lg:border-r border-gray-100">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-50 text-[#702D88]">
              <Calendar size={18} />
            </div>
            <div className="flex-1 min-w-0">
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-wider">
                Check In
              </label>
              <input
                type="text"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => {
                  if (!e.target.value) e.target.type = "text";
                }}
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                placeholder="Select date ⌵"
                className="w-full bg-transparent text-xs sm:text-sm font-bold text-gray-800 placeholder:text-gray-400 focus:outline-none cursor-pointer"
              />
            </div>
          </div>

          {/* 3. Check Out (Span 2 out of 12) */}
          <div className="lg:col-span-2 flex items-center gap-2.5 px-3 py-2.5 hover:bg-purple-50/50 rounded-2xl transition-colors border-b sm:border-b-0 sm:border-r border-gray-100">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-50 text-[#702D88]">
              <Calendar size={18} />
            </div>
            <div className="flex-1 min-w-0">
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-wider">
                Check Out
              </label>
              <input
                type="text"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => {
                  if (!e.target.value) e.target.type = "text";
                }}
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                placeholder="Select date ⌵"
                className="w-full bg-transparent text-xs sm:text-sm font-bold text-gray-800 placeholder:text-gray-400 focus:outline-none cursor-pointer"
              />
            </div>
          </div>

          {/* 4. Travelers (Span 2 out of 12) */}
          <div className="relative lg:col-span-2 flex items-center gap-2.5 px-3 py-2.5 hover:bg-purple-50/50 rounded-2xl transition-colors">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-50 text-[#702D88]">
              <Users size={18} />
            </div>
            <div
              className="flex-1 min-w-0 cursor-pointer"
              onClick={() => setShowTravelersDropdown(!showTravelersDropdown)}
            >
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-wider">
                Travelers
              </label>
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm font-bold text-gray-800 truncate">
                  {travelers}
                </span>
                <ChevronDown size={14} className="text-gray-400 ml-0.5 shrink-0" />
              </div>
            </div>

            {/* Dropdown Menu */}
            {showTravelersDropdown && (
              <div className="absolute left-0 top-full mt-2 w-56 rounded-2xl bg-white p-2 shadow-2xl border border-purple-100 z-50 animate-in fade-in zoom-in-95 duration-150">
                {travelerOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => {
                      setTravelers(opt);
                      setShowTravelersDropdown(false);
                    }}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                      travelers === opt
                        ? "bg-purple-50 text-[#702D88] font-black"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 5. Search Button (Span 2 out of 12) */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end px-1">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#702D88] to-[#581c87] hover:from-[#581c87] hover:to-[#3b0764] text-white py-3.5 px-6 text-sm font-black shadow-lg shadow-purple-950/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Search size={16} />
              <span>Search</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

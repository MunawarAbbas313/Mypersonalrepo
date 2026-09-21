import React from "react";
import { COMPANY } from "@/data/company";
import logoImg from "@/assets/logo.png";

interface TicketPlanLogoProps {
  className?: string;
  light?: boolean;
}

export function TicketPlanLogo({ className = "", light = false }: TicketPlanLogoProps) {
  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Brand Icon / Logo image */}
      <div
        className={`relative flex items-center justify-center shrink-0 ${
          light ? "p-1.5 rounded-xl bg-white/95 shadow-md border border-white/20" : ""
        }`}
      >
        <img
          src={logoImg}
          alt={COMPANY.name}
          className="h-10 sm:h-12 w-auto max-w-[130px] sm:max-w-[150px] object-contain filter drop-shadow-sm transition-transform duration-200"
          onError={(e) => {
            (e.currentTarget as HTMLElement).style.display = "none";
          }}
        />
      </div>

      <div className="flex flex-col leading-none">
        <span className="text-base sm:text-lg font-black tracking-tight text-[#F9B319] whitespace-nowrap">
          AL ARBAB <span className={light ? "text-white" : "text-[#004AAD]"}>TRAVEL &amp; TOURS</span>
        </span>
        <span
          className={`text-[8px] sm:text-[9px] font-black uppercase tracking-[0.25em] whitespace-nowrap mt-1 ${
            light ? "text-white/80" : "text-gray-500"
          }`}
        >
          ISLAMABAD, PAKISTAN
        </span>
      </div>
    </div>
  );
}

import { Phone, Sparkles, Zap, Flame, TicketPercent } from "lucide-react";
import { COMPANY } from "@/data/company";

export function TopBar() {
  return (
    <div className="relative border-b-0 overflow-hidden bg-gradient-to-r from-[#0D47A1] via-[#0D47A1] to-[#F7941D] text-[11px] py-2 transition-all duration-500 shadow-[0_4px_15px_rgba(13,71,161,0.2)]">
      {/* Animated background particles */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay"></div>
      
      <div className="container-px mx-auto flex max-w-[1400px] items-center justify-between relative z-10">
        
        {/* Urgent Call to Action */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1 rounded-full border border-white/30 text-white font-black uppercase tracking-widest shadow-inner">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span>
            </span>
            <span className="text-white drop-shadow-md">Live Agents Active</span>
          </div>
        </div>

        {/* Scrolling Ticker (Super Crazy Offers) */}
        <div className="flex-1 overflow-hidden relative mx-0 lg:mx-8 flex items-center">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-12 font-black uppercase tracking-[0.2em] text-white">
            <span className="inline-flex items-center gap-2">
              <Flame size={14} className="text-yellow-400 animate-pulse" /> 
              Hot Deal: 20% Off Dubai Visas!
            </span>
            <span className="inline-flex items-center gap-2 text-yellow-200">
              <Sparkles size={14} className="text-white" /> 
              UK Standard Visitor Visa - 98% Approval
            </span>
            <span className="inline-flex items-center gap-2">
              <TicketPercent size={14} className="text-red-300" /> 
              Flash Sale: Cheap Flights to Jeddah
            </span>
            <span className="inline-flex items-center gap-2 text-cyan-200">
              <Zap size={14} className="text-cyan-400 animate-bounce" /> 
              Apply Schengen Visa Now for Summer!
            </span>
            
            {/* Duplicated for seamless scrolling */}
            <span className="inline-flex items-center gap-2">
              <Flame size={14} className="text-yellow-400 animate-pulse" /> 
              Hot Deal: 20% Off Dubai Visas!
            </span>
            <span className="inline-flex items-center gap-2 text-yellow-200">
              <Sparkles size={14} className="text-white" /> 
              UK Standard Visitor Visa - 98% Approval
            </span>
            <span className="inline-flex items-center gap-2">
              <TicketPercent size={14} className="text-red-300" /> 
              Flash Sale: Cheap Flights to Jeddah
            </span>
            <span className="inline-flex items-center gap-2 text-cyan-200">
              <Zap size={14} className="text-cyan-400 animate-bounce" /> 
              Apply Schengen Visa Now for Summer!
            </span>
          </div>
        </div>

        {/* Contact Info (Always Visible) */}
        <div className="hidden md:flex items-center gap-3 bg-[#0D47A1]/80 backdrop-blur-md px-5 py-1.5 rounded-full border border-white/20 text-white font-black uppercase tracking-widest text-[11px]">
          <Phone size={12} className="text-white shrink-0" />
          <a
            href={`tel:${COMPANY.mobile}`}
            className="hover:text-[#F7941D] transition-colors drop-shadow-md"
          >
            {COMPANY.mobile}
          </a>
          <span className="text-white/40">|</span>
          <a
            href={`tel:${COMPANY.landline.replace(/\D/g, "")}`}
            className="hover:text-[#F7941D] transition-colors drop-shadow-md"
          >
            {COMPANY.landline}
          </a>
        </div>
      </div>
      
      {/* Styles for Marquee Animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    </div>
  );
}

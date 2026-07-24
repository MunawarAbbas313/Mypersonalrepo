import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

import { COMPANY } from "@/data/company";

export function ContactForm({ defaultSubject = "" }: { defaultSubject?: string }) {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const message = `*New Enquiry from Website*
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Destination: ${data.country || "Not specified"}

*Message:*
${data.message}`;

    const whatsappUrl = `https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setSent(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[20px] border border-[#E5E7EB] glass-modern p-8 md:p-12 shadow-[0_20px_50px_rgba(13,71,161,0.08)] relative overflow-hidden"
    >
      {/* Gradient Accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0D47A1] to-[#F7941D]" />
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Full Name" name="name" placeholder="Ahmad Khan" required autoComplete="name" />
        <Field label="Email Address" name="email" type="email" placeholder="you@email.com" required autoComplete="email" />
        <Field label="WhatsApp Number" name="phone" placeholder="+92 3XX XXXXXXX" required autoComplete="tel" />
        <Field
          label="Target Destination"
          name="country"
          placeholder="Schengen, UK, USA"
          defaultValue={defaultSubject}
          autoComplete="off"
        />
      </div>
      <div className="mt-6">
        <label htmlFor="message" className="block text-[11px] font-black uppercase tracking-widest text-[#0D47A1] mb-2 ml-1">
          Travel Plans & Details
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full min-h-[120px] rounded-[14px] border border-[#E5E7EB] bg-white/90 backdrop-blur-md px-5 py-4 text-base font-medium outline-none shadow-sm transition-all duration-250 hover:border-[#F7941D] focus:border-[#0D47A1] focus:ring-[5px] focus:ring-[rgba(13,71,161,0.12)] placeholder:text-[#94A3B8]"
          placeholder="Mention your visa type, preferred travel dates, and any specific questions you have..."
        />
      </div>
      <button
        type="submit"
        className="mt-8 relative overflow-hidden inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#F7941D] hover:bg-[#0D47A1] px-10 py-5 text-sm font-black text-white shadow-[0_10px_25px_rgba(247,148,29,0.3)] transition-all hover:shadow-[0_15px_35px_rgba(13,71,161,0.4)] hover:-translate-y-1 md:w-auto active:translate-y-0 group"
      >
        <span className="relative z-10 inline-flex items-center gap-3">
          {sent ? (
            <>
              <CheckCircle2 size={18} /> Connecting WhatsApp...
            </>
          ) : (
            <>
              <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /> Send Your Inquiry
            </>
          )}
        </span>
        <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  defaultValue,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  defaultValue?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="block text-[11px] font-black uppercase tracking-widest text-[#0D47A1] mb-2 ml-1">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        defaultValue={defaultValue}
        autoComplete={autoComplete}
        className="w-full h-[56px] rounded-[14px] border border-[#E5E7EB] bg-white/90 backdrop-blur-md px-5 py-3 text-base font-medium outline-none shadow-sm transition-all duration-250 hover:border-[#F7941D] focus:border-[#0D47A1] focus:ring-[5px] focus:ring-[rgba(13,71,161,0.12)] placeholder:text-[#94A3B8]"
      />
    </label>
  );
}

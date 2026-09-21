import { useState } from "react";
import { Mail, CheckCircle } from "lucide-react";
import { COMPANY } from "@/data/company";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#4C1D95] via-[#581c87] to-[#3B0764] px-6 py-10 sm:px-12 sm:py-12 shadow-2xl shadow-purple-950/20">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            {/* ── Left Side: Mail Icon & Text ── */}
            <div className="flex items-center gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-inner">
                <Mail size={28} />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Subscribe to our newsletter
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-purple-200/90 font-medium">
                  Get the latest visa updates, flight discounts &amp; exclusive Umrah packages from {COMPANY.name}.
                </p>
              </div>
            </div>

            {/* ── Right Side: Input & Button ── */}
            <div className="w-full lg:max-w-md">
              {subscribed ? (
                <div className="flex items-center gap-2 rounded-full bg-white/15 px-6 py-3 text-white text-sm font-semibold border border-white/30 backdrop-blur-md">
                  <CheckCircle size={18} className="text-emerald-400" />
                  <span>Thank you for subscribing! We will keep you updated.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex items-center">
                  <div className="flex-1">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full rounded-l-full bg-white px-5 py-3.5 text-xs sm:text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                  </div>
                  <button
                    type="submit"
                    className="rounded-r-full bg-[#2E1065] hover:bg-[#1E0946] text-white px-6 sm:px-8 py-3.5 text-xs sm:text-sm font-bold tracking-wide transition-colors shrink-0 shadow-md"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

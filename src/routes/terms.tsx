import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { COMPANY } from "@/data/company";
import { FileCheck, AlertCircle, RefreshCw, ShieldAlert, Award } from "lucide-react";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: `Terms & Conditions | ${COMPANY.name}` },
      {
        name: "description",
        content: `Terms of Service and Conditions of ${COMPANY.name}. Important guidelines regarding visa applications, flight bookings, and Umrah services.`,
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms of Service"
        title="Terms & Conditions"
        subtitle={`Please review the terms and policies governing services provided by ${COMPANY.name}.`}
      />

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Important Notice */}
          <div className="p-8 rounded-3xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-4">
            <AlertCircle size={32} className="text-amber-600 shrink-0 mt-1" />
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-gray-900">Official Visa Decision Disclaimer</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                {COMPANY.name} is an authorized, professional travel and visa consultancy. We provide comprehensive documentation preparation, appointment scheduling, and profile representation. However, the final decision to grant or refuse any visa rests solely and unconditionally with the respective embassy, high commission, or consulate officer.
              </p>
            </div>
          </div>

          {/* Term 1 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <FileCheck size={20} className="text-[#0D47A1]" />
              <h3 className="text-lg font-bold text-gray-900">1. Accuracy of Client Documentation</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Clients are responsible for providing authentic, legitimate, and valid documents (such as passports, CNICs, bank statements, tax returns, and employment letters). Providing false or manipulated documents is illegal and will result in immediate refusal and lifetime bans by foreign embassies, for which {COMPANY.name} bears zero liability.
            </p>
          </div>

          {/* Term 2 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <RefreshCw size={20} className="text-[#0D47A1]" />
              <h3 className="text-lg font-bold text-gray-900">2. Embassy Fees & Service Charges</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Official visa fees paid to foreign governments (e.g. US Embassy MRV fee, UKVI fee, Canadian IRCC fee, Schengen VFS fee) are non-refundable by the respective authorities once paid. Consultancy and file preparation fees cover the professional labor, research, and time invested by our specialists and are non-refundable once documentation has commenced.
            </p>
          </div>

          {/* Term 3 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Award size={20} className="text-[#0D47A1]" />
              <h3 className="text-lg font-bold text-gray-900">3. Air Ticketing & Refund Policies</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Flight tickets are issued under the standard regulations of IATA and the respective operating airlines. Any date change, cancellation, or refund request is subject to the fare rules, penalties, and airline processing timelines established by the carrier.
            </p>
          </div>

          {/* Term 4 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <ShieldAlert size={20} className="text-[#0D47A1]" />
              <h3 className="text-lg font-bold text-gray-900">4. Processing Timelines</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              While our consultancy processes and submits applications within 24 to 48 business hours, embassy processing durations fluctuate based on consular workloads, seasonal peaks, and administrative reviews. {COMPANY.name} cannot expedite sovereign government decision-making processes.
            </p>
          </div>

          {/* Contact */}
          <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 text-xs sm:text-sm text-gray-600">
            For questions regarding our terms, please contact us at {COMPANY.phone} or visit our head office at {COMPANY.address}.
          </div>
        </div>
      </section>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { COMPANY } from "@/data/company";
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: `Privacy Policy | ${COMPANY.name}` },
      {
        name: "description",
        content: `Privacy Policy of ${COMPANY.name}. Learn how we protect your personal and travel documentation data.`,
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal & Trust"
        title="Privacy Policy"
        subtitle={`How ${COMPANY.name} safeguards your personal, passport, and travel information.`}
      />

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Introduction Card */}
          <div className="p-8 rounded-3xl bg-blue-50/50 border border-blue-100 flex items-start gap-4">
            <ShieldCheck size={32} className="text-[#0D47A1] shrink-0 mt-1" />
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-gray-900">Your Privacy Matters to Us</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                At {COMPANY.name} (IATA Authorized Travel Agency, Islamabad), we are committed to upholding the highest standards of data security and confidentiality. This policy outlines how your information is collected, processed, and safeguarded when applying for visas, flights, Umrah packages, or travel insurance.
              </p>
            </div>
          </div>

          {/* Section 1: Information Collected */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FileText size={20} className="text-[#0D47A1]" />
              <h3 className="text-lg font-bold text-gray-900">1. Information We Collect</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              To provide authorized visa consultancy, flight reservations, and hotel bookings, we collect personal information strictly necessary for official applications:
            </p>
            <ul className="space-y-2 text-sm text-gray-600 pl-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                <span>Identification Details: Full name, passport number, CNIC, date of birth, and nationality.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                <span>Contact Details: Phone number, email address, and residential address in Pakistan.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                <span>Travel Documents: Bank maintenance certificates, employment verification, and travel itineraries requested by embassies.</span>
              </li>
            </ul>
          </div>

          {/* Section 2: How We Use Your Data */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Eye size={20} className="text-[#0D47A1]" />
              <h3 className="text-lg font-bold text-gray-900">2. How Your Data Is Used</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Your documentation is exclusively used for authorized travel purposes:
            </p>
            <ul className="space-y-2 text-sm text-gray-600 pl-4">
              <li>• Submitting online visa applications to official embassy portals (IRCC, CEAC DS-160, UKVI, eVisa portals).</li>
              <li>• Booking international airline tickets through authorized GDS / IATA systems.</li>
              <li>• Issuing confirmed hotel vouchers and embassy-approved travel medical insurance.</li>
              <li>• Communicating case updates, appointment confirmations, and visa decision notices.</li>
            </ul>
          </div>

          {/* Section 3: Data Security */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Lock size={20} className="text-[#0D47A1]" />
              <h3 className="text-lg font-bold text-gray-900">3. Data Protection & Security</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              We implement industry-standard physical and digital safeguards. We never sell, rent, or trade your personal data with third-party advertising companies. Access to your sensitive documents is strictly restricted to certified case officers managing your file.
            </p>
          </div>

          {/* Contact Section */}
          <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 text-xs sm:text-sm text-gray-600 space-y-2">
            <p className="font-bold text-gray-900">Questions about our privacy policy?</p>
            <p>
              Please contact our data protection team directly at{" "}
              <a href={`mailto:${COMPANY.email}`} className="text-[#0D47A1] font-semibold underline">
                {COMPANY.email}
              </a>{" "}
              or visit our office at {COMPANY.address}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";


import { AppointmentHero } from "@/sections/appointment/AppointmentHero";
import { WhyBookOnline } from "@/sections/appointment/WhyBookOnline";
import { MultiStepForm } from "@/components/appointment/MultiStepForm";
import { SectionTitle } from "@/components/SectionTitle";
import { FAQCard } from "@/components/FAQCard";
import { PatientCarePromise } from "@/sections/about/PatientCarePromise";

export const metadata: Metadata = {
  title: "Book Dental Appointment in Jewar | Maa Bhagwati Dental Care",
  description: "Schedule your visit instantly at our clinic in Jewar, Greater Noida. Choose your preferred doctor, date, and time slot using our secure online appointment booking system.",
  alternates: {
    canonical: "/appointment/",
  },
  openGraph: {
    title: "Book Dental Appointment in Jewar | Maa Bhagwati Dental Care",
    description: "Schedule your visit instantly at our clinic in Jewar, Greater Noida. Choose your preferred doctor, date, and time slot using our secure online appointment booking system.",
    type: "website",
  },
};

const APPOINTMENT_FAQS = [
  { question: "How to book an appointment online?", answer: "Simply fill out our 7-step form above. Choose your department, doctor, and preferred time slot. Your request is sent directly to our front desk." },
  { question: "Can I reschedule my appointment?", answer: "Yes, you can reschedule by calling our clinic directly at least 24 hours prior to your scheduled time." },
  { question: "Is online video consultation available?", answer: "Yes, you can request an online consultation in the 'Additional Notes' section of the booking form." },
  { question: "How long does a typical treatment take?", answer: "Initial consultations take 30-45 minutes. Specific treatments like Root Canals or Implants vary. Your doctor will provide an exact timeline." },
  { question: "Do I receive a booking confirmation?", answer: "Yes, once our ERP system registers your request, our front desk will call or WhatsApp you to finally confirm your slot." },
];

export default function AppointmentPage() {
  return (
      <main className="flex min-h-screen flex-col overflow-hidden bg-background-light">
        <Navbar />
        <div className="flex-1 w-full">
          
          <AppointmentHero />
          
          <WhyBookOnline />

          {/* Form Section */}
          <section className="py-12 md:py-20 relative">
             <div className="container mx-auto px-4 md:px-6">
                <MultiStepForm />
             </div>
          </section>

          {/* FAQ Section */}
          <section className="py-24 bg-white relative border-t border-border/50">
             <div className="container mx-auto px-4 md:px-6">
                <SectionTitle
                  title="Booking FAQs"
                  subtitle="Common Questions"
                  className="mb-16"
                />
                <div className="max-w-3xl mx-auto">
                   {APPOINTMENT_FAQS.map((faq, index) => (
                     <div key={index} className="mb-4">
                       <FAQCard question={faq.question} answer={faq.answer} />
                     </div>
                   ))}
                </div>
             </div>
          </section>

          {/* Patient Care Promise Reused as Related Info */}
          <PatientCarePromise />

        </div>
        <Footer />
      </main>
  );
}

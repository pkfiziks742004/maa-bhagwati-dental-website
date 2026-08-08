import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import { FAQInteractiveLayout } from "@/sections/faq/FAQInteractiveLayout";
import { AppointmentCTA } from "@/sections/AppointmentCTA";
import { ALL_FAQS } from "@/constants/faq";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Maa Bhagwati Dental Care",
  description: "Find answers to all your questions about our dental and cosmetic treatments, booking process, payments, and emergency care.",
  openGraph: {
    title: "FAQ | Maa Bhagwati Dental Care",
    description: "Got questions? We have answers. Explore our comprehensive FAQ.",
    type: "website",
  },
};

export default function FAQPage() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden bg-background">
      <Navbar />
      <div className="flex-1 w-full">
        
        {/* Simple Hero */}
        <section className="pt-32 pb-12 bg-background-light text-center">
           <div className="container mx-auto px-4">
             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6">
               How Can We <span className="text-primary">Help You?</span>
             </h1>
             <p className="text-lg text-text/70 max-w-2xl mx-auto">
               Everything you need to know about our treatments, clinic processes, and patient care.
             </p>
           </div>
        </section>

        <FAQInteractiveLayout />

        <AppointmentCTA />
        
      </div>
      <Footer />

      {/* FAQ Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": ALL_FAQS.slice(0, 10).map(faq => ({ // Limit schema to top 10 to avoid bloat
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </main>
  );
}

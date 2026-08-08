import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import { TestimonialsHero } from "@/sections/testimonials/TestimonialsHero";
import { ReviewGrid } from "@/sections/testimonials/ReviewGrid";
import { VideoTestimonials } from "@/sections/testimonials/VideoTestimonials";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { AppointmentCTA } from "@/sections/AppointmentCTA";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Patient Reviews & Testimonials | Maa Bhagwati Dental Care",
  description: "Read genuine patient reviews and watch video testimonials. Discover why we are the highest-rated dental and cosmetic clinic in New Delhi.",
  openGraph: {
    title: "Patient Reviews | Maa Bhagwati Dental Care",
    description: "Read real stories and see life-changing results.",
    type: "website",
  },
};

export default function TestimonialsPage() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden bg-background">
      <Navbar />
      <div className="flex-1 w-full">
        
        <TestimonialsHero />
        
        <ReviewGrid />

        <VideoTestimonials />

        {/* Reuse Before/After Showcase */}
        <section className="py-24 bg-white relative border-t border-border/50">
           <div className="container mx-auto px-4 md:px-6">
              <SectionTitle
                title="Visible Results"
                subtitle="Before & After"
                className="mb-16"
              />
              <BeforeAfterSlider />
           </div>
        </section>

        <AppointmentCTA />
        
      </div>
      <Footer />

      {/* Review Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": "Maa Bhagwati Dental Care",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "1245"
            }
          })
        }}
      />
    </main>
  );
}

import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GalleryHero } from "@/sections/gallery/GalleryHero";
import { GalleryGrid } from "@/sections/gallery/GalleryGrid";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { AppointmentCTA } from "@/sections/AppointmentCTA";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Clinic & Results Gallery | Maa Bhagwati Dental Care",
  description: "Take a tour of our modern clinic, view our state-of-the-art equipment, and explore real smile transformations and patient testimonials.",
  openGraph: {
    title: "Clinic Tour & Before/After Gallery",
    description: "Explore the Maa Bhagwati facility and view real patient results.",
    type: "website",
  },
};

export default function GalleryPage() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden">
      <Navbar />
      <div className="flex-1 w-full">
        
        {/* 1. Hero Section */}
        <GalleryHero />
        
        {/* 2. Interactive Masonry Grid with Filters & Lightbox */}
        <GalleryGrid />

        {/* 3. Featured Before & After Showcase */}
        <section className="py-24 bg-background-light relative border-t border-border/50">
           <div className="container mx-auto px-4 md:px-6">
              <SectionTitle
                title="Real Results"
                subtitle="Clinical Transformations"
                className="mb-16"
              />
              <BeforeAfterSlider />
           </div>
        </section>

        {/* 4. Final CTA */}
        <AppointmentCTA />
        
      </div>
      <Footer />
    </main>
  );
}

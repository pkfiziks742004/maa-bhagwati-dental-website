import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServicesHero } from "@/sections/services/ServicesHero";
import { ServicesList } from "@/sections/services/ServicesList";
import { ServicesFeatures } from "@/sections/services/ServicesFeatures";
import { ServicesCTA } from "@/sections/services/ServicesCTA";

export const metadata: Metadata = {
  title: "Dental Services in Jewar | Maa Bhagwati Dental Care",
  description: "Explore our comprehensive range of services in Jewar, Greater Noida, including advanced dental care, cosmetic dentistry, skin treatments, and hair transplantation.",
  alternates: {
    canonical: "/services/",
  },
  openGraph: {
    title: "Dental Services in Jewar | Maa Bhagwati Dental Care",
    description: "Explore our comprehensive range of services in Jewar, Greater Noida, including advanced dental care, cosmetic dentistry, skin treatments, and hair transplantation.",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden bg-white">
      <Navbar />
      <div className="flex-1 w-full flex flex-col">
        
        {/* 1. Services Hero (50/50 split) */}
        <ServicesHero />
        
        {/* 2. Main Services List with Pill Category Tabs & 5-Grid Layout */}
        <ServicesList />
        
        {/* 3. Features Trust Strip (5 icons) */}
        <ServicesFeatures />
        
        {/* 4. Dedicated Services CTA Banner */}
        <ServicesCTA />
        
      </div>
      <Footer />
    </main>
  );
}

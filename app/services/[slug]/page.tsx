import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, SERVICES_DATA } from "@/constants/services";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// Sections
import { TreatmentHero } from "@/sections/treatment/TreatmentHero";
import { TreatmentOverview } from "@/sections/treatment/TreatmentOverview";
import { TreatmentSteps } from "@/sections/treatment/TreatmentSteps";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { TreatmentFAQ } from "@/sections/treatment/TreatmentFAQ";
import { AppointmentCTA } from "@/sections/AppointmentCTA";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.slug);
  
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | Maa Bhagwati Dental Care`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} | Premium Treatment in Clinic`,
      description: service.shortDescription,
      type: "website",
    },
    alternates: {
      canonical: `/services/${service.slug}`
    }
  };
}

export function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export default async function TreatmentPage({ params }: Props) {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col overflow-hidden">
      <Navbar />
      <div className="flex-1 w-full pt-[80px] lg:pt-[100px]">
        
        {/* 1. Hero with Breadcrumbs */}
        <TreatmentHero service={service} />
        
        {/* 2. Overview, Symptoms & Benefits */}
        <TreatmentOverview service={service} />
        
        {/* 3. Procedure Timeline */}
        <TreatmentSteps service={service} />
        
        {/* 4. Before & After Cases */}
        <BeforeAfterSlider filterCategory={service.category} />
        
        {/* 5. FAQs specific to treatment */}
        <TreatmentFAQ service={service} />
        
        {/* 6. CTA Banner */}
        <AppointmentCTA />
        
      </div>
      <Footer />
    </main>
  );
}

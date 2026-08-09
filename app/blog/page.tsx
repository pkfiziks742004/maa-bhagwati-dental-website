import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import { BlogGrid } from "@/sections/blog/BlogGrid";
import { NewsletterCTA } from "@/sections/blog/NewsletterCTA";
import { AppointmentCTA } from "@/sections/AppointmentCTA";

export const metadata: Metadata = {
  title: "Dental & Health Blog | Maa Bhagwati Dental Care, Jewar",
  description: "Read the latest articles on dental care, cosmetic procedures, and oral hygiene written by our expert doctors in Jewar, Greater Noida.",
  alternates: {
    canonical: "/blog/",
  },
  openGraph: {
    title: "Dental & Health Blog | Maa Bhagwati Dental Care, Jewar",
    description: "Expert insights into modern dentistry and cosmetology from our Jewar specialists.",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden bg-background">
      <Navbar />
      <div className="flex-1 w-full">
        
        {/* Simple Hero */}
        <section className="pt-32 pb-12 bg-background-light text-center relative overflow-hidden">
           {/* Subtle background element */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
           
           <div className="container mx-auto px-4 relative z-10">
             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6">
               Insights & <span className="text-primary">Knowledge</span>
             </h1>
             <p className="text-lg text-text/70 max-w-2xl mx-auto">
               Discover professional advice, treatment guides, and clinic news written directly by our specialists.
             </p>
           </div>
        </section>

        <BlogGrid />

        <NewsletterCTA />

        <AppointmentCTA />
        
      </div>
      <Footer />
    </main>
  );
}

"use client";

import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { getServicesByCategory, SERVICES_DATA } from "@/constants/services";
import { SecondaryButton } from "@/components/SecondaryButton";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const FEATURED_DENTAL_SLUGS = ["ortho-braces", "dental-implants", "root-canal-treatment", "opg"];

export const DentalServices = () => {
  const dentalServices = FEATURED_DENTAL_SLUGS
    .map(slug => SERVICES_DATA.find(s => s.slug === slug))
    .filter(Boolean);

  return (
    <section id="dental-services" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Dental Services"
          subtitle="Advanced Dentistry"
          className="mb-16"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dentalServices.map((service, index) => (
            <ServiceCard
              key={service!.slug}
              {...service!}
              description={service!.shortDescription}
              delay={index * 0.1}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/services/">
            <SecondaryButton outline>View All Dental Services <ArrowRight size={16} className="ml-2" /></SecondaryButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

const FEATURED_COSMODENT_SLUGS = ["hair-transplant", "prp-therapy", "hair-fall-treatment", "alopecia-areata"];

export const CosmodentServices = () => {
  const cosmodentServices = FEATURED_COSMODENT_SLUGS
    .map(slug => SERVICES_DATA.find(s => s.slug === slug))
    .filter(Boolean);

  return (
    <section id="cosmodent-services" className="py-24 bg-background-light relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Cosmodent Services"
          subtitle="Skin, Hair & Laser"
          className="mb-16"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cosmodentServices.map((service, index) => (
            <ServiceCard
              key={service!.slug}
              {...service!}
              description={service!.shortDescription}
              delay={index * 0.1}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/services/">
            <SecondaryButton outline>View All Cosmodent Services <ArrowRight size={16} className="ml-2" /></SecondaryButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

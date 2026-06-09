import { generateSharedMetadata } from "@/lib/metadata";
import HeroSection from "@/components/HeroSection";
import GoogleReviewsBadge from "@/components/reviews/GoogleReviewsBadge";
import { aggregateRating } from "@/components/reviews/reviews.data";
import FinalCTA from "@/components/ui/FinalCTA";
import nextDynamic from "next/dynamic";


import JsonLd from "@/components/seo/JsonLd";
import { createOrganizationSchema, createSerponadoAgencySchema, createWebsiteSchema } from "@/lib/seo/jsonld";
import { getAllTestimonials } from "@/lib/data/testimonials";
import AIAnswerBox from "@/components/seo/AIAnswerBox";
import SerponadoAtlas from "@/components/sections/home/SerponadoAtlas";

import { PricingSection } from "@/components/sections/home/PricingSection";
import ServicesSection from "@/components/sections/home/ServicesSection";
import WhyUsSection from "@/components/sections/home/WhyUsSection";
import TrustMetricsSection from "@/components/sections/home/TrustMetricsSection";

import FAQSection from "@/components/sections/home/FAQSection";
import SeoContentSection from "@/components/sections/home/SeoContentSection";

import InteractiveMapSection from "@/components/sections/home/InteractiveMapSection";
import ContactSection from "@/components/sections/home/ContactSection";
import PersonalizedHero from "@/components/growth/PersonalizedHero";
import PersonalizedCTA from "@/components/growth/PersonalizedCTA";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import ProcessSteps from "@/components/trust/ProcessSteps";

export const metadata = generateSharedMetadata({
  title: "Serponado Survival Guide: Recover Your SERP Rankings",
  description: "Hit by the Serponado? Recover your SERP rankings from the catastrophic Google Core Update anomaly with our disaster recovery team.",
  path: "/",
  exactTitle: true,
});

export const revalidate = 3600;

export default function HomePage() {
  const testimonials = getAllTestimonials();
  
  return (
    <>
      <JsonLd data={createOrganizationSchema()} />
      <JsonLd data={createSerponadoAgencySchema()} />
      <JsonLd data={createWebsiteSchema()} />
      <AIAnswerBox />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Trust Signals & Reviews */}
      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8 -mt-[20px] sm:-mt-[24px] lg:-mt-[28px] flex flex-col items-center justify-center gap-3 sm:gap-4 pointer-events-none mb-8 sm:mb-10 lg:mb-14">
        <div className="w-full max-w-5xl pointer-events-Website">
        </div>
        <aside aria-labelledby="google-reviews-heading" className="pointer-events-Website">
          <h2 id="google-reviews-heading" className="sr-only">Google Reviews</h2>
          <GoogleReviewsBadge rating={aggregateRating.ratingValue} count={aggregateRating.reviewCount} />
        </aside>
      </div>

      <SerponadoAtlas />

      <PersonalizedHero />
      <PricingSection />
      <ServicesSection />
      <WhyUsSection />
      <TrustMetricsSection />
      <InteractiveMapSection />
      <ProcessSteps />
      
      {/* Testimonials */}
      <TestimonialCarousel testimonials={testimonials} title="Das sagen unsere Kunden" subtitle="Geprüfte Bewertungen aus der Region" />

      <FAQSection />
      <ContactSection />
      <PersonalizedCTA />
      <SeoContentSection />

      <FinalCTA className="bg-[var(--color-red-500)]" headline="Rankingproblem nach dem Update? Handeln Sie sofort!" benefits={["Experten für Google Core Update Recovery","Transparente Analysen & White-Hat Recovery","Sofortige Hilfe im War Room"]} buttonText="Serponado Taskforce anrufen" socialProof="Über 500 gerettete Domains aus dem Google Index" subtitle="Live im Dashboard · Globales Recovery · 24/7 erreichbar" />
    </>
  );
}

export const dynamic = "force-static";

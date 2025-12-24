"use client";

import { Navbar } from "./navbar";
import { MainContent } from "./main-content";
import { IconsSection } from "./icons-section";
import { StatisticsSection } from "./statistics-section";
import { FeaturesCarousel } from "./features-carousel";
import { AppDownloadSection } from "./app-download-section";
import { ProcessStepsCarousel } from "./process-steps-carousel";
import { TestimonialsCarousel } from "./testimonials-carousel";
import { FAQSection } from "./faq-section";
import { CTABanner } from "./cta-banner";
import { Footer } from "./footer";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <MainContent />
      <IconsSection />
      <StatisticsSection />
      <FeaturesCarousel />
      <AppDownloadSection />
      <ProcessStepsCarousel />
      <TestimonialsCarousel />
      <FAQSection />
      <CTABanner />
      <Footer />
    </div>
  );
}


"use client";

import LandingNavbar from "@/components/landing/LandingNavbar";
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import ServiceSection from "@/components/landing/ServiceSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <LandingNavbar />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ContactSection />
      <Footer />
    </>
  );
}


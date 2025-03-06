'use client';

import { useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ContactSection from '@/components/sections/ContactSection';
import { registerSmoothScrolling } from '@/lib/smoothScroll';

export default function Home() {
  useEffect(() => {
    // Register smooth scrolling for anchor links
    registerSmoothScrolling();
  }, []);
  
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <SkillsSection />
      <ServicesSection />
      <ContactSection />
    </MainLayout>
  );
}

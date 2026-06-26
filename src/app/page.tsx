export const dynamic = 'force-dynamic';

import HeroSection from './components/ui/HeroSection';
import AboutSection from './components/ui/AboutSection';
import ServicesSection from './components/ui/ServicesSection';
import ContactSection from './components/ui/ContactSection';
import FAQSection from './components/ui/FAQSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <FAQSection />
    </>
  );
}
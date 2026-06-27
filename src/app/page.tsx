export const dynamic = 'force-dynamic';

import { redirect } from 'next/navigation';
import { auth0 } from '@/lib/auth0';
import HeroSection from './components/ui/HeroSection';
import AboutSection from './components/ui/AboutSection';
import ServicesSection from './components/ui/ServicesSection';
import ContactSection from './components/ui/ContactSection';
import FAQSection from './components/ui/FAQSection';

export default async function HomePage() {
  const session = await auth0.getSession();

  if (session && session.user) {
    redirect('/dashboard');
  }

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
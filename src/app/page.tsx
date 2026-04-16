export const dynamic = 'force-dynamic';

import HeroSection from './components/ui/HeroSection';
import ServicesSection from './components/ui/ServicesSection';
import ProductsSection from './components/ui/ProductsSection';
import FAQSection from './components/ui/FAQSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProductsSection />
      <FAQSection />
    </>
  );
}
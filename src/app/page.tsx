import HeroSection from './components/ui/HeroSection';
import ServicesSection from './components/ui/ServicesSection';  
import FAQSection from './components/ui/FAQSection';
import ProductsSection from './components/ui/ProductsSection';  

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <FAQSection />
      <ProductsSection />
    </>
  );
}
export const dynamic = 'force-dynamic';

import ServicesSection from '../components/ui/ServicesSection';
import AdBanner from '../components/ui/AdBanner';

export default function ServicesPage() {
  return (
    <div className="pt-16">
      <ServicesSection />
      <div className="pb-12">
        <AdBanner adSlot="services_page_bottom" />
      </div>
    </div>
  );
}
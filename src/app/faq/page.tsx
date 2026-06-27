export const dynamic = 'force-dynamic';

import FAQSection from '../components/ui/FAQSection';
import AdBanner from '../components/ui/AdBanner';

export default function FAQPage() {
  return (
    <div className="pt-16">
      <FAQSection />
      <div className="pb-12">
        <AdBanner adSlot="faq_page_bottom" />
      </div>
    </div>
  );
}
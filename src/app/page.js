import Hero from '@/components/Hero';
import CategoriesSection from '@/components/CategoriesSection';
import WorkSection from '@/components/WorkSection';
import PrinciplesSection from '@/components/PrinciplesSection';
import ServicesSection from '@/components/ServicesSection';
import ProcessSection from '@/components/ProcessSection';
import TrustSection from '@/components/TrustSection';
import FaqSection from '@/components/FaqSection';
import CtaSection from '@/components/CtaSection';

export default function Home() {
  return (
    <>
      <Hero />
      <CategoriesSection />
      <WorkSection />
      <PrinciplesSection />
      <ServicesSection />
      <ProcessSection />
      <TrustSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}

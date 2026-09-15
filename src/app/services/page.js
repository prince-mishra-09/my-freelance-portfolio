import ServicesSection from '@/components/ServicesSection';
import CtaSection from '@/components/CtaSection';

export const metadata = {
  title: 'Services | Xwaked',
  description: 'Digital experiences for businesses that need to be taken seriously.',
};

export default function ServicesPage() {
  return (
    <main style={{ paddingTop: '10vh' }}>
      <ServicesSection />
      <CtaSection />
    </main>
  );
}

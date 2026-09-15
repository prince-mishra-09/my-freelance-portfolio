import ProcessSection from '@/components/ProcessSection';
import CtaSection from '@/components/CtaSection';

export const metadata = {
  title: 'Process | Xwaked',
  description: 'A simple process. No mystery. How we move from idea to launch.',
};

export default function ProcessPage() {
  return (
    <main style={{ paddingTop: '10vh' }}>
      <ProcessSection />
      <CtaSection />
    </main>
  );
}

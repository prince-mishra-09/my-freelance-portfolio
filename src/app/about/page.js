import Section from '@/components/Section';
import CtaSection from '@/components/CtaSection';
import styles from './page.module.css';

export const metadata = {
  title: 'About | Xwaked',
  description: 'The person behind Xwaked. Designing and developing premium digital experiences.',
};

export default function AboutPage() {
  return (
    <main>
      <div className={styles.pageWrapper}>
        <div className={styles.container}>
          <h1 className={styles.title}>About Xwaked</h1>
          <div className={styles.content}>
            <p>
              I'm <span className={styles.highlight}>Prince Mishra</span>, the designer and developer behind Xwaked.
            </p>
            <p>
              Xwaked was built to solve a specific problem: too many businesses rely on generic, template-driven websites that fail to communicate their actual value. Whether it's a professional service firm, a specialized clinic, or a premium retail showroom, the digital experience often falls short of the real-world expertise.
            </p>
            <p>
              My approach focuses on creating digital experiences that are fundamentally designed around clarity, trust, and conversion. I handle both the visual design system and the technical development, ensuring that the approved concept is built into a fast, responsive, and robust website.
            </p>
            <p>
              When you work with Xwaked, you work directly with me. There are no account managers or layers of communication — just a direct partnership focused on building something that makes your business easier to trust and easier to choose.
            </p>
          </div>
        </div>
      </div>
      <CtaSection />
    </main>
  );
}

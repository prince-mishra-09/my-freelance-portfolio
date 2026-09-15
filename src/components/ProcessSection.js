import Link from 'next/link';
import Button from './Button';
import Section from './Section';
import styles from './ProcessSection.module.css';

const steps = [
  {
    num: "01",
    title: "Discover",
    description: "We understand your business, audience, goals and what the website needs to accomplish."
  },
  {
    num: "02",
    title: "Structure",
    description: "We plan the content hierarchy, user journey and conversion paths before polishing the visuals."
  },
  {
    num: "03",
    title: "Design",
    description: "We build the visual system, responsive layouts and interaction details."
  },
  {
    num: "04",
    title: "Build",
    description: "The approved experience is developed into a fast, responsive website."
  },
  {
    num: "05",
    title: "Launch",
    description: "We test the experience, fix issues and prepare the site for launch."
  }
];

export default function ProcessSection() {
  return (
    <Section id="process" className={styles.processSection} background="secondary">
      
      <div className={styles.header}>
        <h2 className={styles.title}>A simple process. No mystery.</h2>
        <p className={styles.subtitle}>
          You shouldn't need to wonder what happens after you say yes. Here's how a typical project moves from idea to launch.
        </p>
      </div>

      <div className={styles.timelineContainer}>
        {steps.map((step, idx) => (
          <div key={idx} className={styles.step}>
            <div className={styles.stepMarker}>
              <span className={styles.number}>{step.num}</span>
              {/* Line connector except for the last item */}
              {idx < steps.length - 1 && <div className={styles.connector}></div>}
            </div>
            
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        <div className={styles.ctaBox}>
          <p className={styles.ctaText}>Have a project in mind?</p>
          <Button href="/contact" variant="primary">
            Start a Project &rarr;
          </Button>
        </div>
      </div>

    </Section>
  );
}

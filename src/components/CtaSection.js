import Button from './Button';
import Section from './Section';
import styles from './CtaSection.module.css';

export default function CtaSection() {
  return (
    <Section id="final-cta" className={styles.ctaSection}>
      <div className={styles.ctaContainer}>
        
        <h2 className={styles.headline}>
          Your website should do more<br className={styles.break} /> than just exist.
        </h2>
        
        <p className={styles.supportingCopy}>
          Let's build a digital experience that makes your business easier to trust — and easier to choose.
        </p>
        
        <div className={styles.buttonGroup}>
          <Button href="/contact" variant="primary" className={styles.primaryButton}>
            Start a Project &rarr;
          </Button>
          <a 
            href="https://api.whatsapp.com/send?phone=919889338352&text=Hi%20Prince%2C%20I'm%20interested%20in%20starting%20a%20project%20with%20Xwaked!" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.whatsappAction}
          >
            Talk on WhatsApp &rarr;
          </a>
        </div>
        
        <p className={styles.reassurance}>
          Tell me what you're building. I'll help you figure out the right next step.
        </p>

      </div>
    </Section>
  );
}

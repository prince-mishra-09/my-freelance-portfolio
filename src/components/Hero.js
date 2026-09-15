import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={`container ${styles.container}`}>
        
        {/* Left Column: Typography & CTAs */}
        <div className={styles.content}>
          <p className={styles.eyebrow}>Web Design & Development</p>
          
          <h1 className={styles.headline}>
            Websites that make <br className={styles.desktopBreak} />
            businesses look worth <br className={styles.desktopBreak} />
            choosing.
          </h1>
          
          <p className={styles.description}>
            I design and develop modern websites for clinics, professional firms, showrooms, premium brands and growing businesses — built to earn trust and generate enquiries.
          </p>
          
          <div className={styles.ctaGroup}>
            <Button href="/contact" variant="primary" className={styles.primaryCta}>
              Start a Project &rarr;
            </Button>
            <Button href="/work" variant="secondary" className={styles.secondaryCta}>
              View Selected Work
            </Button>
          </div>
          
          <div className={styles.proofRow}>
            <span>Business websites</span>
            <span className={styles.dot}>&bull;</span>
            <span>06 projects</span>
            <span className={styles.dot}>&bull;</span>
            <span>Multiple industries</span>
          </div>
        </div>

        {/* Right Column: Visual Showcase */}
        <div className={styles.visuals}>
          <div className={styles.visualWrapper}>
            
            {/* Desktop Mockup */}
            <div className={styles.desktopFrame}>
              <div className={styles.browserHeader}>
                <span className={styles.dotRed}></span>
                <span className={styles.dotYellow}></span>
                <span className={styles.dotGreen}></span>
              </div>
              <div className={styles.frameContent}>
                <Image 
                  src="/images/projects/taxpex/taxpex-desktop.webp" 
                  alt="Taxpex desktop website preview" 
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                  priority 
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
            </div>

            {/* Mobile Mockup (overlapping) */}
            <div className={styles.mobileFrame}>
              <div className={styles.mobileNotch}></div>
              <div className={styles.frameContent}>
                <Image 
                  src="/images/projects/interior/interior-design-mobile.webp" 
                  alt="Interior Design mobile website preview" 
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                  priority 
                  sizes="200px"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

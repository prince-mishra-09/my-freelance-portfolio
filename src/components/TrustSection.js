import Link from 'next/link';
import Image from 'next/image';
import Section from './Section';
import styles from './TrustSection.module.css';

const trustFramework = [
  {
    title: "Clear communication",
    description: "One person responsible for the design and development of the project."
  },
  {
    title: "Business-first thinking",
    description: "The website is designed around the business goal, not just visual decoration."
  },
  {
    title: "Transparent process",
    description: "The project has a clear path from discovery to launch."
  },
  {
    title: "Responsive support",
    description: "Clients should know who to contact when they need help."
  }
];

export default function TrustSection() {
  return (
    <Section id="trust" className={styles.trustSection}>
      
      <div className={styles.header}>
        <h2 className={styles.title}>Built with trust in mind.</h2>
        <p className={styles.subtitle}>
          Good client relationships don't end when the website goes live.
        </p>
      </div>

      <div className={styles.frameworkGrid}>
        {trustFramework.map((item, idx) => (
          <div key={idx} className={styles.frameworkItem}>
            <h3 className={styles.itemTitle}>{item.title}</h3>
            <p className={styles.itemDescription}>{item.description}</p>
          </div>
        ))}
      </div>

      <div className={styles.testimonialContainer}>
        <div className={styles.testimonialWrapper}>
          <div className={styles.testimonialContent}>
            
            <p className={styles.note}>Real proof &gt; polished promises.</p>

            {/* Testimonial */}
            <blockquote className={styles.quote}>
              "Working with Xwaked was a seamless experience. They understood our business goals perfectly and delivered a digital experience that exceeded our expectations."
            </blockquote>
            
            <div className={styles.authorArea}>
              <div className={styles.avatarPlaceholder}>
                <span className={styles.avatarText}>NC</span>
              </div>
              <div className={styles.authorInfo}>
                <span className={styles.authorName}>Nishant Singh Chahuhaan</span>
                <span className={styles.authorRole}>Devaksa</span>
                <a href="https://devaksa.org/" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>Visit Website &rarr;</a>
              </div>
            </div>

          </div>

          {/* WhatsApp Screenshot */}
          <div className={styles.whatsappPlaceholder} style={{ position: 'relative', overflow: 'hidden', padding: 0 }}>
            <Image 
              src="/images/trust/devaska.png" 
              alt="WhatsApp review from Nishant Singh Chahuhaan"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          
        </div>
      </div>

    </Section>
  );
}

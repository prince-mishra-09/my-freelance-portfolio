import Link from 'next/link';
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

            {/* Testimonial Placeholder */}
            <blockquote className={styles.quote}>
              "Real client testimonial will appear here. The structure is set for an authentic, impactful quote explaining the business value delivered."
            </blockquote>
            
            <div className={styles.authorArea}>
              <div className={styles.avatarPlaceholder}>
                <span className={styles.avatarText}>Photo</span>
              </div>
              <div className={styles.authorInfo}>
                <span className={styles.authorName}>[Client Name Placeholder]</span>
                <span className={styles.authorRole}>[Role], [Company Placeholder]</span>
                <Link href="#" className={styles.projectLink}>View Project &rarr;</Link>
              </div>
            </div>

          </div>

          {/* WhatsApp Screenshot Placeholder */}
          <div className={styles.whatsappPlaceholder}>
            <div className={styles.whatsappInner}>
              <p>[Optional WhatsApp screenshot proof will appear here]</p>
            </div>
          </div>
          
        </div>
      </div>

    </Section>
  );
}

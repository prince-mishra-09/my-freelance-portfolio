import ContactForm from '@/components/ContactForm';
import styles from './page.module.css';

export const metadata = {
  title: 'Contact — Xwaked',
  description: 'Start a project or conversation with Xwaked.',
};

export default function ContactPage() {
  return (
    <div className={styles.contactPage}>
      <div className={`container ${styles.layout}`}>
        
        {/* Left Column: Heading & Context */}
        <div className={styles.sidebar}>
          <h1 className={styles.heading}>Tell me what you're building.</h1>
          <p className={styles.supportingCopy}>
            A few details are enough to start. I'll help you figure out the right approach from there.
          </p>
          
          <div className={styles.directContact}>
            <p className={styles.directTitle}>Prefer direct contact?</p>
            <ul className={styles.contactLinks}>
              <li>
                <a href="https://api.whatsapp.com/send?phone=919889338352&text=Hi%20Prince%2C%20I'm%20interested%20in%20starting%20a%20project%20with%20Xwaked!" target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp &rarr;
                </a>
              </li>
              <li>
                <a href="mailto:mrprimi91@gmail.com">
                  Email me directly &rarr;
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Progressive Form */}
        <div className={styles.formArea}>
          <ContactForm />
        </div>

      </div>
    </div>
  );
}

import Link from 'next/link';
import Section from './Section';
import styles from './ServicesSection.module.css';

const services = [
  {
    num: "01",
    title: "Business Websites",
    description: "For professional firms, consultants, agencies and local businesses."
  },
  {
    num: "02",
    title: "Clinic & Healthcare Websites",
    description: "For doctors, clinics and hospitals where credibility and clarity matter."
  },
  {
    num: "03",
    title: "E-commerce Websites",
    description: "For businesses that need product discovery, trust and a smoother buying journey."
  },
  {
    num: "04",
    title: "Premium Brand Websites",
    description: "For interior studios, architects, creative businesses and premium brands."
  },
  {
    num: "05",
    title: "Website Redesigns",
    description: "For businesses whose current website no longer reflects the quality of their work."
  }
];

export default function ServicesSection() {
  return (
    <Section id="services" className={styles.servicesSection}>
      
      <div className={styles.header}>
        <h2 className={styles.title}>What I build for businesses</h2>
        <p className={styles.subtitle}>
          From a first website to a complete digital storefront, I design around the business, the customer and the action that matters most.
        </p>
      </div>

      <div className={styles.servicesList}>
        {services.map((service, idx) => (
          <Link key={idx} href="/contact" className={styles.serviceRow}>
            <div className={styles.rowLeft}>
              <span className={styles.number}>{service.num}</span>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
            </div>
            
            <div className={styles.rowRight}>
              <p className={styles.serviceDescription}>{service.description}</p>
              <div className={styles.arrowContainer}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.arrow}>
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className={styles.hoverIndicator}></div>
          </Link>
        ))}
      </div>

      <div className={styles.footer}>
        <p className={styles.footerText}>Not sure what your business needs?</p>
        <Link href="/contact" className={styles.footerCta}>
          Let's figure it out &rarr;
        </Link>
      </div>

    </Section>
  );
}

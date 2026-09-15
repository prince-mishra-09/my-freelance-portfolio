import Link from 'next/link';
import Section from './Section';
import styles from './CategoriesSection.module.css';

const categories = [
  {
    num: "01",
    title: "Professional Services",
    tags: "Accounting · Consulting · CA Firms",
    href: "/work/taxpex",
    projectContext: "Taxpex"
  },
  {
    num: "02",
    title: "Healthcare",
    tags: "Clinics · Hospitals · Doctors",
    href: "/work/jk-hospital",
    projectContext: "JK Hospital"
  },
  {
    num: "03",
    title: "Retail & Showrooms",
    tags: "Tiles · Optics · Lifestyle",
    href: "/work/tiles-shop",
    projectContext: "Tiles Shop"
  },
  {
    num: "04",
    title: "Premium Services",
    tags: "Interior · Architecture · Creative",
    href: "/work/interior-design",
    projectContext: "Interior Design"
  }
];

export default function CategoriesSection() {
  return (
    <Section className={styles.categoriesSection} background="secondary">
      <div className={styles.header}>
        <h2 className={styles.title}>
          Built for businesses that need to be taken seriously.
        </h2>
        <p className={styles.description}>
          Different businesses need different digital experiences. The goal isn't to use the same template everywhere — it's to understand what the customer needs to see, trust and do.
        </p>
      </div>

      <div className={styles.listContainer}>
        {categories.map((cat, idx) => (
          <Link key={idx} href={cat.href} className={styles.row}>
            <div className={styles.rowLeft}>
              <span className={styles.number}>{cat.num}</span>
              <span className={styles.rowTitle}>{cat.title}</span>
            </div>
            
            <div className={styles.rowRight}>
              <span className={styles.tags}>{cat.tags}</span>
              <div className={styles.hoverReveal}>
                <span className={styles.projectContext}>See {cat.projectContext}</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.arrow}>
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}

import styles from './CaseStudySection.module.css';

export default function CaseStudySection({ title, children, layout = 'stacked' }) {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container} ${styles[layout]}`}>
        {title && (
          <div className={styles.header}>
            <h2 className={styles.title}>{title}</h2>
          </div>
        )}
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </section>
  );
}

import styles from './CaseStudyHero.module.css';

export default function CaseStudyHero({ title, category, description, metrics }) {
  return (
    <header className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <p className={styles.category}>{category}</p>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
        </div>
        
        {metrics && metrics.length > 0 && (
          <div className={styles.metricsRow}>
            {metrics.map((m, idx) => (
              <div key={idx} className={styles.metric}>
                <span className={styles.metricLabel}>{m.label}</span>
                <span className={styles.metricValue}>{m.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

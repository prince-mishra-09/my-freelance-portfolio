import styles from './Section.module.css';

export default function Section({ 
  children, 
  className = '', 
  id, 
  background = 'primary' 
}) {
  return (
    <section 
      id={id} 
      className={`${styles.section} ${styles[background]} ${className}`}
    >
      <div className={`container ${styles.container}`}>
        {children}
      </div>
    </section>
  );
}

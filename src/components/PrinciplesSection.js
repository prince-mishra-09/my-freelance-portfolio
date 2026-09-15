import Section from './Section';
import styles from './PrinciplesSection.module.css';

const principles = [
  {
    num: "01",
    title: "Clarity",
    description: "Visitors should immediately understand what the business offers and why it matters."
  },
  {
    num: "02",
    title: "Trust",
    description: "Design should reduce uncertainty through strong hierarchy, proof and transparent information."
  },
  {
    num: "03",
    title: "Conversion",
    description: "Calls, forms, WhatsApp, bookings and enquiries should be obvious without feeling aggressive."
  },
  {
    num: "04",
    title: "Experience",
    description: "Fast, responsive and thoughtful UX should make the business feel more professional."
  }
];

export default function PrinciplesSection() {
  return (
    <Section id="principles" className={styles.principlesSection} background="secondary">
      
      <div className={styles.manifestoGrid}>
        
        {/* Left Column: Manifesto Introduction */}
        <div className={styles.introColumn}>
          <h2 className={styles.title}>
            A website shouldn't just look good.<br />
            It should do a job.
          </h2>
          <p className={styles.supportingCopy}>
            Every section has a purpose — explain the business, build trust, answer a question or make the next action easier.
          </p>
        </div>

        {/* Right Column: The Principles */}
        <div className={styles.principlesColumn}>
          {principles.map((principle, idx) => (
            <div key={idx} className={styles.principleItem}>
              <div className={styles.principleHeader}>
                <span className={styles.numeral}>{principle.num}</span>
                <span className={styles.divider}>/</span>
                <h3 className={styles.principleTitle}>{principle.title}</h3>
              </div>
              <p className={styles.principleDescription}>{principle.description}</p>
            </div>
          ))}
        </div>
        
      </div>

      <div className={styles.transitionBlock}>
        <p className={styles.transitionSentence}>
          <span className={styles.dim}>Good design gets attention.</span><br />
          Good business websites earn action.
        </p>
      </div>

    </Section>
  );
}

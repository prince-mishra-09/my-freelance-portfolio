import Link from 'next/link';
import Image from 'next/image';
import Section from './Section';
import { projects } from '@/data/projects';
import styles from './WorkSection.module.css';

export default function WorkSection() {
  // Take the first 4 projects that have tier 1 as flagship
  const flagshipProjects = projects.filter(p => p.tier === 1).slice(0, 4);

  return (
    <Section id="work" className={styles.workSection}>
      
      <div className={styles.header}>
        <h2 className={styles.title}>Selected work</h2>
        <p className={styles.subtitle}>
          A few digital experiences designed and built for businesses across professional services, healthcare, retail and premium brands.
        </p>
      </div>

      <div className={styles.projects}>
        {flagshipProjects.map((project, idx) => {
          // Alternate layout (left or right aligned text)
          const isReversed = idx % 2 !== 0;
          
          return (
            <div key={project.id} className={`${styles.projectRow} ${isReversed ? styles.reversed : ''}`}>
              
              <div className={styles.textContent}>
                <span className={styles.projectNumber}>0{idx + 1}</span>
                <p className={styles.category}>{project.category}</p>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                
                <div className={styles.actions}>
                  <Link href={project.slug} className={styles.primaryAction}>
                    View case study <span className={styles.arrow}>&rarr;</span>
                  </Link>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className={styles.secondaryAction}>
                    Visit Live Website <span className={styles.arrowUp}>&#8599;</span>
                  </a>
                </div>
              </div>

              <div className={styles.visualContent}>
                <Link href={project.slug} className={styles.imageLink} aria-label={`View case study for ${project.title}`}>
                  <div className={styles.imagePlaceholder}>
                    {project.coverImage && (
                      <Image 
                        src={project.coverImage} 
                        alt={`${project.title} website preview`}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    )}
                  </div>
                </Link>
              </div>

            </div>
          );
        })}
      </div>

      {/* Supporting Work Section / Final CTA */}
      <div className={styles.footer}>
        <div className={styles.supportingWork}>
          <p className={styles.supportingTitle}>Also featuring</p>
          <ul className={styles.supportingList}>
            <li>LuckOptic <span className={styles.dim}>&mdash; E-commerce</span></li>
            <li>E-commerce <span className={styles.dim}>&mdash; Marketplace / Commerce</span></li>
          </ul>
        </div>
        
        <div className={styles.viewAllWrapper}>
          <Link href="/work" className="btn-primary">
            View all work &rarr;
          </Link>
        </div>
      </div>

    </Section>
  );
}

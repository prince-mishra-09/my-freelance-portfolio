import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/projects';
import Button from '@/components/Button';
import CtaSection from '@/components/CtaSection';
import styles from './page.module.css';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug.split('/').pop(),
  }));
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  
  // Find current project
  const projectIndex = projects.findIndex(p => p.slug.split('/').pop() === slug);
  const project = projects[projectIndex];
  
  if (!project) {
    notFound();
  }

  // Find next project
  const nextProject = projects[projectIndex + 1] || projects[0]; // loop back to start if at end

  return (
    <main className={styles.caseStudyPage}>
      
      {/* 1. Case Study Hero */}
      <section className={styles.heroSection}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroHeader}>
            <span className={styles.categoryBadge}>{project.category}</span>
            <h1 className={styles.projectTitle}>{project.title}</h1>
            <p className={styles.positioning}>{project.positioning || project.description}</p>
          </div>
          
          <div className={styles.heroVisual}>
            <div className={styles.mainImagePlaceholder}>
              {project.coverImage ? (
                <Image
                  src={project.coverImage}
                  alt={`${project.title} hero image`}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                  sizes="100vw"
                />
              ) : (
                <span>{project.title} Hero Image</span>
              )}
            </div>
          </div>
          
          {project.metadata && (
            <div className={styles.metadataGrid}>
              {project.metadata.industry && (
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Industry</span>
                  <span className={styles.metaValue}>{project.metadata.industry}</span>
                </div>
              )}
              {project.metadata.scope && (
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Scope</span>
                  <span className={styles.metaValue}>{project.metadata.scope}</span>
                </div>
              )}
              {project.metadata.website && (
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Website</span>
                  <span className={styles.metaValue}>{project.metadata.website}</span>
                </div>
              )}
              {project.metadata.year && (
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Year</span>
                  <span className={styles.metaValue}>{project.metadata.year}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* 2. Project Overview (Context, Challenge, Objective) */}
      {(project.businessContext || project.challenge || project.objective) && (
        <section className={styles.textSection}>
          <div className={`container ${styles.textContainer}`}>
            
            {project.businessContext && (
              <div className={styles.textBlock}>
                <h2 className={styles.sectionTitle}>Business Context</h2>
                <p className={styles.sectionText}>{project.businessContext}</p>
              </div>
            )}
            
            {project.challenge && (
              <div className={styles.textBlock}>
                <h2 className={styles.sectionTitle}>Challenge</h2>
                <p className={styles.sectionText}>{project.challenge}</p>
              </div>
            )}
            
            {project.objective && (
              <div className={styles.textBlock}>
                <h2 className={styles.sectionTitle}>Objective</h2>
                <p className={styles.sectionText}>{project.objective}</p>
              </div>
            )}
            
          </div>
        </section>
      )}

      {/* Breakout Sections (Strategy, UX, Visual Direction) */}
      <section className={styles.detailsSection}>
        <div className={`container ${styles.detailsContainer}`}>
          
          {project.strategy && (
            <div className={styles.detailBlock}>
              <h2 className={styles.sectionTitle}>Strategy</h2>
              <p className={styles.sectionText}>{project.strategy}</p>
            </div>
          )}
          
          {project.ux && (
            <div className={styles.detailBlock}>
              <h2 className={styles.sectionTitle}>UX / Information Architecture</h2>
              <p className={styles.sectionText}>{project.ux}</p>
            </div>
          )}
          
          {project.visualDirection && (
            <div className={styles.detailBlock}>
              <h2 className={styles.sectionTitle}>Visual Direction</h2>
              <p className={styles.sectionText}>{project.visualDirection}</p>
            </div>
          )}
          
        </div>
      </section>

      {/* Key Screens */}
      {project.keyScreens && project.keyScreens.length > 0 && (
        <section className={styles.screensSection}>
          <div className={`container ${styles.screensContainer}`}>
            <h2 className={styles.screensTitle}>Key Screens</h2>
            <div className={styles.screensGrid}>
              {project.keyScreens.map((screen, idx) => (
                <div key={idx} className={styles.screenPlaceholder}>
                  <Image
                    src={screen}
                    alt={`${project.title} screen ${idx + 1}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="100vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Post-Screens Text Sections */}
      {(project.responsiveExperience || project.decisions || project.outcome) && (
        <section className={styles.textSection}>
          <div className={`container ${styles.textContainer}`}>
            
            {project.responsiveExperience && (
              <div className={styles.textBlock}>
                <h2 className={styles.sectionTitle}>Responsive Experience</h2>
                <p className={styles.sectionText}>{project.responsiveExperience}</p>
              </div>
            )}
            
            {project.decisions && (
              <div className={styles.textBlock}>
                <h2 className={styles.sectionTitle}>Important Decisions</h2>
                <p className={styles.sectionText}>{project.decisions}</p>
              </div>
            )}
            
            {project.outcome && (
              <div className={styles.textBlock}>
                <h2 className={styles.sectionTitle}>Outcome / Intended Impact</h2>
                <p className={styles.sectionText}>{project.outcome}</p>
              </div>
            )}
            
          </div>
        </section>
      )}

      {/* Technology & Live Website */}
      <section className={styles.techSection}>
        <div className={`container ${styles.techContainer}`}>
          
          {project.technology && project.technology.length > 0 && (
            <div className={styles.techBlock}>
              <h2 className={styles.techTitle}>Technology</h2>
              <ul className={styles.techList}>
                {project.technology.map((tech, idx) => (
                  <li key={idx} className={styles.techTag}>{tech}</li>
                ))}
              </ul>
            </div>
          )}
          
          <div className={styles.liveBlock}>
            <h2 className={styles.techTitle}>Live Website</h2>
            <a href={project.url} target="_blank" rel="noopener noreferrer" className={styles.liveLink}>
              Visit {project.title} <span className={styles.arrowUp}>&#8599;</span>
            </a>
          </div>
          
        </div>
      </section>

      {/* Next Project Nav */}
      <section className={styles.nextProjectSection}>
        <div className={`container ${styles.nextProjectContainer}`}>
          <span className={styles.nextLabel}>Next Project</span>
          <Link href={nextProject.slug} className={styles.nextLink}>
            <span className={styles.nextTitle}>{nextProject.title}</span>
            <span className={styles.nextArrow}>&rarr;</span>
          </Link>
        </div>
      </section>

      {/* Footer CTA */}
      <CtaSection />

    </main>
  );
}

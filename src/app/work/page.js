"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/projects';
import styles from './page.module.css';

const filters = ["All", "Professional", "Healthcare", "Retail", "Premium", "E-commerce"];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter(project => {
    if (activeFilter === "All") return true;
    return project.filterTag === activeFilter;
  });

  return (
    <main className={styles.workPage}>
      
      {/* Page Header */}
      <header className={styles.pageHeader}>
        <div className={`container ${styles.headerContainer}`}>
          <h1 className={styles.title}>Selected work</h1>
          <p className={styles.subtitle}>
            A collection of websites designed and developed for businesses, brands and digital experiences.
          </p>
        </div>
      </header>

      {/* Filters */}
      <div className={styles.filterSection}>
        <div className={`container ${styles.filterContainer}`}>
          <ul className={styles.filterList}>
            {filters.map(filter => (
              <li key={filter}>
                <button
                  className={`${styles.filterButton} ${activeFilter === filter ? styles.active : ''}`}
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={activeFilter === filter}
                >
                  {filter}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Projects Grid */}
      <section className={styles.projectsGrid}>
        <div className={`container ${styles.gridContainer}`}>
          {filteredProjects.map((project, idx) => (
            <div key={project.id} className={styles.projectCard}>
              
              <div className={styles.projectMeta}>
                <div className={styles.metaTop}>
                  <h2 className={styles.projectName}>{project.title}</h2>
                  <span className={styles.projectCategory}>{project.category}</span>
                </div>
                <p className={styles.projectDescription}>{project.description}</p>
                
                <div className={styles.projectActions}>
                  <Link href={project.slug} className={styles.primaryAction}>
                    View Case Study <span className={styles.arrow}>&rarr;</span>
                  </Link>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className={styles.secondaryAction}>
                    Visit Live Website <span className={styles.arrowUp}>&#8599;</span>
                  </a>
                </div>
              </div>
              
              <div className={styles.visualWrapper}>
                <Link href={project.slug} className={styles.imageLink} aria-label={`View case study for ${project.title}`}>
                  <div className={styles.imagePlaceholder}>
                    {project.coverImage ? (
                      <Image 
                        src={project.coverImage} 
                        alt={`${project.title} case study preview`}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    ) : (
                      <span className={styles.placeholderText}>
                        {project.title} Screenshot <br />
                        <small>(Replace with high-res image)</small>
                      </span>
                    )}
                  </div>
                </Link>
              </div>
              
            </div>
          ))}

          {filteredProjects.length === 0 && (
            <div className={styles.emptyState}>
              <p>No projects found for this category.</p>
              <button onClick={() => setActiveFilter("All")} className="btn-secondary">
                View all projects
              </button>
            </div>
          )}
        </div>
      </section>

    </main>
  );
}

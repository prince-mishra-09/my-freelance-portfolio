import Link from 'next/link';
import Image from 'next/image';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project }) {
  return (
    <Link href={project.slug} className={styles.card}>
      <div className={styles.imageWrapper}>
        <div className={styles.placeholderImage}>
          <span>{project.title} Preview</span>
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.category}>{project.category}</p>
      </div>
    </Link>
  );
}

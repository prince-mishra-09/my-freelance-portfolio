import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          XWAKED
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><Link href="/work" className={styles.navLink}>Work</Link></li>
            <li><Link href="/services" className={styles.navLink}>Services</Link></li>
            <li><Link href="/process" className={styles.navLink}>Process</Link></li>
            <li><Link href="/about" className={styles.navLink}>About</Link></li>
            <li><Link href="/contact" className={styles.navLink}>Contact</Link></li>
          </ul>
        </nav>
        <div className={styles.navCta}>
          <Link href="/contact" className="btn-primary">
            Start a Project →
          </Link>
        </div>
      </div>
    </header>
  );
}

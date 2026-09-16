"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path) => {
    return pathname === path || pathname?.startsWith(path + '/');
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          XWAKED
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><Link href="/work" className={`${styles.navLink} ${isActive('/work') ? styles.active : ''}`}>Work</Link></li>
            <li><Link href="/services" className={`${styles.navLink} ${isActive('/services') ? styles.active : ''}`}>Services</Link></li>
            <li><Link href="/process" className={`${styles.navLink} ${isActive('/process') ? styles.active : ''}`}>Process</Link></li>
            <li><Link href="/about" className={`${styles.navLink} ${isActive('/about') ? styles.active : ''}`}>About</Link></li>
            <li><Link href="/contact" className={`${styles.navLink} ${isActive('/contact') ? styles.active : ''}`}>Contact</Link></li>
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

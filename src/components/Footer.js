import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerTop}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>XWAKED</Link>
            <p className={styles.tagline}>Web Design & Development</p>
          </div>
          <div className={styles.links}>
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Navigation</h4>
              <ul>
                <li><Link href="/work">Work</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/process">Process</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Connect</h4>
              <ul>
                <li><a href="https://wa.me/placeholder">WhatsApp</a></li>
                <li><a href="mailto:hello@placeholder.com">Email</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>&copy; {new Date().getFullYear()} Xwaked. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

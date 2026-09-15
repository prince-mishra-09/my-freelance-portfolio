import Link from 'next/link';
import styles from './Button.module.css';

export default function Button({ 
  children, 
  href, 
  variant = 'primary', 
  className = '', 
  onClick, 
  type = 'button' 
}) {
  const btnClass = `${styles.btn} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={btnClass}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={btnClass}>
      {children}
    </button>
  );
}

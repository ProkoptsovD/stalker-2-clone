import React from 'react';
import styles from './hamburger.module.css';

function Hamburger({ className, onClick, isExpanded, ...restProps }: HumburgerProps) {
  function hamburgerClickHandler(event: React.MouseEvent<HTMLButtonElement>) {
    const btn = event.currentTarget;
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
      btn.setAttribute('aria-expanded', 'false');
    } else {
      btn.setAttribute('aria-expanded', 'true');
    }

    if (onClick) onClick(event);
  }

  return (
    <button
      className={`${styles.hamburger_btn} ${className ?? ''}`}
      onClick={hamburgerClickHandler}
      aria-expanded={isExpanded}
      {...restProps}
    >
      <span className={styles.line} />
      <span className={styles.line} />
      <span className={styles.line} />
    </button>
  );
}

export default Hamburger;

export interface HumburgerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isExpanded: boolean;
}

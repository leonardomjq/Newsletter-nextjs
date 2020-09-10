import React from 'react';
import styles from './Nav.module.css';

export function Navbar(props) {
  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.logo}>
        {'<'}
        <strong>DevGoldNuggets</strong>
        {' />'}
      </a>
      <ul className={styles.navbarNav}>{props.children}</ul>
    </nav>
  );
}

export function NavItem(props) {
  return (
    <li className={styles.navItem}>
      <a href="#" className={styles.icon}>
        {props.icon}
      </a>
    </li>
  );
}

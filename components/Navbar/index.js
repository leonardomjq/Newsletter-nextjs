import React from 'react';
import styles from './Nav.module.scss';

export function Navbar(props) {
  return (
    <nav>
      <nav className={styles.navbar}>
        <a href="/" className={styles.logo}>
          {'<'}
          <strong>DevGoldNuggets</strong>
          {' />'}
        </a>
        <ul className={styles.wrapNavItem}>{props.children}</ul>
      </nav>
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

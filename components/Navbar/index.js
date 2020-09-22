import React from 'react';
import styles from './Nav.module.scss';
import Logo from '../../public/logo.svg';

export function Navbar(props) {
  return (
    <nav>
      <nav className={styles.navbar}>
        <ul href="/" className={styles.logo}>
          <Logo alt="Meat by Monjin Friends from the Noun Project" />
        </ul>
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

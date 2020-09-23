import React from 'react';
import styles from './Nav.module.scss';
import Logo from '../../public/logo.svg';

export function Navbar(props) {
  return (
    <nav>
      <nav className={styles.navbar}>
        <ul href="/" className={styles.logo}>
          <Logo alt="Bubblegum.dev logo image" />
        </ul>
        <ul className={styles.wrapNavItem}>{props.children}</ul>
      </nav>
    </nav>
  );
}

export function NavItem(props) {
  return (
    <li className={styles.navItem}>
      <a
        href="https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fplatform.twitter.com%2F&ref_src=twsrc%5Etfw&screen_name=leokindacodes&tw_p=followbutton"
        target="_blank"
        className={styles.icon}
      >
        {props.icon}
      </a>
    </li>
  );
}

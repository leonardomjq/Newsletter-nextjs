import React from 'react';
import styles from './Nav.module.scss';
import Nugget from '../../public/nuggets.svg';

export function Navbar(props) {
  return (
    <div>
      <nav className={styles.navbar}>
        <a href="/" className={styles.logo}>
          {'<'}
          <strong>DevGoldNuggets</strong>
          {' />'}
        </a>
        <ul className={styles.wrapNavItem}>{props.children}</ul>
      </nav>
    </div>
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

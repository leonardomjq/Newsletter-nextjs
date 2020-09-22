import React from 'react';
import styles from '../Hero/Hero.module.scss';
import Subscribe from '../Subscribe';

export default function Hero() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.hero}>
        <h1>Hottest Newsletter</h1>
        <p>
          Made for developers who want to have an edge over <br />
          <strong>what's trending</strong> in web development.
          <br />
        </p>
      </div>
      <Subscribe />
    </header>
  );
}

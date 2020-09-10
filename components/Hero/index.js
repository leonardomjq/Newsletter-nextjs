import React from 'react';
import styles from '../Hero/Hero.module.css';

export default function Hero() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.hero}>
        <h1>Hottest Newsletter</h1>
        <p>
          Once a week, a free critically curated resource. Made for developers
          who want to have an edge over <strong>what's trending</strong> in web
          development.
          <br />
        </p>
      </div>
      <div className={styles.wrapSignUp}>
        <input type="text" placeholder="Your email address" />
        <button>Subscribe</button>
      </div>
      {/* <Blob1 className={styles.blob} /> */}
    </div>
  );
}

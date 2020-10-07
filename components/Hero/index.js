import React from 'react';
import styles from '../Hero/Hero.module.scss';
import Subscribe from '../Subscribe';

export default function Hero() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.hero}>
        <h1>The Sticky Newsletter</h1>
        <p>
          Made for developers who want to have an edge over resources that are
          currently <strong>trending</strong> in web development.
          <br />
        </p>
      </div>
      <Subscribe />
      {/* <div className={styles.producthunt}>
        <a
          href="https://www.producthunt.com/posts/bubblegum-dev?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-bubblegum-dev"
          target="_blank"
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=269088&theme=dark"
            alt="Bubblegum.dev - Sweetest dev resources delivered to your inbox, weekly 🍬🍬 | Product Hunt"
          />
        </a>
      </div> */}
    </header>
  );
}

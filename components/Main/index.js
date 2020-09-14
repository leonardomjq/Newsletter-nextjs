import React from 'react';
import styles from './Main.module.scss';

export default function Main() {
  return (
    <div>
      <section>
        <div className={styles.grid}>
          <div className={styles.text}>
            <h2>
              <strong>Why</strong> another newsletter?
            </h2>
          </div>
          <img src="/spaceship.png" className={styles.image} />
        </div>
      </section>

      <section>
        <div className={styles.outerBox}>
          <div className={styles.box}>
            <h1>+1000 Reactions 🥳</h1>
          </div>
          <div className={styles.card}>
            <img src="/pinned.png" />
            <img src="/pinned.png" />
            <img src="/pinned.png" />
            <img src="/pinned.png" />
          </div>
          <h2>Started as a hobby, turned into an addiction.</h2>
        </div>
      </section>

      <section>
        <div className={styles.grid}>
          <img src="/astronaut.png" className={styles.image} />
          <div className={styles.text}>
            <h2>
              <strong>Why</strong> another newsletter?
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}

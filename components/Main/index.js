import React from 'react';
import InfoBox from '../InfoBox';
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
            <h2>Well, its free. 🤩</h2>
          </div>
          <img src="/spaceship.png" />
        </div>
        <InfoBox>+1000 Reactions on Dev.to, so it's worth your email</InfoBox>
      </section>
    </div>
  );
}

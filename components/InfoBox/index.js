import React from 'react';
import styles from './InfoBox.module.scss';

export default function InfoBox(props) {
  return (
    <div className={styles.outerBox}>
      <div className={styles.box}>
        <h1>{props.children}</h1>
      </div>
    </div>
  );
}

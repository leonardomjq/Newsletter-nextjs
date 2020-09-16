import React from 'react';
import styles from './Box.module.scss';

export default function Box(props) {
  return (
    <div className={styles.outerBox}>
      <div className={styles.box}>
        <h1>{props.children}</h1>
      </div>
    </div>
  );
}

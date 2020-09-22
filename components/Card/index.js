import React from 'react';
import styles from './Card.module.scss';

export default function Card(props) {
  return (
    <article className={styles.card}>
      <header className={styles.cardHeader}>
        <p>{props.date}</p>
        <h2>{props.text}</h2>
      </header>
      <div className={styles.cardAuthor}>
        <a className={styles.authorAvatar} href="#">
          <img src={props.img} alt="rouded for profile" />
        </a>
        <div className={styles.authorName}>{props.name}</div>
      </div>
    </article>
  );
}

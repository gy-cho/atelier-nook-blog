import React from 'react';
import styles from '../styles/Button.module.css';

const Blog2 = () => {
  return (
    <div>
      <div className={styles.container}>
        <a className={`${styles.btn} ${styles.btn_1}`}>Hover me</a>
        <a className={`${styles.btn} ${styles.btn_2}`}>Hover me</a>
        <a className={`${styles.btn} ${styles.btn_3}`}>Hover me</a>
        <a className={`${styles.btn} ${styles.btn_4}`}>Hover me</a>
        <a className={`${styles.btn} ${styles.btn_5}`}>Hover me</a>
      </div>{' '}
    </div>
  );
};

export default Blog2;

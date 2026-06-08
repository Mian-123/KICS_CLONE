import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.badge}>Error 404</div>
        <h1 className={styles.title}>Lost in <span className={styles.goldText}>Cyberspace?</span></h1>
        <p className={styles.message}>
          The page you are looking for has been moved or doesn't exist. 
          Let's get you back to the Al-Khwarizmi Institute.
        </p>
        
        <div className={styles.actions}>
          <Link to="/" className={styles.primaryBtn}>Return Home</Link>
          <Link to="/contact" className={styles.secondaryBtn}>Report Issue</Link>
        </div>
      </div>
      
      <div className={styles.visual}>
        <div className={styles.ghostIcon}>404</div>
        <div className={styles.glow}></div>
      </div>

      <div className={styles.geometricDecor}>
        <div className={styles.rect1}></div>
        <div className={styles.rect2}></div>
      </div>
    </div>
  );
};

export default NotFound;

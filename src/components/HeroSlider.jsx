import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeroSlider.module.css';

const HeroSlider = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBackground}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/aa/UET_Main_Block.jpg" alt="UET Main Building" />
        <div className={styles.overlay}></div>
      </div>
      
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <div className={styles.badgeWrapper}>
            <span className={styles.badge}>
              <span className={styles.badgePulse}></span>
              Official Institute of UET Lahore
            </span>
          </div>
          
          <h1 className={styles.title}>
            Al-Khwarizmi Institute <br /> of <span className={styles.goldText}>Computer Science</span>
          </h1>
          
          <p className={styles.description}>
            A premier center for excellence in research, innovation, and technological development since 2002.
          </p>
          
          <div className={styles.actions}>
            <Link to="/research" className={styles.primaryBtn}>Our Research Labs</Link>
            <Link to="/about" className={styles.secondaryBtn}>Learn More About KICS</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;

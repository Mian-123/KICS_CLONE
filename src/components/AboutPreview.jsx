import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AboutPreview.module.css';
import directorImg from '../assets/images/Director.jfif';

const AboutPreview = () => {
  return (
    <section className={styles.previewSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          <div className={styles.imageCol}>
            <div className={styles.imageWrapper}>
              <img src={directorImg} alt="Director KICS" />
              <div className={styles.experienceBadge}>
                <strong>22+</strong>
                <span>Years of Excellence</span>
              </div>
            </div>
          </div>
          
          <div className={styles.contentCol}>
            <div className={styles.tag}>About the Institute</div>
            <h2 className={styles.title}>Innovation through <span className="text-gradient">Applied Research</span></h2>
            <p className={styles.description}>
              Established in 2002, the Al-Khwarizmi Institute of Computer Science (KICS) at UET Lahore has been 
              a cornerstone of technological advancement in Pakistan. We bridge the gap between academic 
              theory and industrial reality.
            </p>
            
            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.featureDot}></div>
                <p>Leading multiple state-funded research initiatives</p>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureDot}></div>
                <p>Home to 20+ specialized research labs</p>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureDot}></div>
                <p>Pioneer in AI and Sustainable Energy solutions</p>
              </div>
            </div>
            
            <div className={styles.actions}>
              <Link to="/about#director" className={styles.readMoreBtn}>Full Message from Director</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;

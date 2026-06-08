import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './TechEcosystem.module.css';

const TechEcosystem = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.ecoSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.glassCard}>
          <div className={styles.content}>
            <div className={styles.badge}>Technology Ecosystem</div>
            <h2 className={styles.title}>Incubating the <span className="text-gradient">Future</span></h2>
            <p className={styles.description}>
              KICS isn't just about research; we are an engine for entrepreneurship. 
              We've successfully incubated multiple startups and technology centers 
              that are now leaders in the local and global markets.
            </p>
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <strong>15+</strong>
                <span>Startups</span>
              </div>
              <div className={styles.statItem}>
                <strong>40+</strong>
                <span>Patents</span>
              </div>
              <div className={styles.statItem}>
                <strong>100+</strong>
                <span>Products</span>
              </div>
            </div>
          </div>
          <div className={styles.cta}>
            <button className={styles.ctaBtn} onClick={() => navigate('/research')}>View Our Portfolio</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechEcosystem;

import React from 'react';
import styles from './PageHeader.module.css';

const PageHeader = ({ title, subtitle, breadcrumb }) => {
  return (
    <section className={styles.pageHeader}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <nav className={styles.breadcrumb}>
            <span className={styles.homeLink}>Home</span>
            <span className={styles.separator}>/</span>
            <span className={styles.current}>{breadcrumb}</span>
          </nav>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
      </div>
      <div className={styles.geometricShapes}>
        <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
      </div>
    </section>
  );
};

export default PageHeader;

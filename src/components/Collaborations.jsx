import React from 'react';
import styles from './Collaborations.module.css';

const Collaborations = () => {
  const partners = [
    { name: "IEEE Computer Society", logo: "IEEE" },
    { name: "Netsol", logo: "Netsol" },
    { name: "HEC Pakistan", logo: "HEC" },
    { name: "Huawei", logo: "Huawei" },
    { name: "MIT", logo: "MIT" },
    { name: "Techlogix", logo: "Techlogix" },
    { name: "Xavor", logo: "Xavor" },
    { name: "UET Lahore", logo: "UET" }
  ];

  return (
    <section className={styles.collabSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h3>Trusted by Global Leaders</h3>
          <div className={styles.line}></div>
        </div>
        
        <div className={styles.logoGrid}>
          {partners.map((partner, idx) => (
            <div key={idx} className={styles.partnerCard}>
              <div className={styles.logoPlaceholder}>
                <span>{partner.logo}</span>
              </div>
              <p>{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collaborations;

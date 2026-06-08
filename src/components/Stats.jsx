import React from 'react';
import styles from './Stats.module.css';

const Stats = () => {
  const stats = [
    { value: "15+", label: "Research Labs" },
    { value: "500+", label: "Publications" },
    { value: "10K+", label: "Alumni & Students" },
    { value: "50+", label: "Global Partners" }
  ];

  return (
    <section className={styles.statsSection}>
      <div className={`container ${styles.container}`}>
        <div className={`glass ${styles.statsCard}`}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <h3 className="text-gradient">{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

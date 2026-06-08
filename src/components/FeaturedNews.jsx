import React from 'react';
import styles from './FeaturedNews.module.css';

const FeaturedNews = () => {
  const news = [
    {
      title: "AquaTech Fisheries Wins $20K at NVC-2026",
      desc: "Join the Inspiring Startup Showcase and see how our incubatees are changing the industry.",
      date: "May 10, 2024"
    },
    {
      title: "KICS & MNS-UET Multan Sign MoU",
      desc: "Strategic partnership for Campus Solution 360 Implementation.",
      date: "May 08, 2024"
    },
    {
      title: "Director Appointment",
      desc: "Prof. Dr. Hafiz Shahzad Asif Appointed Director of KICS, UET Lahore.",
      date: "May 05, 2024"
    }
  ];

  return (
    <section className={styles.featuredSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2>Featured News</h2>
          <div className={styles.line}></div>
        </div>
        <div className={styles.grid}>
          {news.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardImage}>
                {/* Reverting to placeholder div style as requested to keep data same */}
              </div>
              <div className={styles.cardContent}>
                <span className={styles.date}>{item.date}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <a href="javascript:void(0)" className={styles.readMore}>Read More &rarr;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedNews;

import React, { useState } from 'react';
import styles from './NewsEvents.module.css';

const NewsEvents = () => {
  const [activeTag, setActiveTag] = useState('All');
  const tags = ['All', 'Research', 'Events', 'Announcements'];

  const featured = {
    title: "Aquatech Fisheries Wins $20K at NVC 2026",
    desc: "A massive achievement by our incubation center, demonstrating the potential of AI-driven aquaculture systems in scaling sustainable food production.",
    date: "May 10, 2024",
    tag: "Research",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  };

  const newsList = [
    {
      title: "Prof. Dr. Hafiz Shahzad Asif Appointed Director",
      date: "May 05, 2024",
      tag: "Announcements"
    },
    {
      title: "UET Lahore Hosts Lecture on Philosophy of Fasting",
      date: "Apr 28, 2024",
      tag: "Events"
    },
    {
      title: "KICS & MNS-UET Multan Sign Strategic MoU",
      date: "Apr 15, 2024",
      tag: "Announcements"
    }
  ];

  return (
    <section className={styles.newsSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2>News & Updates</h2>
          <div className={styles.tags}>
            {tags.map(tag => (
              <button 
                key={tag} 
                className={`${styles.tagBtn} ${activeTag === tag ? styles.active : ''}`}
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.grid}>
          {/* Featured Post */}
          <div className={styles.featuredCard}>
            <div className={styles.featuredImage}>
              <img src={featured.image} alt={featured.title} />
              <span className={styles.badge}>{featured.tag}</span>
            </div>
            <div className={styles.featuredContent}>
              <span className={styles.date}>{featured.date}</span>
              <h3>{featured.title}</h3>
              <p>{featured.desc}</p>
              <a href="javascript:void(0)" className={styles.readMore}>Read Full Story &rarr;</a>
            </div>
          </div>

          {/* News List */}
          <div className={styles.listWrapper}>
            {newsList.map((news, index) => (
              <div key={index} className={styles.listItem}>
                <div className={styles.listMeta}>
                  <span className={styles.listBadge}>{news.tag}</span>
                  <span className={styles.listDate}>{news.date}</span>
                </div>
                <h4><a href="javascript:void(0)">{news.title}</a></h4>
              </div>
            ))}
            <button className={styles.viewAllBtn}>View All News</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;

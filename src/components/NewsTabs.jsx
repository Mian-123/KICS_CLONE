import React, { useState } from 'react';
import styles from './NewsTabs.module.css';

const NewsTabs = () => {
  const [activeTab, setActiveTab] = useState('news');

  const tabs = [
    { id: 'news', label: 'News & Events' },
    { id: 'workshops', label: 'Workshops & Seminar' },
    { id: 'media', label: 'Media Clippings' },
    { id: 'newsletter', label: 'KICS Newsletter' },
    { id: 'tender', label: 'Tender Notice' },
  ];

  return (
    <section className={styles.tabsSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.tabHeaders}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tabBtn} ${activeTab === tab.id ? styles.active : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        <div className={styles.tabContent}>
          {activeTab === 'news' && (
            <div className={styles.contentPane}>
              <h3>Latest Updates and Announcements</h3>
              <ul className={styles.newsList}>
                <li><span className={styles.date}>May 10, 2024</span> <a href="javascript:void(0)">AquaTech Fisheries Wins $20K at NVC-2026</a></li>
                <li><span className={styles.date}>May 08, 2024</span> <a href="javascript:void(0)">KICS & MNS-UET Multan Sign MoU</a></li>
                <li><span className={styles.date}>May 05, 2024</span> <a href="javascript:void(0)">Prof. Dr. Hafiz Shahzad Asif Appointed Director</a></li>
              </ul>
            </div>
          )}
          {activeTab === 'workshops' && (
            <div className={styles.contentPane}>
              <h3>Upcoming Workshops</h3>
              <p>Information on upcoming educational sessions and seminars will be updated here soon.</p>
            </div>
          )}
          {activeTab === 'media' && (
            <div className={styles.contentPane}>
              <h3>Media Coverage</h3>
              <p>Explore recent mentions of KICS in national and international media.</p>
            </div>
          )}
          {activeTab === 'newsletter' && (
            <div className={styles.contentPane}>
              <h3>KICS Newsletters</h3>
              <p>Download our periodic updates and reports from the community.</p>
            </div>
          )}
          {activeTab === 'tender' && (
            <div className={styles.contentPane}>
              <h3>Official Tender Notices</h3>
              <p>Procurement notices and bidding documents are available for download.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsTabs;

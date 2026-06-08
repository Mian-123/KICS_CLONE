import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './InformationHub.module.css';
import { FaBullhorn, FaCalendarAlt, FaFileContract, FaNewspaper } from 'react-icons/fa';

const InformationHub = () => {
  const [activeTab, setActiveTab] = useState('News');
  const navigate = useNavigate();
  
  const tabs = ['News', 'Events', 'Tenders', 'Newsletter'];
  
  const newsItems = [
    {
      title: "AquaTech Fisheries Wins $20K at NVC 2026",
      date: "May 10, 2024",
      tag: "Achievement",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Prof. Dr. Hafiz Shahzad Asif Appointed Director",
      date: "May 05, 2024",
      tag: "Announcement"
    },
    {
      title: "KICS & MNS-UET Multan Sign Strategic MoU",
      date: "Apr 15, 2024",
      tag: "Collaboration"
    }
  ];

  const tenders = [
    { title: "Procurement of High-End Computing Servers", date: "May 12, 2024", id: "KICS/PUR/04/2024" },
    { title: "Laboratory Equipment for IoT Lab", date: "May 08, 2024", id: "KICS/PUR/03/2024" }
  ];

  return (
    <section className={styles.hubSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2>Institute <span className="text-gradient">Information Hub</span></h2>
          <div className={styles.tabs}>
            {tabs.map(tab => (
              <button 
                key={tab} 
                className={`${styles.tabBtn} ${activeTab === tab ? styles.active : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.featuredPane}>
            <div className={styles.featuredImage}>
              <img src={newsItems[0].image} alt="Featured" />
              <span className={styles.tag}>{newsItems[0].tag}</span>
            </div>
            <div className={styles.featuredText}>
              <span className={styles.date}>{newsItems[0].date}</span>
              <h3>{newsItems[0].title}</h3>
              <p>Showcasing the potential of AI-driven aquaculture systems in scaling sustainable food production for a better future.</p>
              <Link to="/news" className={styles.readMore}>Read Full Story &rarr;</Link>
            </div>
          </div>

          <div className={styles.listPane}>
            {activeTab === 'News' && newsItems.slice(1).map((item, idx) => (
              <div key={idx} className={styles.listItem}>
                <div className={styles.listMeta}>
                  <FaNewspaper className={styles.listIcon} />
                  <span>{item.date}</span>
                </div>
                <h4><Link to="/news">{item.title}</Link></h4>
              </div>
            ))}
            
            {activeTab === 'Tenders' && tenders.map((item, idx) => (
              <div key={idx} className={styles.listItem}>
                <div className={styles.listMeta}>
                  <FaFileContract className={styles.listIcon} />
                  <span>{item.date}</span>
                </div>
                <h4><Link to="/news#tenders">{item.title}</Link></h4>
                <small className={styles.tenderId}>{item.id}</small>
              </div>
            ))}

            {activeTab === 'Events' && (
              <div className={styles.emptyState}>
                <FaCalendarAlt />
                <p>No upcoming events scheduled for this week. <Link to="/conferences" style={{color: 'var(--primary)', fontWeight: 'bold'}}>Check back soon!</Link></p>
              </div>
            )}

            {activeTab === 'Newsletter' && (
              <div className={styles.newsletterCard}>
                <FaBullhorn />
                <h4>Get the KICS Times</h4>
                <p>Subscribe to our monthly newsletter for research highlights and updates.</p>
                <div className={styles.subscribeBox}>
                  <input type="email" placeholder="Your email" />
                  <button onClick={() => alert('Thank you for subscribing to KICS Newsletter!')}>Join</button>
                </div>
              </div>
            )}

            <button 
              className={styles.viewAllBtn}
              onClick={() => {
                const urls = {
                  'News': '/news',
                  'Events': '/conferences',
                  'Tenders': '/news',
                  'Newsletter': '/news'
                };
                navigate(urls[activeTab]);
              }}
            >
              View All {activeTab}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformationHub;

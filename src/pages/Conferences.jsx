import React from 'react';
import PageHeader from '../components/PageHeader';
import styles from './Conferences.module.css';
import { FaCalendarCheck, FaGlobeAmericas, FaMicrophoneAlt } from 'react-icons/fa';

const Conferences = () => {
  const events = [
    { title: "ICOSST 2026", date: "Dec 15-17, 2026", type: "Upcoming", desc: "International Conference on Open Source Systems and Technologies - Focus on AI & Security." },
    { title: "HONET 2025", date: "Oct 20-22, 2025", type: "Past", desc: "High Capacity Optical Networks and Enabling Technologies - 20th Anniversary Edition." },
    { title: "EEW 2025", date: "May 10, 2025", type: "Upcoming", desc: "Energy Efficiency Workshop for Industrial Leaders and Policy Makers." }
  ];

  return (
    <div className={styles.confPage}>
      <PageHeader 
        title="Conferences & Events" 
        subtitle="Convening the brightest minds in computing and engineering from across the globe."
        breadcrumb="Conferences"
      />

      {/* 1. Global Impact Section - NEW */}
      <section className={styles.impactSection}>
         <div className="container">
            <div className={styles.impactGrid}>
               <div className={styles.impactCard}>
                  <FaGlobeAmericas className={styles.impactIcon} />
                  <h3>Global Reach</h3>
                  <p>Our conferences attract participants from over 50 countries annually.</p>
               </div>
               <div className={styles.impactCard}>
                  <FaMicrophoneAlt className={styles.impactIcon} />
                  <h3>Elite Speakers</h3>
                  <p>Featuring keynotes from IEEE Fellows and industry pioneers.</p>
               </div>
            </div>
         </div>
      </section>

      {/* 2. Event Schedule - Professional List */}
      <section className={styles.eventSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Event <span className="text-gradient">Schedule</span></h2>
            <div className={styles.filters}>
               <button className={`${styles.filterBtn} ${styles.active}`}>All Events</button>
               <button className={styles.filterBtn}>Upcoming</button>
               <button className={styles.filterBtn}>Past</button>
            </div>
          </div>

          <div className={styles.eventGrid}>
            {events.map((event, index) => (
              <div key={index} className={styles.eventCard}>
                <div className={styles.dateBadge}>
                  <span className={styles.day}>{event.date.split(' ')[1].split('-')[0]}</span>
                  <span className={styles.month}>{event.date.split(' ')[0]}</span>
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.tagWrapper}>
                     <span className={`${styles.tag} ${styles[event.type.toLowerCase()]}`}>{event.type}</span>
                     <span className={styles.eventYear}>{event.date.split(', ')[1]}</span>
                  </div>
                  <h3>{event.title}</h3>
                  <p className={styles.eventDesc}>{event.desc}</p>
                  <div className={styles.cardFooter}>
                     <button className={styles.detailsBtn}>View Full Schedule</button>
                     <button className={styles.registerBtn}>Register Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Call for Papers - NEW SECTION */}
      <section className={styles.cfpSection}>
         <div className="container">
            <div className={styles.cfpBox}>
               <div className={styles.cfpContent}>
                  <FaCalendarCheck className={styles.cfpIcon} />
                  <h2>Call for Papers 2026</h2>
                  <p>Submit your original research for review by our international technical committee. Join a legacy of high-impact publications.</p>
                  <button className={styles.whiteBtn}>Submission Guidelines</button>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Conferences;

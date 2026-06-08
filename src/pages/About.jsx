import React from 'react';
import PageHeader from '../components/PageHeader';
import styles from './About.module.css';
import { FaHistory, FaAward, FaUsers, FaGlobe } from 'react-icons/fa';
import directorImg from '../assets/images/Director.jfif';

const About = () => {
  return (
    <div className={styles.aboutPage}>
      <PageHeader 
        title="About KICS" 
        subtitle="Driving innovation and excellence in computer science research since 2002."
        breadcrumb="About Us"
      />
      
      {/* 1. Vision & Mission with High Contrast */}
      <section id="vision" className={styles.visionSection}>
        <div className={`container ${styles.grid}`}>
          <div className={styles.imagePlaceholder}>
            <div className={styles.overlay}></div>
            <span className={styles.imageLabel}>Innovating for the Future</span>
          </div>
          <div className={styles.textContent}>
            <h2 className={styles.sectionTitle}>Our <span className="text-gradient">Vision & Mission</span></h2>
            <p className={styles.lead}>To be a global leader in computing research and development, fostering an ecosystem of innovation that serves society.</p>
            <div className={styles.details}>
              <div className={styles.detailBox}>
                <FaGlobe className={styles.detailIcon} />
                <div>
                  <h3>Global Excellence</h3>
                  <p>We strive for the highest standards in every research endeavor and technological solution we provide to the world.</p>
                </div>
              </div>
              <div className={styles.detailBox}>
                <FaAward className={styles.detailIcon} />
                <div>
                  <h3>Impactful Innovation</h3>
                  <p>Pushing boundaries through creative thinking and advanced engineering to solve real-world problems.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Director's Message - Enhanced Professionalism */}
      <section id="director" className={styles.directorSection}>
        <div className={`container ${styles.grid} ${styles.reverse}`}>
          <div className={styles.textContent}>
            <div className={styles.quoteMark}>"</div>
            <h2 className={styles.sectionTitle}>Director's <span className="text-gradient">Message</span></h2>
            <p className={styles.professionalText}>Welcome to the Al-Khwarizmi Institute of Computer Science (KICS). As a hub of technological advancement at UET Lahore, we are dedicated to bridging the gap between academia and industry.</p>
            <p className={styles.professionalText}>Our focus remains on high-impact research that addresses real-world challenges, particularly in AI, IoT, and Sustainable Energy. We invite you to explore our ecosystem and join us in our journey of discovery.</p>
            <div className={styles.signature}>
              <strong>Prof. Dr. Hafiz Shahzad Asif</strong>
              <span>Director, KICS UET Lahore</span>
            </div>
          </div>
          <div className={styles.directorImageFrame}>
             <div className={styles.directorImg}>
                <img src={directorImg} alt="Director KICS" />
             </div>
             <div className={styles.goldFrame}></div>
          </div>
        </div>
      </section>

      {/* 3. History & Milestone - NEW SECTION */}
      <section className={styles.historySection}>
        <div className="container">
          <div className={styles.centeredHeader}>
            <h2 className={styles.sectionTitle}>Our <span className="text-gradient">Legacy</span></h2>
            <p>A journey of excellence spanning over two decades of technical leadership.</p>
          </div>
          <div className={styles.timeline}>
             <div className={styles.timelineItem}>
                <div className={styles.year}>2002</div>
                <div className={styles.timelineContent}>
                   <h4>Inception</h4>
                   <p>KICS was established with the vision of promoting research in computer science.</p>
                </div>
             </div>
             <div className={styles.timelineItem}>
                <div className={styles.year}>2010</div>
                <div className={styles.timelineContent}>
                   <h4>Global Recognition</h4>
                   <p>Achieved international status through collaborations with top-tier universities.</p>
                </div>
             </div>
             <div className={styles.timelineItem}>
                <div className={styles.year}>2024</div>
                <div className={styles.timelineContent}>
                   <h4>AI Leadership</h4>
                   <p>Established as a premier center for AI research and development in the region.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. Staff Directory - High-End Presentation */}
      <section id="staff" className={styles.staffSection}>
        <div className={`container`}>
          <div className={styles.centeredHeader}>
            <h2 className={styles.sectionTitle}>Technical <span className="text-gradient">Leadership</span></h2>
            <p>Our team consists of world-class researchers and engineers dedicated to technical excellence.</p>
          </div>
          <div className={styles.staffGrid}>
            {[1, 2, 3, 4].map(i => (
              <div key={i} className={styles.staffCard}>
                <div className={styles.staffImage}></div>
                <div className={styles.staffInfo}>
                  <h3>Lead Researcher {i}</h3>
                  <span className={styles.designation}>PhD in Artificial Intelligence</span>
                  <p>Specializing in Neural Networks and deep learning architectures for industrial applications.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Career Opportunities - NEW SECTION */}
      <section id="jobs" className={styles.jobsSection}>
        <div className="container">
           <div className={styles.jobsBox}>
              <h2 className={styles.sectionTitle}>Careers at <span className="text-gradient">KICS</span></h2>
              <p>We are always looking for passionate researchers, developers, and engineers to join our mission. Explore our current openings and become part of a leading innovation ecosystem.</p>
              <div className={styles.jobActions}>
                 <button className={styles.primaryBtn}>View Open Positions</button>
                 <button className={styles.secondaryBtn}>Internship Program</button>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default About;

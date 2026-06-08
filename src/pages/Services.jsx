import React from 'react';
import PageHeader from '../components/PageHeader';
import styles from './Services.module.css';
import { FaLaptopCode, FaUserTie, FaChalkboardTeacher, FaCheckCircle, FaHandshake } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      title: "Software Solutions",
      icon: <FaLaptopCode />,
      desc: "Custom enterprise software and high-performance applications designed to automate complex industrial processes.",
      features: ["Custom ERP Development", "Mobile App Ecosystems", "Cloud Infrastructure"]
    },
    {
      title: "Consultancy",
      icon: <FaUserTie />,
      desc: "Strategic technical advisory for digital transformation, R&D strategy, and infrastructure optimization.",
      features: ["IT Strategy & Roadmap", "Technical Feasibility", "Audit & Compliance"]
    },
    {
      title: "Training Programs",
      icon: <FaChalkboardTeacher />,
      desc: "Advanced certification programs in networking, AI, and cybersecurity for professional growth.",
      features: ["Cisco Certification", "AI & Machine Learning", "Cybersecurity Expert"]
    }
  ];

  return (
    <div className={styles.servicesPage}>
      <PageHeader 
        title="Professional Services" 
        subtitle="Bridging research and industry with world-class technical solutions and consultancy."
        breadcrumb="Services"
      />

      {/* 1. Our Approach - NEW SECTION */}
      <section className={styles.approachSection}>
         <div className="container">
            <div className={styles.approachHeader}>
               <h2 className={styles.sectionTitle}>Our <span className="text-gradient">Approach</span></h2>
               <p>We combine academic rigor with industrial efficiency to deliver high-impact results.</p>
            </div>
            <div className={styles.approachGrid}>
               <div className={styles.approachItem}>
                  <FaHandshake className={styles.approachIcon} />
                  <h4>Collaborative Partnering</h4>
                  <p>We work as an extension of your team to understand unique challenges.</p>
               </div>
               <div className={styles.approachItem}>
                  <FaCheckCircle className={styles.approachIcon} />
                  <h4>Quality Assurance</h4>
                  <p>Every solution undergoes rigorous testing and validation in our labs.</p>
               </div>
            </div>
         </div>
      </section>

      {/* 2. Services Grid - Enhanced Cards */}
      <section className={styles.mainContent}>
        <div className="container">
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.iconWrapper}>{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <div className={styles.divider}></div>
                <ul className={styles.featureList}>
                  {service.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
                <button className={styles.contactBtn}>Request Proposal &rarr;</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Industrial Partners - NEW SECTION */}
      <section className={styles.partnersSection}>
         <div className="container">
            <div className={styles.partnersTitle}>
               <h3>Trusted by <span className={styles.goldText}>Leading Organizations</span></h3>
            </div>
            <div className={styles.logoCloud}>
               {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className={styles.logoItem}>Industry Logo {i}</div>
               ))}
            </div>
         </div>
      </section>

      {/* 4. Professional CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaBox}>
            <div className={styles.ctaContent}>
               <h2>Empower Your Next High-Impact Project</h2>
               <p>Partner with KICS and leverage our state-of-the-art research ecosystem for your industrial needs.</p>
               <button className={styles.primaryBtn}>Schedule a Consultation</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

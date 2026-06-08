import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ResearchLabs.module.css';
import { FaMicrochip, FaRobot, FaNetworkWired, FaCode } from 'react-icons/fa';

const ResearchLabs = () => {
  const labs = [
    {
      title: "AI & Data Science",
      desc: "Advancing machine learning and deep neural networks for industrial and social impact.",
      icon: <FaRobot />
    },
    {
      title: "IoT & Embedded",
      desc: "Designing smart, connected systems for the next generation of urban infrastructure.",
      icon: <FaMicrochip />
    },
    {
      title: "Cybersecurity",
      desc: "Protecting critical data assets through advanced cryptography and threat intelligence.",
      icon: <FaNetworkWired />
    },
    {
      title: "Software Systems",
      desc: "Developing scalable, enterprise-grade software architectures for modern businesses.",
      icon: <FaCode />
    }
  ];

  return (
    <section className={styles.labsSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>Specialized <span className="text-gradient">Research Labs</span></h2>
          <p className={styles.subtitle}>Our labs are dedicated to pushing the boundaries of what's possible in the digital age.</p>
        </div>
        
        <div className={styles.grid}>
          {labs.map((lab, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{lab.icon}</div>
              <h3>{lab.title}</h3>
              <p>{lab.desc}</p>
              <Link to="/research" className={styles.link}>Explore Lab &rarr;</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchLabs;

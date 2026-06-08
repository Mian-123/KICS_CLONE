import React from 'react';
import styles from './Domains.module.css';
import { FaSolarPanel, FaServer, FaCode, FaMicrochip } from 'react-icons/fa';

const Domains = () => {
  const domains = [
    {
      title: "Renewable Energy",
      desc: "Advancing sustainable energy solutions and smart grid technologies.",
      icon: <FaSolarPanel />
    },
    {
      title: "IoT & Big Data",
      desc: "Connecting the world through intelligent sensors and large-scale data analytics.",
      icon: <FaServer />
    },
    {
      title: "Application Software",
      desc: "Developing enterprise-grade software architectures and cloud-native applications.",
      icon: <FaCode />
    },
    {
      title: "Embedded Systems",
      desc: "Engineering next-generation microcontrollers and hardware-software integrations.",
      icon: <FaMicrochip />
    }
  ];

  return (
    <section className={styles.domainsSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2>Domains of Excellence</h2>
          <p>Pioneering research across key technological frontiers</p>
        </div>
        <div className={styles.grid}>
          {domains.map((domain, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                {domain.icon}
              </div>
              <h3>{domain.title}</h3>
              <p>{domain.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Domains;

import React from 'react';
import PageHeader from '../components/PageHeader';
import styles from './Research.module.css';
import { FaMicrochip, FaCogs, FaRocket, FaBook, FaProjectDiagram, FaLightbulb } from 'react-icons/fa';

const Research = () => {
  const labs = [
    { title: "AI & Data Science Lab", icon: <FaMicrochip />, desc: "Developing advanced neural architectures for computer vision and natural language processing in industrial automation." },
    { title: "IoT & Embedded Systems", icon: <FaRocket />, desc: "Specializing in low-power wireless networks, edge computing, and smart city infrastructure development." },
    { title: "Energy & Sustainability", icon: <FaCogs />, desc: "Researching renewable energy integration, smart grids, and energy-efficient building management systems." },
    { title: "Cybersecurity Center", icon: <FaBook />, desc: "Advancing digital forensics, blockchain security, and threat intelligence for critical national infrastructure." }
  ];

  const ongoingProjects = [
    { title: "Smart Traffic Management", category: "AI & IoT", budget: "State Funded" },
    { title: "Grid Resilience System", category: "Energy", budget: "Industry Sponsored" },
    { title: "Secure Health Data Exchange", category: "Cybersecurity", budget: "Research Grant" }
  ];

  return (
    <div className={styles.researchPage}>
      <PageHeader 
        title="Research & Technology" 
        subtitle="Exploring the frontiers of technology through interdisciplinary research and industrial collaboration."
        breadcrumb="Research"
      />

      {/* 1. Leading Technical Innovation */}
      <section className={styles.introSection}>
        <div className="container">
          <div className={styles.introGrid}>
            <div className={styles.introText}>
               <h2 className={styles.sectionTitle}>Leading <span className="text-gradient">Technical Innovation</span></h2>
               <p className={styles.lead}>KICS is home to state-of-the-art research labs and technology centers that bridge the gap between theoretical knowledge and large-scale practical application.</p>
               <div className={styles.statsStrip}>
                  <div className={styles.statBox}>
                     <strong>25+</strong>
                     <span>Research Labs</span>
                  </div>
                  <div className={styles.statBox}>
                     <strong>500+</strong>
                     <span>Publications</span>
                  </div>
                  <div className={styles.statBox}>
                     <strong>15+</strong>
                     <span>Tech Centers</span>
                  </div>
               </div>
            </div>
            <div className={styles.innovationGraphic}>
               <div className={styles.circle1}></div>
               <div className={styles.circle2}></div>
               <FaLightbulb className={styles.lightIcon} />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Research Labs - Card Grid */}
      <section id="labs" className={styles.labsSection}>
        <div className="container">
          <div className={styles.centeredHeader}>
             <h2 className={styles.sectionTitle}>Our <span className="text-gradient">Research Labs</span></h2>
             <p>Dedicated hubs for deep-tech exploration and specialized engineering.</p>
          </div>
          <div className={styles.labsGrid}>
            {labs.map((lab, index) => (
              <div key={index} className={styles.labCard}>
                <div className={styles.labIcon}>{lab.icon}</div>
                <div className={styles.labCardBody}>
                  <h3>{lab.title}</h3>
                  <p>{lab.desc}</p>
                  <button className={styles.labBtn}>Explore Lab Publications &rarr;</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Ongoing Projects - NEW SECTION */}
      <section className={styles.projectsSection}>
         <div className="container">
            <h2 className={styles.sectionTitle}>Ongoing <span className="text-gradient">Strategic Projects</span></h2>
            <div className={styles.projectList}>
               {ongoingProjects.map((proj, idx) => (
                  <div key={idx} className={styles.projectItem}>
                     <FaProjectDiagram className={styles.projIcon} />
                     <div className={styles.projInfo}>
                        <h4>{proj.title}</h4>
                        <span className={styles.projCategory}>{proj.category}</span>
                     </div>
                     <span className={styles.projBudget}>{proj.budget}</span>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 4. Tech Centers - Dark Blue Theme */}
      <section id="centers" className={styles.centersSection}>
        <div className={`container ${styles.centersGrid}`}>
           <div className={styles.centersText}>
              <h2 className={styles.sectionTitle}>Technology <span className="text-gradient">Centers</span></h2>
              <p className={styles.whiteText}>Our Technology Centers focus on product development, technology transfer, and industrial collaboration. We provide the infrastructure needed to turn research into commercial reality.</p>
              <div className={styles.centerFeatures}>
                <div className={styles.centerFeature}>
                   <h4>HPC Center</h4>
                   <p>Tier-1 supercomputing resources for complex simulations and data processing.</p>
                </div>
                <div className={styles.centerFeature}>
                   <h4>SDC Unit</h4>
                   <p>Professional software development house for enterprise-grade solutions.</p>
                </div>
              </div>
           </div>
           <div className={styles.graphicBox}>
              <div className={styles.nodesGraphic}></div>
              <span className={styles.graphicLabel}>Tech Ecosystem</span>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Research;

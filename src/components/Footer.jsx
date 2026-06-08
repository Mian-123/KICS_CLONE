import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { FaTwitter, FaLinkedinIn, FaGithub, FaPaperPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <Link to="/" style={{ textDecoration: 'none' }}>
               <h2 style={{ color: 'white' }}>KICS<span className={styles.dot}>.</span></h2>
            </Link>
            <p>Engineering the future through world-class research, artificial intelligence, and advanced technology at UET Lahore.</p>
            <div className={styles.socials}>
              <a href="https://twitter.com/kics_uet" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://www.linkedin.com/company/kicsuet/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
              <a href="https://github.com/kicsuet" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </div>
          </div>
          
          <div className={styles.linksCol}>
            <h3>Resources</h3>
            <ul>
              <li><Link to="/about#jobs">Jobs at KICS</Link></li>
              <li><Link to="/news#tenders">Tender Notices</Link></li>
              <li><Link to="/resources#downloads">Downloads</Link></li>
              <li><Link to="/about#policy">Plagiarism Policy</Link></li>
            </ul>
          </div>
          
          <div className={styles.linksCol}>
            <h3>Institute</h3>
            <ul>
              <li><Link to="/about#vision">Vision & Mission</Link></li>
              <li><Link to="/about#director">Director's Message</Link></li>
              <li><Link to="/about#staff">Staff Directory</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className={styles.newsletterCol}>
            <h3>Stay Updated</h3>
            <p>Get the latest research news and event updates delivered to your inbox.</p>
            <form className={styles.subscribeForm} onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Email address" required />
              <button type="submit"><FaPaperPlane /></button>
            </form>
          </div>
        </div>
      </div>
      
      <div className={styles.bottomBar}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Al-Khwarizmi Institute of Computer Science. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

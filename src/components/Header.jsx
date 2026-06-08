import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const navData = [
  {
    title: 'About KICS',
    path: '/about',
    links: [
      { label: 'Vision & Mission', path: '/about#vision' },
      { label: "Director's Message", path: '/about#director' },
      { label: 'Staff Directory', path: '/about#staff' },
      { label: 'Jobs at KICS', path: '/about#jobs' }
    ]
  },
  {
    title: 'Research & Tech',
    path: '/research',
    links: [
      { label: 'Research Labs', path: '/research#labs' },
      { label: 'Technology Centers', path: '/research#centers' },
      { label: 'Incubated Startups', path: '/research#startups' },
      { label: 'Publications', path: '/research#publications' }
    ]
  },
  {
    title: 'Conferences',
    path: '/conferences',
    links: [
      { label: 'Upcoming Conferences', path: '/conferences#upcoming' },
      { label: 'Past Events', path: '/conferences#past' },
      { label: 'Call for Papers', path: '/conferences#cfp' }
    ]
  },
  {
    title: 'Services',
    path: '/services',
    links: [
      { label: 'Software Solutions', path: '/services#software' },
      { label: 'Training Programs', path: '/services#training' },
      { label: 'Consultancy', path: '/services#consultancy' }
    ]
  },
  {
    title: 'What\'s New',
    path: '/news',
    links: [
      { label: 'Latest News', path: '/news#latest' },
      { label: 'Announcements', path: '/news#announcements' },
      { label: 'Media Gallery', path: '/news#media' }
    ]
  }
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();
  const pathname = location?.pathname || '/';

  useEffect(() => {
    setActiveMenu(null); 
    setMobileMenuOpen(false);
    window.scrollTo(0, 0); 
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.container}`}>
        <Link to="/" className={styles.logo}>
          <h2><span className={styles.u}>KICS</span> UET<span className={styles.dot}>.</span></h2>
        </Link>
        
        <nav className={`${styles.mainNav} ${mobileMenuOpen ? styles.mobileOpen : ''}`}>
          <ul className={styles.navLinks}>
            {navData.map((item, index) => (
              <li 
                key={index} 
                className={styles.navItem}
                onMouseEnter={() => !mobileMenuOpen && setActiveMenu(index)}
                onMouseLeave={() => !mobileMenuOpen && setActiveMenu(null)}
              >
                <div className={styles.navItemHeader}>
                  <Link 
                    to={item.path}
                    className={`${styles.navBtn} ${pathname === item.path ? styles.active : ''}`}
                    onClick={() => mobileMenuOpen && setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                  {mobileMenuOpen && (
                    <button 
                      className={styles.submenuToggle}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveMenu(activeMenu === index ? null : index);
                      }}
                    >
                      {activeMenu === index ? '−' : '+'}
                    </button>
                  )}
                </div>
                
                {(activeMenu === index) && (
                  <div className={styles.infoCard} ref={menuRef}>
                    <div className={styles.cardHeader}>
                      <Link to={item.path} className={styles.cardTitleLink} onClick={() => setMobileMenuOpen(false)}>
                        <h3>{item.title} &rarr;</h3>
                      </Link>
                      <p>Explore Sections:</p>
                    </div>
                    <div className={styles.buttonList}>
                      {item.links.map((link, lIdx) => (
                        <Link key={lIdx} to={link.path} className={styles.navLinkItem} onClick={() => setMobileMenuOpen(false)}>
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
          
          {mobileMenuOpen && (
            <div className={styles.mobileActions}>
              <Link to="/contact" className={styles.applyBtn} onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
            </div>
          )}
        </nav>

        <div className={styles.actions}>
          <Link to="/contact" className={styles.applyBtn}>Contact Us</Link>
          <button className={styles.mobileToggle} onClick={toggleMobileMenu} aria-label="Toggle Menu">
            <span className={`${styles.hamburger} ${mobileMenuOpen ? styles.open : ''}`}></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

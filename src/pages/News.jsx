import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import styles from './News.module.css';
import { FaNewspaper, FaImages, FaPlayCircle, FaExpand } from 'react-icons/fa';

const News = () => {
  const [activeTab, setActiveTab] = useState('news');

  const news = [
    { title: "KICS Launches New AI Lab in Collaboration with Industry Leaders", date: "May 15, 2026", category: "Research", summary: "A new milestone in AI research at UET Lahore, focusing on deep learning for robotics." },
    { title: "Successful MoU Signed with Global Tech Giant for Smart City Project", date: "May 10, 2026", category: "Collaboration", summary: "Strategic partnership aimed at transforming urban infrastructure through IoT." },
    { title: "Upcoming Webinar: The Future of IoT Security in 2026", date: "May 05, 2026", category: "Events", summary: "Join our experts as they discuss the evolving landscape of digital security." },
    { title: "UET KICS Receives Excellence Award for Research at ICOSST", date: "Apr 28, 2026", category: "Awards", summary: "Recognizing outstanding contributions to open source technologies and systems." },
    { title: "Professional Training Sessions on 5G Networks Starting Next Month", date: "Apr 20, 2026", category: "Training", summary: "Hands-on certification for telecommunication engineers and students." },
    { title: "Annual Technical Symposium 2026: Call for Volunteers", date: "Apr 15, 2026", category: "Campus", summary: "Join the organizing committee for the biggest technical event of the year." }
  ];

  const photos = [
    { id: 1, title: "Convocation 2025", category: "Events", url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800" },
    { id: 2, title: "AI Workshop", category: "Academic", url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800" },
    { id: 3, title: "Robotics Competition", category: "Research", url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800" },
    { id: 4, title: "Industrial Visit", category: "Collaboration", url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800" },
    { id: 5, title: "KICS Seminar Hall", category: "Facility", url: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800" },
    { id: 6, title: "Lab Research Session", category: "Research", url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800" }
  ];

  const videos = [
    { id: 1, title: "KICS Documentary 2025", duration: "5:30", url: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=800" },
    { id: 2, title: "Interview with Director KICS", duration: "12:15", url: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=800" },
    { id: 3, title: "Smart Cities Project Demo", duration: "3:45", url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800" }
  ];

  return (
    <div className={styles.newsPage}>
      <PageHeader 
        title="Latest News & Media" 
        subtitle="Staying connected with the vibrant research community and achievements at KICS."
        breadcrumb="What's New"
      />

      <nav className={styles.newsNav}>
         <div className="container">
            <ul className={styles.categoryList}>
               <li 
                 className={activeTab === 'news' ? styles.active : ''} 
                 onClick={() => setActiveTab('news')}
               >
                 <FaNewspaper /> All News
               </li>
               <li 
                 className={activeTab === 'photos' ? styles.active : ''} 
                 onClick={() => setActiveTab('photos')}
               >
                 <FaImages /> Photo Gallery
               </li>
               <li 
                 className={activeTab === 'videos' ? styles.active : ''} 
                 onClick={() => setActiveTab('videos')}
               >
                 <FaPlayCircle /> Media Coverage
               </li>
            </ul>
         </div>
      </nav>

      <div className="container">
        {activeTab === 'news' && (
          <>
            <section className={styles.spotlightSection}>
              <div className={styles.spotlightCard}>
                <div className={styles.spotlightImage}>
                  <img src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1200" alt="Featured News" />
                  <div className={styles.imgOverlay}></div>
                </div>
                <div className={styles.spotlightContent}>
                  <span className={styles.trendingTag}>Trending</span>
                  <h2>KICS Ranks #1 in Engineering Research Impact 2026</h2>
                  <p>In the latest regional rankings, Al-Khwarizmi Institute of Computer Science has been recognized for its high-impact publications and industrial patents.</p>
                  <button className={styles.readMoreBtn}>Full Story &rarr;</button>
                </div>
              </div>
            </section>

            <section className={styles.gallerySection}>
              <div className={styles.newsGrid}>
                {news.map((item, index) => (
                  <div key={index} className={styles.newsCard}>
                    <div className={styles.cardImage}>
                      <img src={`https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=400&sig=${index}`} alt={item.title} />
                      <span className={styles.category}>{item.category}</span>
                    </div>
                    <div className={styles.cardContent}>
                      <span className={styles.date}>{item.date}</span>
                      <h3>{item.title}</h3>
                      <p className={styles.newsSummary}>{item.summary}</p>
                      <button className={styles.readMore}>Read Article &rarr;</button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {activeTab === 'photos' && (
          <section className={styles.mediaGallery}>
            <div className={styles.mediaGrid}>
              {photos.map((photo) => (
                <div key={photo.id} className={styles.mediaItem}>
                  <div className={styles.mediaImgWrapper}>
                    <img src={photo.url} alt={photo.title} />
                    <div className={styles.mediaOverlay}>
                      <FaExpand className={styles.expandIcon} />
                      <div className={styles.mediaInfo}>
                        <span className={styles.mediaCategory}>{photo.category}</span>
                        <h4>{photo.title}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'videos' && (
          <section className={styles.mediaGallery}>
            <div className={styles.videoGrid}>
              {videos.map((video) => (
                <div key={video.id} className={styles.videoCard}>
                  <div className={styles.videoThumbnail}>
                    <img src={video.url} alt={video.title} />
                    <div className={styles.playOverlay}>
                      <FaPlayCircle className={styles.playIcon} />
                    </div>
                    <span className={styles.duration}>{video.duration}</span>
                  </div>
                  <div className={styles.videoInfo}>
                    <h4>{video.title}</h4>
                    <p>Official Media Coverage</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      <section className={styles.newsletterSection}>
         <div className="container">
            <div className={styles.newsletterBox}>
               <h3>Subscribe to <span className={styles.goldText}>KICS Times</span></h3>
               <p>Get the latest research highlights and event announcements directly in your inbox.</p>
               <div className={styles.subscribeForm}>
                  <input type="email" placeholder="Enter your email address" />
                  <button>Join Newsletter</button>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default News;

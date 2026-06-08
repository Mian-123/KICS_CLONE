import React from 'react';
import PageHeader from '../components/PageHeader';

const Contact = () => {
  return (
    <div>
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch with our team for inquiries, collaborations, or support."
        breadcrumb="Contact"
      />
      <section style={{ padding: '8rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ marginBottom: '2rem' }}>Get in <span className="text-gradient">Touch</span></h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 4rem' }}>
            Whether you have a question about research, services, or anything else, our team is ready to answer all your questions.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
             <div style={{ padding: '3rem', background: 'var(--surface-alt)', borderRadius: 'var(--radius-md)' }}>
                <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Address</h3>
                <p>UET Lahore, GT Road, Lahore, Pakistan</p>
             </div>
             <div style={{ padding: '3rem', background: 'var(--surface-alt)', borderRadius: 'var(--radius-md)' }}>
                <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Email</h3>
                <p>info@kics.edu.pk</p>
             </div>
             <div style={{ padding: '3rem', background: 'var(--surface-alt)', borderRadius: 'var(--radius-md)' }}>
                <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Phone</h3>
                <p>+92 42 99250245</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

import React from 'react';
import { Target, Shield, Globe, Award } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <h1 className="heading-1">About NYOM</h1>
          <p className="body-large">Professional Export–Import Company</p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding">
        <div className="container">
          <div className="about-content">
            <h2 className="heading-2">Who We Are</h2>
            <p className="body-large">
              NYOM is a professional export–import company specializing in fresh fruits and vegetables. We bridge the gap between Indian agricultural excellence and global market demand.
            </p>
            <p className="body-medium">
              Our company executes real international trade operations, handling everything from farm sourcing to final delivery at international destinations. We work with premium quality produce that meets international export standards.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-subtle">
        <div className="container">
          <h2 className="heading-2 text-center">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card network-card">
              <Target size={48} className="value-icon" />
              <h3 className="heading-3">Our Mission</h3>
              <p className="body-medium">
                To establish NYOM as a trusted name in the global export–import industry by delivering premium quality Indian agricultural produce to international markets with complete transparency and ethical practices.
              </p>
            </div>
            <div className="value-card network-card">
              <Shield size={48} className="value-icon" />
              <h3 className="heading-3">Trade Philosophy</h3>
              <p className="body-medium">
                We believe in conducting business with complete transparency, clear agreements, and ethical practices. Every trade operation is documented, compliant, and executed with professional standards.
              </p>
            </div>
            <div className="value-card network-card">
              <Globe size={48} className="value-icon" />
              <h3 className="heading-3">Global Vision</h3>
              <p className="body-medium">
                Our vision is to expand India's footprint in global agricultural trade by connecting premium Indian produce with markets across continents, creating value for all stakeholders.
              </p>
            </div>
            <div className="value-card network-card">
              <Award size={48} className="value-icon" />
              <h3 className="heading-3">Compliance & Quality</h3>
              <p className="body-medium">
                We maintain strict compliance with international trade regulations, quality standards, and export documentation requirements. Quality assurance is at the heart of our operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding">
        <div className="container">
          <h2 className="heading-2">What We Do</h2>
          <div className="what-we-do">
            <div className="wwd-item">
              <h3 className="heading-3">International Trade Execution</h3>
              <p className="body-medium">
                We execute real export–import operations, handling the complete supply chain from Indian farms to international buyers.
              </p>
            </div>
            <div className="wwd-item">
              <h3 className="heading-3">Partnership Opportunities</h3>
              <p className="body-medium">
                We offer structured business partnership models for investors and traders who want to participate in the export–import business with transparent operations and fixed indicative returns.
              </p>
            </div>
            <div className="wwd-item">
              <h3 className="heading-3">Trade Support Services</h3>
              <p className="body-medium">
                We provide complete trade support including documentation, customs clearance, logistics coordination, and international payment handling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="section-padding bg-subtle">
        <div className="container">
          <div className="transparency-box network-card">
            <h2 className="heading-2">Compliance & Transparency</h2>
            <p className="body-large">
              At NYOM, we operate with complete transparency and adherence to all legal and regulatory requirements:
            </p>
            <ul className="transparency-list">
              <li>Full compliance with Indian export regulations</li>
              <li>Clear agreements for all business partnerships</li>
              <li>Complete documentation of all trade operations</li>
              <li>Regular communication with partners and stakeholders</li>
              <li>Adherence to international quality standards</li>
              <li>Transparent reporting of business operations</li>
            </ul>
            <p className="body-medium disclaimer-box">
              <strong>Important:</strong> All business partnerships are structured with clear agreements. Returns mentioned are indicative and subject to actual trade performance and market conditions. We do not guarantee fixed returns as trade outcomes depend on multiple market factors.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
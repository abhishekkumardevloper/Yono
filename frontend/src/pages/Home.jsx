import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, ShieldCheck, TrendingUp, Users, CheckCircle, ArrowRight, Anchor } from 'lucide-react';
import './Home.css';

const Home = () => {
  const exportMarkets = [
    { country: 'Dubai (UAE)', flag: '🇦🇪' },
    { country: 'Sri Lanka', flag: '🇱🇰' },
    { country: 'Malaysia', flag: '🇲🇾' },
    { country: 'Vietnam', flag: '🇻🇳' },
    { country: 'United States', flag: '🇺🇸' },
    { country: 'United Kingdom', flag: '🇬🇧' }
  ];

  const services = [
    {
      icon: <Globe size={40} className="text-primary" />,
      title: 'Direct Export',
      description: 'End-to-end supply chain management of fresh Indian produce to international hubs.'
    },
    {
      icon: <Users size={40} className="text-primary" />,
      title: 'Business Partnership',
      description: 'Transparent fixed-profit models designed for traders and investors.'
    },
    {
      icon: <ShieldCheck size={40} className="text-primary" />,
      title: 'Trade Support',
      description: 'Handling complex documentation, customs compliance, and logistics coordination.'
    }
  ];

  const whyChoose = [
    { title: 'Expert Team', desc: 'Veterans in agri-export trade.' },
    { title: 'Global Routes', desc: 'Active channels to 6+ countries.' },
    { title: 'Transparency', desc: '100% visibility on operations.' },
    { title: 'Quality First', desc: 'Premium export-grade standards.' },
    { title: 'On-Time', desc: 'Optimized logistics network.' },
    { title: 'Best Pricing', desc: 'Direct-from-farm procurement.' }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content container">
          <div className="hero-text-wrapper fade-in-up">
            <span className="hero-badge">Global Agri-Export Leaders</span>
            <h1 className="hero-title">Connecting Indian Harvests to the World</h1>
            <p className="hero-description">
              NYOM is a premier export–import firm bridging the gap between Indian farmers and global markets with professionalism and trust.
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary">
                Start Trading
              </Link>
              <Link to="/services" className="btn btn-outline">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding" id="about">
        <div className="container">
          <div className="two-column-layout">
            <div className="content-column">
              <h4 className="section-label">Who We Are</h4>
              <h2 className="section-heading">Redefining International Trade</h2>
              <p className="body-large text-muted">
                NYOM isn't just an exporter; we are your strategic trade partner. We specialize in the procurement and export of premium fresh fruits and vegetables, ensuring compliance with rigorous international standards.
              </p>
              
              <div className="feature-list">
                <div className="feature-item">
                  <div className="icon-box"><Anchor size={20} /></div>
                  <div>
                    <strong>Real Trade Execution</strong>
                    <p className="text-sm">Tangible goods, real logistics, actual profits.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="icon-box"><Users size={20} /></div>
                  <div>
                    <strong>Structured Partnerships</strong>
                    <p className="text-sm">Clear agreements for investors and partners.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="image-column">
              <div className="image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=2070&auto=format&fit=crop" 
                  alt="Global Shipping and Logistics" 
                  className="section-image"
                />
                <div className="floating-card">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Quality Assurance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Export Markets */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-heading">Global Footprint</h2>
            <p className="section-subtitle">Delivering freshness to premium markets worldwide</p>
          </div>
          <div className="markets-grid">
            {exportMarkets.map((market, index) => (
              <div key={index} className="market-card">
                <div className="flag-circle">{market.flag}</div>
                <h3 className="market-name">{market.country}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-heading">Our Expertise</h2>
            <p className="section-subtitle">Comprehensive solutions for the modern supply chain</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon-wrapper">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
                <Link to="/services" className="link-arrow">Learn more <ArrowRight size={16} /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fixed Profit Model (Highlighted Section) */}
      <section className="section-padding bg-dark text-white pattern-bg">
        <div className="container">
          <div className="profit-layout">
            <div className="profit-info">
              <h2 className="heading-light">Fixed Profit Business Model</h2>
              <p className="text-light-muted">
                Looking for a secure entry into the export business? Our partnership model offers structured returns backed by real agricultural trade.
              </p>
              <div className="profit-tags">
                <span className="tag">Transparent Operations</span>
                <span className="tag">Legal Agreements</span>
                <span className="tag">Monthly Payouts</span>
              </div>
              <p className="disclaimer-text">
                *Disclaimer: Returns are indicative and subject to market terms.
              </p>
            </div>
            
            <div className="profit-stats-container">
              <div className="stat-card glass-effect">
                <TrendingUp size={32} className="text-accent" />
                <div className="stat-data">
                  <span className="stat-value">2%</span>
                  <span className="stat-desc">Monthly ROI</span>
                </div>
              </div>
              <div className="stat-card glass-effect">
                <TrendingUp size={32} className="text-accent" />
                <div className="stat-data">
                  <span className="stat-value">24%</span>
                  <span className="stat-desc">Annual ROI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose NYOM */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-heading">Why Choose NYOM?</h2>
          </div>
          <div className="why-choose-grid">
            {whyChoose.map((item, index) => (
              <div key={index} className="feature-box">
                <CheckCircle size={24} className="check-icon" />
                <div>
                  <h3 className="feature-title">{item.title}</h3>
                  <p className="feature-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-box">
            <div className="cta-content">
              <h2 className="cta-heading">Ready to Expand Your Business?</h2>
              <p className="cta-text">Join NYOM in bridging the gap between Indian farms and global plates.</p>
            </div>
            <Link to="/contact" className="btn btn-white">
              Contact Us Today <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

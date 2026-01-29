import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, ShieldCheck, TrendingUp, Users, CheckCircle, ArrowRight } from 'lucide-react';
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
      icon: <Globe size={40} />,
      title: 'Direct Export',
      description: 'End-to-end export of fresh fruits & vegetables to global markets'
    },
    {
      icon: <Users size={40} />,
      title: 'Business Partnership',
      description: 'Fixed profit export–import business model with transparent operations'
    },
    {
      icon: <ShieldCheck size={40} />,
      title: 'Trade Support',
      description: 'Complete documentation, logistics & payment coordination'
    }
  ];

  const whyChoose = [
    'Experienced Export Team',
    'Active Global Trade Routes',
    'Ethical & Transparent Practices',
    'Quality Assurance Standards',
    'Timely Delivery',
    'Competitive Pricing'
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content container">
          <h1 className="hero-title display-large fade-in">NYOM</h1>
          <p className="hero-subtitle heading-2 fade-in">Trusted Fresh Fruits & Vegetables Exporter</p>
          <p className="hero-description body-large fade-in">
            Professional export–import company supplying global markets with export-grade Indian produce
          </p>
          <Link to="/contact" className="btn-primary btn-hero fade-in">
            Start Your Export–Import Journey
          </Link>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding">
        <div className="container">
          <div className="two-column-layout">
            <div className="content-column">
              <h2 className="heading-1">Company Overview</h2>
              <p className="body-large section-text">
                NYOM is a professional export–import company specializing in fresh fruits and vegetables. We execute real international trade and offer structured partnership opportunities for exporters, traders, and investors.
              </p>
              <p className="body-medium section-text">
                Our focus is on transparency, compliance, and meeting global demand with premium quality Indian agricultural produce.
              </p>
              <div className="feature-list">
                <div className="feature-item">
                  <CheckCircle size={24} className="feature-icon" />
                  <span>Real International Trade Execution</span>
                </div>
                <div className="feature-item">
                  <CheckCircle size={24} className="feature-icon" />
                  <span>Structured Partnership Opportunities</span>
                </div>
                <div className="feature-item">
                  <CheckCircle size={24} className="feature-icon" />
                  <span>Full Compliance & Transparency</span>
                </div>
              </div>
            </div>
            <div className="image-column">
              <img 
                src="https://images.unsplash.com/photo-1604778247403-72353f38c499?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHw0fHxleHBvcnQlMjB0cmFkZXxlbnwwfHx8fDE3Njk2NzY5OTd8MA&ixlib=rb-4.1.0&q=85" 
                alt="Global Trade"
                className="section-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Export Markets */}
      <section className="section-padding bg-subtle">
        <div className="container">
          <h2 className="heading-1 text-center">Our Export Markets</h2>
          <p className="body-large text-center section-subtitle">
            Serving premium markets across the globe
          </p>
          <div className="markets-grid">
            {exportMarkets.map((market, index) => (
              <div key={index} className="market-card network-card">
                <div className="market-flag">{market.flag}</div>
                <h3 className="heading-3">{market.country}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container">
          <h2 className="heading-1 text-center">Our Services</h2>
          <p className="body-large text-center section-subtitle">
            Comprehensive export–import solutions
          </p>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card network-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="heading-3">{service.title}</h3>
                <p className="body-medium">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fixed Profit Model */}
      <section className="section-padding bg-subtle">
        <div className="container">
          <div className="profit-model-card network-card">
            <div className="profit-content">
              <h2 className="heading-1">Fixed Profit Business Model</h2>
              <p className="body-large">
                Participate in real export–import trade with structured returns
              </p>
              <div className="profit-highlights">
                <div className="profit-stat">
                  <TrendingUp size={32} className="stat-icon" />
                  <div>
                    <div className="stat-value">2%</div>
                    <div className="stat-label">Indicative Monthly Returns</div>
                  </div>
                </div>
                <div className="profit-stat">
                  <TrendingUp size={32} className="stat-icon" />
                  <div>
                    <div className="stat-value">24%</div>
                    <div className="stat-label">Indicative Annual Returns</div>
                  </div>
                </div>
              </div>
              <div className="profit-features">
                <div className="feature-badge">Clear Agreements</div>
                <div className="feature-badge">Transparent Operations</div>
                <div className="feature-badge">Real Trade Participation</div>
              </div>
              <p className="disclaimer-text">
                <strong>Disclaimer:</strong> Returns are indicative and subject to market risks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose NYOM */}
      <section className="section-padding">
        <div className="container">
          <h2 className="heading-1 text-center">Why Choose NYOM</h2>
          <div className="why-choose-grid">
            {whyChoose.map((reason, index) => (
              <div key={index} className="why-card network-card">
                <CheckCircle size={32} className="why-icon" />
                <h3 className="heading-3">{reason}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card network-card">
            <h2 className="heading-1">Start Your Export–Import Journey Today</h2>
            <p className="body-large">Join us in serving global markets with premium Indian produce</p>
            <Link to="/contact" className="btn-primary btn-cta">
              Contact NYOM <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

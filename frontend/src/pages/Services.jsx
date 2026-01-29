import React from 'react';
import { Globe, Users, FileText, Truck, DollarSign, ShieldCheck } from 'lucide-react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <h1 className="heading-1">Our Services</h1>
          <p className="body-large">Comprehensive Export–Import Solutions</p>
        </div>
      </section>

      {/* Services Intro */}
      <section className="section-padding">
        <div className="container">
          <div className="services-intro">
            <p className="body-large">
              NYOM offers complete export–import services designed for businesses, traders, and investors who want to participate in the global fresh produce trade. Our services cover every aspect of international trade operations.
            </p>
          </div>
        </div>
      </section>

      {/* Direct Export */}
      <section className="section-padding bg-subtle">
        <div className="container">
          <div className="service-detail">
            <div className="service-icon-large">
              <Globe size={64} />
            </div>
            <h2 className="heading-2">Direct Export Services</h2>
            <p className="body-large service-description">
              End-to-end export operations for fresh fruits and vegetables to international markets
            </p>
            <div className="service-features">
              <div className="feature-box network-card">
                <h3 className="heading-3">Farm Sourcing</h3>
                <p className="body-medium">
                  We work directly with trusted farms across India to source premium quality produce that meets international export standards.
                </p>
              </div>
              <div className="feature-box network-card">
                <h3 className="heading-3">Quality Checks</h3>
                <p className="body-medium">
                  Every batch undergoes rigorous quality inspection for size, ripeness, appearance, and compliance with destination country requirements.
                </p>
              </div>
              <div className="feature-box network-card">
                <h3 className="heading-3">Export-Grade Packaging</h3>
                <p className="body-medium">
                  Professional packaging using international standards to ensure product freshness and protection during long-distance transit.
                </p>
              </div>
              <div className="feature-box network-card">
                <h3 className="heading-3">International Logistics</h3>
                <p className="body-medium">
                  Complete logistics coordination including freight booking, customs clearance, and timely delivery to international destinations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Partnership */}
      <section className="section-padding">
        <div className="container">
          <div className="service-detail">
            <div className="service-icon-large">
              <Users size={64} />
            </div>
            <h2 className="heading-2">Export–Import Business Partnership</h2>
            <p className="body-large service-description">
              Structured partnership model for investors and traders to participate in live export–import operations
            </p>
            <div className="partnership-box network-card">
              <h3 className="heading-3">How It Works</h3>
              <div className="partnership-steps">
                <div className="step-item">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Partnership Agreement</h4>
                    <p>Clear written agreement outlining terms, investment amount, and indicative returns structure</p>
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Live Trade Participation</h4>
                    <p>Your investment participates in actual export–import operations with real international buyers</p>
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Fixed Indicative Returns</h4>
                    <p>Indicative 2% monthly returns (24% annual) based on trade performance</p>
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h4>Transparent Reporting</h4>
                    <p>Regular updates on trade operations and financial statements</p>
                  </div>
                </div>
              </div>
              <div className="partnership-features">
                <div className="partnership-benefit">
                  <ShieldCheck size={24} />
                  <span>Low-risk structure with clear agreements</span>
                </div>
                <div className="partnership-benefit">
                  <ShieldCheck size={24} />
                  <span>Real trade participation, not speculation</span>
                </div>
                <div className="partnership-benefit">
                  <ShieldCheck size={24} />
                  <span>Transparent operations and reporting</span>
                </div>
              </div>
              <p className="disclaimer-text">
                <strong>Important Disclaimer:</strong> Returns mentioned are indicative and depend on actual trade performance. Export–import business involves market risks, and actual returns may vary based on market conditions, demand, and operational factors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trade Support */}
      <section className="section-padding bg-subtle">
        <div className="container">
          <div className="service-detail">
            <div className="service-icon-large">
              <FileText size={64} />
            </div>
            <h2 className="heading-2">Complete Trade Support</h2>
            <p className="body-large service-description">
              Comprehensive support services for all export–import documentation and operations
            </p>
            <div className="support-grid">
              <div className="support-card network-card">
                <FileText size={40} className="support-icon" />
                <h3 className="heading-3">Export–Import Documentation</h3>
                <p className="body-medium">
                  Complete handling of all export documentation including invoices, packing lists, certificates of origin, and phytosanitary certificates.
                </p>
              </div>
              <div className="support-card network-card">
                <Truck size={40} className="support-icon" />
                <h3 className="heading-3">Customs Clearance</h3>
                <p className="body-medium">
                  Expert assistance with customs procedures, duty calculations, and clearance processes at both origin and destination ports.
                </p>
              </div>
              <div className="support-card network-card">
                <Globe size={40} className="support-icon" />
                <h3 className="heading-3">Freight & Logistics</h3>
                <p className="body-medium">
                  Coordination with freight forwarders, shipping lines, and logistics partners to ensure timely and safe delivery.
                </p>
              </div>
              <div className="support-card network-card">
                <DollarSign size={40} className="support-icon" />
                <h3 className="heading-3">International Payments</h3>
                <p className="body-medium">
                  Guidance on payment methods including Letters of Credit (LC), telegraphic transfers, and compliance with FEMA regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
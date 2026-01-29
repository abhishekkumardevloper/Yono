import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, FileText, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import './Investor.css';

const Investor = () => {
  const benefits = [
    'Participate in real export–import operations',
    'Fixed indicative monthly returns structure',
    'Clear written partnership agreements',
    'Transparent trade operations and reporting',
    'Professional trade management team',
    'Regular communication and updates'
  ];

  return (
    <div className="investor-page">
      {/* Hero */}
      <section className="investor-hero">
        <div className="container">
          <h1 className="heading-1">Investor Partnership</h1>
          <p className="body-large">Participate in Real Export–Import Trade</p>
        </div>
      </section>

      {/* Opportunity Overview */}
      <section className="section-padding">
        <div className="container">
          <div className="investor-intro network-card">
            <h2 className="heading-2">Investment Opportunity</h2>
            <p className="body-large">
              NYOM offers structured partnership opportunities for investors who want to participate in the export–import business of fresh fruits and vegetables. This is not a speculative investment – your capital participates in actual trade operations with real international buyers.
            </p>
            <div className="opportunity-highlights">
              <div className="highlight-card">
                <TrendingUp size={48} className="highlight-icon" />
                <div className="highlight-content">
                  <div className="highlight-value">2%</div>
                  <div className="highlight-label">Indicative Monthly Returns</div>
                </div>
              </div>
              <div className="highlight-card">
                <TrendingUp size={48} className="highlight-icon" />
                <div className="highlight-content">
                  <div className="highlight-value">24%</div>
                  <div className="highlight-label">Indicative Annual Returns</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-subtle">
        <div className="container">
          <h2 className="heading-2 text-center">How It Works</h2>
          <div className="process-steps">
            <div className="process-card network-card">
              <div className="process-number">1</div>
              <h3 className="heading-3">Initial Discussion</h3>
              <p className="body-medium">
                Contact us to discuss investment amount, terms, and partnership structure. We'll explain the complete business model and answer all your questions.
              </p>
            </div>
            <div className="process-card network-card">
              <div className="process-number">2</div>
              <h3 className="heading-3">Partnership Agreement</h3>
              <p className="body-medium">
                Sign a clear written agreement that outlines all terms including investment amount, indicative returns, duration, and operational details.
              </p>
            </div>
            <div className="process-card network-card">
              <div className="process-number">3</div>
              <h3 className="heading-3">Trade Participation</h3>
              <p className="body-medium">
                Your investment participates in live export–import operations. We handle all operational aspects including sourcing, export, and sales.
              </p>
            </div>
            <div className="process-card network-card">
              <div className="process-number">4</div>
              <h3 className="heading-3">Regular Returns & Reporting</h3>
              <p className="body-medium">
                Receive indicative monthly returns along with transparent reports on trade operations and financial performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container">
          <h2 className="heading-2 text-center">Partnership Benefits</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card network-card">
                <CheckCircle size={32} className="benefit-icon" />
                <p className="body-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Model */}
      <section className="section-padding bg-subtle">
        <div className="container">
          <div className="investment-model network-card">
            <h2 className="heading-2">Investment Model Details</h2>
            <div className="model-details">
              <div className="model-item">
                <FileText size={32} className="model-icon" />
                <h3 className="heading-3">Clear Structure</h3>
                <p className="body-medium">
                  Every partnership is based on a clear written agreement that specifies investment amount, duration, returns structure, and exit terms.
                </p>
              </div>
              <div className="model-item">
                <Shield size={32} className="model-icon" />
                <h3 className="heading-3">Transparency</h3>
                <p className="body-medium">
                  Complete transparency in operations with regular updates on trade activities, shipments, buyer payments, and financial statements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Disclosure */}
      <section className="section-padding">
        <div className="container">
          <div className="risk-disclosure">
            <h2 className="heading-2">Important Risk Disclosure</h2>
            <div className="disclosure-content">
              <p className="body-large">
                <strong>Please Read Carefully:</strong>
              </p>
              <ul className="disclosure-list">
                <li>The returns mentioned (2% monthly / 24% annual) are <strong>indicative</strong> and not guaranteed.</li>
                <li>Actual returns depend on trade performance, market conditions, demand-supply dynamics, and operational factors.</li>
                <li>Export–import business involves inherent market risks including currency fluctuations, demand changes, quality issues, and payment delays.</li>
                <li>Past performance (if any) is not indicative of future results.</li>
                <li>This is a business partnership, not a fixed-deposit or guaranteed return scheme.</li>
                <li>Investors should carefully review all agreement terms and seek independent financial advice before investing.</li>
                <li>NYOM operates with complete transparency and compliance with Indian export–import regulations.</li>
              </ul>
              <p className="body-medium disclosure-footer">
                We believe in building long-term relationships based on trust, transparency, and mutual benefit. All partnership terms are discussed openly before any agreement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="investor-cta">
        <div className="container">
          <div className="cta-card network-card">
            <h2 className="heading-2">Ready to Explore Partnership?</h2>
            <p className="body-large">Contact us for a detailed discussion about investment opportunities</p>
            <Link to="/contact" className="btn-primary btn-cta">
              Investor Inquiry <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Investor;
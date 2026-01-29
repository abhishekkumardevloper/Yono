import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">NYOM</h3>
            <p className="footer-tagline">Trusted Fresh Fruits & Vegetables Exporter</p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <div className="footer-links">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/about" className="footer-link">About Us</Link>
              <Link to="/products" className="footer-link">Products</Link>
              <Link to="/services" className="footer-link">Services</Link>
              <Link to="/investor" className="footer-link">Investor</Link>
              <Link to="/contact" className="footer-link">Contact</Link>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact Info</h4>
            <div className="footer-contact">
              <div className="contact-item">
                <MapPin size={18} />
                <span>UGF-04, Plot No-653/1, Shakti Khand–3, One Mall, Indirapuram, Ghaziabad, UP – 201014, India</span>
              </div>
              <div className="contact-item">
                <Mail size={18} />
                <a href="mailto:nyomexport@gmail.com">nyomexport@gmail.com</a>
              </div>
              <div className="contact-item">
                <Phone size={18} />
                <a href="tel:+919873274011">+91 98732 74011</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">© 2025 NYOM Export Import Company. All rights reserved.</p>
          <p className="disclaimer">
            <strong>Disclaimer:</strong> Returns are indicative and subject to market risks. Past performance is not indicative of future results.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
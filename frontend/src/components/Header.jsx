import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/products', label: 'Products' },
    { path: '/services', label: 'Services' },
    { path: '/investor', label: 'Investor' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="network-header">
      <div className="nav-wrapper">
        <Link to="/" className="network-logo">
          <span className="logo-text">NYOM</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="network-nav desktop-nav">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`network-nav-link ${isActive(item.path) ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-cta-small">
            Start Your Export Journey
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="mobile-nav">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`mobile-nav-link ${isActive(item.path) ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="btn-primary mobile-cta"
            onClick={() => setMobileMenuOpen(false)}
          >
            Start Your Export Journey
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;

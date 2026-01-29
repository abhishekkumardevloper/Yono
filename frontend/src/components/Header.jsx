import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sprout, ArrowRight } from 'lucide-react'; // Added Sprout icon for agri-theme
import './Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/products', label: 'Products' },
    { path: '/services', label: 'Services' },
    { path: '/investor', label: 'Investor' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    // Header class changes based on scroll state
    <header className={`network-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        
        {/* Logo Section */}
        <Link to="/" className="logo-wrapper">
          <div className="logo-icon-bg">
            <Sprout size={24} className="logo-icon" />
          </div>
          <span className="logo-text">NYOM</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Side Actions */}
        <div className="header-actions">
          <Link to="/contact" className="btn-header">
            Contact Us <ArrowRight size={16} className="btn-arrow" />
          </Link>

          {/* Mobile Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'is-open' : ''}`}>
        <nav className="mobile-nav-content">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`mobile-link ${isActive(item.path) ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mobile-cta-btn"
            onClick={() => setMobileMenuOpen(false)}
          >
            Start Your Export Journey
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

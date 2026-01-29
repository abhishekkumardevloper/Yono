import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sprout, ArrowRight } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // FIX: Check if we are on the Home page
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // FIX: Logic to determine if header should be transparent or solid
  // If we are NOT on home page, OR if we have scrolled, make it solid.
  const isSolid = scrolled || !isHomePage;

  return (
    <header className={`network-header ${isSolid ? 'scrolled' : ''}`}>
      <div className="container header-container">
        
        {/* Logo */}
        <Link to="/" className="logo-wrapper">
          <div className="logo-icon-bg">
            <Sprout size={24} className="logo-icon" />
          </div>
          <span className="logo-text">NYOM</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {[
              { path: '/', label: 'Home' },
              { path: '/about', label: 'About Us' },
              { path: '/services', label: 'Services' },
              { path: '/contact', label: 'Contact' }
            ].map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className="header-actions">
          <Link to="/contact" className="btn-header">
            Contact Us <ArrowRight size={16} />
          </Link>
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'is-open' : ''}`}>
        <nav className="mobile-nav-content">
          <Link to="/" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link to="/services" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Services</Link>
          <Link to="/contact" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

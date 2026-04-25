import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === '/') {
        setScrolled(window.scrollY > 60);
      } else {
        setScrolled(true);
      }
    };

    handleScroll(); // Initial check
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    setMobileMenuOpen(false); // Close menu on route change
  }, [location.pathname]);

  const navClass = `navbar ${scrolled || location.pathname !== '/' ? 'scrolled' : ''} ${mobileMenuOpen ? 'mobile-open' : ''}`;

  return (
    <nav id="navbar" className={navClass}>
      <Link to="/" className="nav-logo">
        Yes<span>Coach</span>
      </Link>

      <div className={`nav-center ${mobileMenuOpen ? 'show' : ''}`}>
        <div className="nav-item-wrap">
          <button className="nav-link has-dropdown">Product</button>
          <div className="dropdown">
            <Link to="/features"><span className="di">⚡</span>Features</Link>
            <Link to="/how-it-works"><span className="di">🔄</span>How It Works</Link>
            <Link to="/about"><span className="di">🏢</span>About</Link>
          </div>
        </div>
        <Link to="/blog" className="nav-link">Blog</Link>
        <div className="nav-item-wrap">
          <button className="nav-link has-dropdown">Resources</button>
          <div className="dropdown">
            <Link to="/help"><span className="di">💬</span>Help Center</Link>
            <Link to="/contact"><span className="di">📧</span>Contact</Link>
          </div>
        </div>
        <div className="nav-item-wrap">
          <button className="nav-link has-dropdown">Company</button>
          <div className="dropdown">
            <Link to="/careers"><span className="di">💼</span>Careers</Link>
            <Link to="/privacy"><span className="di">🔒</span>Privacy Policy</Link>
            <Link to="/terms"><span className="di">📋</span>Terms of Service</Link>
          </div>
        </div>
        <button className="nav-cta mobile-cta" onClick={() => document.querySelector('.cta-section')?.scrollIntoView({behavior:'smooth'})}>
          Download Now
        </button>
      </div>

      <div className="nav-right">
        <button className="nav-cta desktop-cta" onClick={() => document.querySelector('.cta-section')?.scrollIntoView({behavior:'smooth'})}>
          Download Now
        </button>
        <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

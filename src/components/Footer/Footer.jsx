import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <div className="fl">Yes<span>Coach</span></div>
          <p>AI-powered personal training that reads your biology, adapts to your life, and helps you perform at your peak — every single day.</p>
        </div>
        <div className="footer-col">
          <h4>Product</h4>
          <Link to="/features">Features</Link>
          <Link to="/how-it-works">How It Works</Link>
          <Link to="/about">About</Link>
        </div>
        <div className="footer-col">
          <h4>Resources</h4>
          <Link to="/blog">Blog</Link>
          <Link to="/help">Help Center</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-col">
          <h4>Legal</h4>
          <Link to="/careers">Careers</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 YesCoach. All rights reserved.</span>
        <div className="footer-socials">
          <a className="social-link" href="#!">𝕏</a>
          <a className="social-link" href="#!">◎</a>
          <a className="social-link" href="#!">in</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

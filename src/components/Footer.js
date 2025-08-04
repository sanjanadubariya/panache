import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">💎</div>
              <span className="footer-logo-text">PANACHE</span>
            </div>
            <p className="footer-description">
              The official fashion club of D.J. Sanghvi College of Engineering, Mumbai.
              Where art meets attitude.
            </p>
          </div>

          <div className="footer-section footer-contact">
            <h3>Contact Us</h3>
            <div className="contact-info">
              <p>
                <span className="contact-icon">📍</span>
                D.J. Sanghvi College of Engineering<br/>
                Vile Parle (West), Mumbai - 400056<br/>
                Maharashtra, India
              </p>
              <p>
                <span className="contact-icon">✉️</span>
                <a href="mailto:panache@djsce.ac.in">panache@djsce.ac.in</a>
              </p>
            </div>
          </div>

          <div className="footer-section footer-social">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a 
                href="https://www.instagram.com/panache_djsce" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link instagram"
              >
                <span className="social-icon">📷</span>
                Instagram
              </a>
              <a 
                href="https://www.linkedin.com/company/panache-djsce" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link linkedin"
              >
                <span className="social-icon">💼</span>
                LinkedIn
              </a>
              <a 
                href="mailto:panache@djsce.ac.in"
                className="social-link email"
              >
                <span className="social-icon">✉️</span>
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <p>&copy; 2024 PANACHE - D.J. Sanghvi College of Engineering. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
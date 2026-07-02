import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section">
          <h3>BloodCare</h3>
          <p>
            Saving lives through efficient blood donation management.
            Every drop counts.
          </p>
          <div className="social-links">
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">📘</a>
            <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">🐦</a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">📷</a>
            <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">💼</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/search">Search Blood</a></li>
            <li><a href="/donate">Become a Donor</a></li>
            <li><a href="/request">Request Blood</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Emergency Contact</h4>
          <ul>
            <li>📞 +91 1800-XXX-XXXX</li>
            <li>✉️ emergency@bloodcare.org</li>
            <li>🏥 24/7 Support Available</li>
            <li>🚨 Emergency Hotline</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Project Info</h4>
          <p>
            <strong>Developer:</strong> M. Saipavan<br />
            <strong>Roll No:</strong> 23951A66F7<br />
            <strong>Institution:</strong> IARE<br />
            <strong>Department:</strong> CSE (AI & ML)
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>
            &copy; {currentYear} BloodCare. All rights reserved. | 
            <a href="/privacy"> Privacy Policy</a> | 
            <a href="/terms"> Terms of Service</a>
          </p>
          <p className="devops-note">
            Built with ❤️ using React.js & DevOps principles
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

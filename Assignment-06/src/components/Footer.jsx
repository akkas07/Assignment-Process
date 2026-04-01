import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Side - Brand */}
        <div className="footer-brand">
          <h2>DigiTools</h2>
          <p>
            Premium digital tools for creators, professionals, 
            and businesses. Work smarter with our suite of 
            powerful tools.
          </p>
        </div>

        {/* Product Links */}
        <div className="footer-column">
          <h3>Product</h3>
          <ul>
            <li>Features</li>
            <li>Pricing</li>
            <li>Templates</li>
            <li>Integrations</li>
          </ul>
        </div>

        {/* Company Links */}
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>

        {/* Resources Links */}
        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li>Documentation</li>
            <li>Help Center</li>
            <li>Community</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="footer-column">
          <h3>Social Links</h3>
          <div className="social-icons">
            <a href="#" className="social-icon">📸</a>
            <a href="#" className="social-icon">𝕏</a>
            <a href="#" className="social-icon">𝕗</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>© 2026 DigiTools. All rights reserved.</p>
          
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
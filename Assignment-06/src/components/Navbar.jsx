import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <a href="/">DigiTools</a>
        </div>

        <ul className="nav-menu">
          <li><a href="#products">Products</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>

        <div className="nav-right">
          <div className="cart-icon">🛒 <span className="cart-badge">0</span></div>
          <a href="#login" className="login-btn">Login</a>
          <a href="#get-started" className="get-started-btn">Get Started</a>

          <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>
        </div>
      </div>

      {isOpen && (
        <ul className="mobile-menu">
          <li><a href="#products">Products</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#login">Login</a></li>
          <li><a href="#get-started" className="mobile-get-started">Get Started</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
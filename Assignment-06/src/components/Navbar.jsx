import React from "react";
import "./Navbar.css";

function Navbar({ cartCount }) {
  return (


    <nav className="navbar">
      <div className="logo">DigiTools</div>

      <ul className="menu">
         <li>Produtcs</li>
         <li>Features</li>
         <li>Pricing</li>
         <li>Testimonials</li>
         <li>FAQ</li>
      </ul>
      <div className="right-side">
        <div className="cart">
          🛒 {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </div>
        <button className="login-btn">Login</button>
        <button className="start-btn">Get Started</button>
      </div>
    </nav>
  );
}

export default Navbar;
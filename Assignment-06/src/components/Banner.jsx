import React from "react";
import "./Banner.css";
import bannerImage from "../assets/banner.png"; // src/components থেকে এক ধাপ পিছিয়ে assets এ যাবে

function Banner() {
  return (
    <section className="banner">
      {/* Left Text */}
      <div className="banner-text">
        <p className="new-text">AI-Powered Tools Available</p>
        <h1 className="banner-heading">Supercharge Your Digital</h1>
        <p className="banner-desc">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today.
        </p>
        <div className="banner-buttons">
          <button className="btn-primary">Explore Products</button>
          <button className="btn-secondary">Watch Demo</button>
        </div>
      </div>

      {/* Right Image */}
      <div className="banner-image">
        <img src={bannerImage} alt="Banner" />
      </div>
    </section>
  );
}

export default Banner;
import React from "react";
import "./Stats.css";

function Stats() {
  return (
    <section className="stats">
      <div className="stats-container">
        <div className="stat-item">
          <h3 className="stat-number">50K+</h3>
          <p className="stat-label">Active Users</p>
        </div>
        <div className="stat-item">
          <h3 className="stat-number">200+</h3>
          <p className="stat-label">Premium Tools</p>
        </div>
        <div className="stat-item">
          <h3 className="stat-number">4.9</h3>
          <p className="stat-label">Rating</p>
        </div>
      </div>
    </section>
  );
}

export default Stats;
import React from "react";
import "./HowItWorks.css";

function HowItWorks() {
  const steps = [
    {
      id: "01",
      icon: "src/assets/user.png",  
      title: "Create Account",
      desc: "Sign up for free in seconds. No credit card required.",
    },
    {
      id: "02",
      icon: "src/assets/package.png",
      title: "Choose Products",
      desc: "Browse our catalog and select the tools you need.",
    },
    {
      id: "03",
      icon: "src/assets/rocket.png",
      title: "Start Creating",
      desc: "Download and start using your tools immediately.",
    },
  ];

  return (
    <section className="how-it-works">
      <div className="how-it-works-header">
        <h2>Get Started In 3 Steps</h2>
        <p>Start using premium digital tools in minutes, not hours.</p>
      </div>

      <div className="steps-grid">
        {steps.map((step) => (
          <div key={step.id} className="step-card">
            <div className="step-number">{step.id}</div>
            
            <div className="step-icon">
              <img src={step.icon} alt={step.title} />
            </div>

            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
import React from "react";
import "./Pricing.css";

const Pricing = () => {
  return (
    <section className="pricing-section">
      <div className="pricing-header">
        <h2>Simple, Transparent Pricing</h2>
        <p>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>


      <div className="pricing-cards">
        
        <div className="pricing-card starter-card">
           <h3>Starter</h3>
            <p className="subtitle">Perfect for getting started</p>
            
           <div className="price">
               <span className="dollar">$</span>0<span className="period">/Month</span>
            </div>

           <ul className="features">
             <li>✔ Access to 10 free tools</li>
               <li>✔ Basic templates</li>
              <li>✔ Community support</li>
            <li>✔ 1 project per month</li>
          </ul>
    

           <button className="pricing-btn secondary">Get Started Free</button>
         </div>

      
        <div className="pricing-card pro-card">
          <div className="popular-badge">MOST POPULAR</div>
          
           <h3>Pro</h3>
             <p className="subtitle">Best for professionals</p>
            
          <div className="price">
               <span className="dollar">$</span>29<span className="period">/Month</span>
          </div>

          <ul className="features">
            <li>✔ Access to all premium tools</li>
              <li>✔ Unlimited templates</li>
                <li>✔ Priority support</li>
               <li>✔ Cloud sync</li>
            <li>✔ Advanced analytics</li>
          </ul>

          <button className="pricing-btn primary">Start Pro Trial</button>
        </div>

      
        <div className="pricing-card enterprise-card">
          <h3>Enterprise</h3>
          <p className="subtitle">For teams and businesses</p>
          
          <div className="price">
            <span className="dollar">$</span>99<span className="period">/Month</span>
          </div>

          <ul className="features">
               <li>✔ Everything in Pro</li>
               <li>✔ Team collaboration</li>
                 <li>✔ Custom integrations</li>
               <li>✔ Dedicated support</li>
            <li>✔ Custom branding</li>
          </ul>

          <button className="pricing-btn secondary">Contact Sales</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
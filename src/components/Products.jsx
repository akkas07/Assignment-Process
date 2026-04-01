import React from "react";
import "./Products.css";

const products = [
  {
    id: 1,
    name: "AI Writing Pro",
    price: 29,
    period: "Mo",
    badge: "BEST SELLER",
    description: "Generate high-quality content, blogs, and marketing copy in seconds.",
    features: ["Unlimited AI generations", "50+ writing templates", "Grammar checker"],
    icon: "📝"
  },
  {
    id: 2,
    name: "Design Templates Pack",
    price: 49,
    period: "One-Time",
    badge: "POPULAR",
    description: "2000+ premium templates for social media and marketing materials.",
    features: ["2000+ templates", "Monthly updates", "Commercial license"],
    icon: "🎨"
  },
  {
    id: 3,
    name: "Premium Stock Assets",
    price: 19,
    period: "Mo",
    badge: "NEW",
    description: "Access millions of royalty-free photos, videos, and graphics.",
    features: ["10M+ assets", "Commercial use", "No attribution"],
    icon: "📷"
  },
  {
    id: 4,
    name: "Automation Toolkit",
    price: 79,
    period: "Mo",
    badge: "POPULAR",
    description: "Automate repetitive tasks and streamline your workflow.",
    features: ["50+ automations", "API access", "Custom workflows"],
    icon: "⚙️"
  },
  {
    id: 5,
    name: "Resume Builder Pro",
    price: 15,
    period: "One-Time",
    badge: "NEW",
    description: "Create professional resumes and cover letters that land interviews.",
    features: ["100+ templates", "ATS optimization", "Export to PDF"],
    icon: "📄"
  },
  {
    id: 6,
    name: "Social Media Kit",
    price: 39,
    period: "Mo",
    badge: "BEST SELLER",
    description: "Complete toolkit for creating engaging social media content.",
    features: ["5000+ assets", "Scheduler included", "Analytics dashboard"],
    icon: "📱"
  }
];

const Products = ({ addToCart, cartCount }) => {
  return (
    <section className="products-section">
      <div className="products-header">
        <h2>Premium Digital Tools</h2>
        <p>Choose from our curated collection of premium products.</p>
        <div className="cart-info">Cart ({cartCount})</div>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            {product.badge && (
              <span className={`badge ${product.badge.toLowerCase().replace(/\s+/g, '-')}`}>
                {product.badge}
              </span>
            )}

            <div className="product-icon">{product.icon}</div>
            
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>

            <div className="price">
              ${product.price}
              <span className="period">/{product.period}</span>
            </div>

            <div className="features">
              {product.features.map((feature, i) => (
                <div key={i} className="feature-item">
                  ✔ {feature}
                </div>
              ))}
            </div>

            <button 
              className="buy-now-btn"
              onClick={() => addToCart(product)}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
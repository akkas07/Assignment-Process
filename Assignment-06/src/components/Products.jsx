import React from "react";
import "./Products.css";

const products = [
  { id: 1, icon: "📝", badge: "BEST SELLER", title: "AI Writing Pro", price: 29, period: "/Mo" },
  { id: 2, icon: "🎨", badge: "POPULAR", title: "Design Templates Pack", price: 49, period: "/One-Time" },
  { id: 3, icon: "📷", badge: "NEW", title: "Premium Stock Assets", price: 19, period: "/Mo" },
  { id: 4, icon: "⚙️", badge: "POPULAR", title: "Automation Toolkit", price: 79, period: "/Mo" },
  { id: 5, icon: "📄", badge: "NEW", title: "Resume Builder Pro", price: 15, period: "/One-Time" },
  { id: 6, icon: "📱", badge: "BEST SELLER", title: "Social Media Kit", price: 39, period: "/Mo" },
  { id: 7, icon: "🎥", badge: "", title: "AI Video Editor", price: 59, period: "/Mo" },
  { id: 8, icon: "🔍", badge: "NEW", title: "SEO Mastery Toolkit", price: 35, period: "/Mo" },
];



function Products({ addToCart }) {
  return (
    <section className="products">
      <div className="products-header">
        <h2>Premium Digital Tools</h2>
        <p>Choose from our curated collection of premium products.</p>
      </div>



      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            {product.badge && <span className="badge">{product.badge}</span>}

            <div className="product-icon">{product.icon}</div>
            <h3>{product.title}</h3>

            <div className="product-price">
              <span className="price">${product.price}</span>
              <span className="period">{product.period}</span>
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
}

export default Products;
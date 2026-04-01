import React, { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import Products from "./components/Products";
import HowItWorks from "./components/HowItWorks";
import CartModal from "./components/CartModal";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Buy Now Button এ ক্লিক করলে Cart এ যোগ হবে
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);

      if (existingItem) {
        // যদি আগে থেকে থাকে তাহলে quantity বাড়বে
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      } else {
        // নতুন প্রোডাক্ট যোগ
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  // Cart থেকে আইটেম সম্পূর্ণভাবে Remove
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Total Price Calculation (quantity সহ)
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  // Navbar এ দেখানোর জন্য Total Items
  const cartCount = cartItems.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  return (
    <div className="App">
      <Navbar 
        cartCount={cartCount} 
        onCartClick={() => setIsCartOpen(true)} 
      />

      <Banner />
      <Stats />
      <Products addToCart={addToCart} />
      <HowItWorks />

      {/* Cart Modal */}
      <CartModal 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        totalPrice={totalPrice}
      />
    </div>
  );
}

export default App;
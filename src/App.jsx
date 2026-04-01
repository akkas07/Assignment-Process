import React, { useState } from "react";
import "./App.css";

// All Components Import
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import Products from "./components/Products";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";       
import CartModal from "./components/CartModal";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // ================== Cart Functions ==================
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);

      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Total Price
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  // Cart Count for Navbar & Products
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
      <Products addToCart={addToCart} cartCount={cartCount} />
      <HowItWorks />
      <Pricing />

      {/* Cart Modal */}
      <CartModal 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        totalPrice={totalPrice}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
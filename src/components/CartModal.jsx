import React from "react";
import "./CartModal.css";

const CartModal = ({ 
  isOpen, 
  onClose, 
  cartItems, 
  removeFromCart, 
  totalPrice 
}) => {
  if (!isOpen) return null;

  return (
    <div className="cart-modal-overlay" onClick={onClose}>
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}

  
  
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        {/* Cart Items */}

        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p className="empty-cart">Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-info">
                  <span className="item-icon">{item.icon}</span>
                  <div>
                    <h4>{item.name}</h4>
                    <p className="item-price">${item.price}</p>
                  </div>
                </div>
                <button 
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

    

        {cartItems.length > 0 && (
          <>
            <div className="cart-total">
              <span>Total:</span>
              <span className="total-price">${totalPrice}</span>
            </div>

            <button className="checkout-btn">
              Proceed To Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
import React from "react";
import "./CartModal.css";

function CartModal({ isOpen, onClose, cartItems, removeFromCart, totalPrice }) {
  if (!isOpen) return null;

  return (
    <div className="cart-modal-overlay" onClick={onClose}>
      <div className="cart-modal" onClick={e => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Your Cart ({cartItems.length})</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        {cartItems.length === 0 ? (
          <p className="empty-cart">Cart is empty</p>
        ) : (
          <>
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <span>{item.icon} {item.title}</span>
                <span>${item.price}</span>
                <button onClick={() => removeFromCart(item.id)} className="remove-btn">Remove</button>
              </div>
            ))}
            <div className="cart-total">
              Total: ${totalPrice}
            </div>
            <button className="checkout-btn">Proceed To Checkout</button>
          </>
        )}
      </div>
    </div>
  );
}

export default CartModal;
import React from "react";
import { Link } from "react-router-dom";
import "../styles2/CheckoutPage.css";

const CheckoutPage = ({ cartItems, updateQuantity, removeItem }) => {
  return (
    <div className="checkout-page">
      <div className="cart-header">
        <h2 className="cursive-heading">☕Your delicious Basket Awaits🍰</h2>
        <Link to="/menu" className="close-btn">
          ×
        </Link>
      </div>

      <div className="cart-items">
        {cartItems.map((item, index) => (
          <div className="cart-item" key={index}>
            <h4>{item.name}</h4>
            <div className="item-controls">
              <span>£{(item.price * item.quantity).toFixed(2)}</span>
              <div className="quantity-controls">
                <button
                  onClick={() =>
                    updateQuantity(index, Math.max(1, item.quantity - 1))
                  }
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(index, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              <button className="remove-btn" onClick={() => removeItem(index)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-total">
        <h3>
          Total: £
          {cartItems
            .reduce((sum, item) => sum + item.price * item.quantity, 0)
            .toFixed(2)}
        </h3>
        <button className="checkout-btn">Proceed to Payment</button>
      </div>
    </div>
  );
};

export default CheckoutPage;

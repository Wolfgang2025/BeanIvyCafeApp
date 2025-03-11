import React from "react";
import { useLocation } from "react-router-dom";
import "../styles2/CheckoutPage.css"; // Import the CSS file

const CheckoutPage = () => {
  const location = useLocation();
  const cartItems = location.state?.cartItems || [
    { name: "Espresso", price: 250, quantity: 1 },
    { name: "Muffin", price: 350, quantity: 2 },
    { name: "Sandwich", price: 500, quantity: 1 },
  ]; // Default sample items if none are passed

  // Calculate total price in GBP (£)
  const totalAmount =
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0) / 100;

  const handleCheckout = async () => {
    const response = await fetch(
      "http://localhost:5000/create-checkout-session",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartItems }), // Send cart items to backend
      }
    );

    const { url } = await response.json();
    window.location.href = url; // Redirect to Stripe Checkout page
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Checkout</h2>
      <table className="checkout-table">
        <thead>
          <tr className="table-header">
            <th className="item-column">Item</th>
            <th className="quantity-column">Qty</th>
            <th className="price-column">Price (£)</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={index} className="table-row">
              <td className="item-name">{item.name}</td>
              <td className="item-quantity">{item.quantity}</td>
              <td className="item-price">£{(item.price / 100).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3 className="total-amount">Total: £{totalAmount.toFixed(2)}</h3>
      <button className="checkout-button" onClick={handleCheckout}>
        Proceed to Payment
      </button>
    </div>
  );
};

export default CheckoutPage;

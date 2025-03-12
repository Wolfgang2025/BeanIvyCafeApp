import React from "react";
import { useCart } from "../context2/CartContext"; // Import Global Cart Context
import "../styles2/CheckoutPage.css"; // Import Styles

const CheckoutPage = () => {
  const { cartItems } = useCart(); // ✅ Get Cart Items from Global Context

  if (!cartItems || cartItems.length === 0) {
    return (
      <h2 className="empty-cart">
        Your cart is empty! Please add items before checkout.
      </h2>
    );
  }

  const totalAmount =
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0) / 100;

  const handleCheckout = async () => {
    try {
      console.log("🔹 Sending cart items:", cartItems);

      const response = await fetch(
        "https://vrdv22-5000.csb.app/create-checkout-session",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ cartItems }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const { url } = await response.json();
      console.log("✅ Redirecting to Stripe Checkout:", url);

      if (url) {
        window.location.href = url;
      } else {
        throw new Error("Stripe checkout URL is missing in response.");
      }
    } catch (error) {
      console.error("❌ Error during checkout:", error);
      alert(`Failed to proceed to payment: ${error.message}`);
    }
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

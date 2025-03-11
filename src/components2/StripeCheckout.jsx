import React from "react";

const CheckoutPage = ({ cartItems }) => {
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
    <div>
      <h2>Checkout</h2>
      <button onClick={handleCheckout}>Proceed to Payment</button>
    </div>
  );
};

export default CheckoutPage;

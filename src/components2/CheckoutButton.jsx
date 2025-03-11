import React from "react";

function CheckoutButton() {
  const handleCheckout = async () => {
    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
      });
      const { url } = await response.json();
      window.location.href = url; // Redirect to Stripe Checkout
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return <button onClick={handleCheckout}>Pay Now</button>;
}

export default CheckoutButton;

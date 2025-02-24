import React from "react";

export default function CheckoutPage() {
  return (
    <div className="checkout-page">
      <h1 className="cursive-heading">Your Bohemian Basket</h1>
      <p>
        The treasures you've gathered on your journey through Bean & Ivy await
        below. Each item is packed with love and a sprinkle of magic.
      </p>
      {/* Add a mock basket items list here */}
      <div className="basket-items">
        <p>Your basket is waiting to be filled with delightful treats!</p>
      </div>
      <button className="checkout-button">Complete Your Journey</button>
    </div>
  );
}

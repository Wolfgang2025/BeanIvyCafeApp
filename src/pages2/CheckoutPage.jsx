import React from "react";
import PayPalPayment from "../components2/PayPalPayment";

const CheckoutPage = () => {
  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <p>Please complete your payment:</p>
      <PayPalPayment totalAmount="25.00" />{" "}
      {/* Pass the total amount as a prop */}
    </div>
  );
};

export default CheckoutPage;

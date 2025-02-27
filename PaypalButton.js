import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

const PayPalButton = () => {
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "10.00", // Set the amount dynamically as needed
            currency_code: "GBP", // Currency code (GBP for British Pounds)
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      alert(`Transaction completed by ${details.payer.name.given_name}`);
      // You can add additional logic here (e.g., update order status in your database)
    });
  };

  const onError = (err) => {
    console.error("PayPal error:", err);
    alert("An error occurred during the payment process. Please try again.");
  };

  return (
    <div id="paypal-button-container">
      <PayPalButtons
        createOrder={createOrder}
        onApprove={onApprove}
        onError={onError}
      />
    </div>
  );
};

export default PayPalButton;
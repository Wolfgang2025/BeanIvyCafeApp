import React, { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

const PayPalButton = ({ amount = "100", onSuccess }) => {
  const [error, setError] = useState(null);
  const [orderID, setOrderID] = useState(null);

  const createOrder = async () => {
    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cart: {
            // You can customize this cart object to include actual items
            items: [
              {
                name: "Coffee Order",
                description: "Bean & Ivy Cafe Order",
                value: amount
              }
            ]
          }
        })
      });

      const orderData = await response.json();
      
      if (orderData.id) {
        setOrderID(orderData.id);
        return orderData.id;
      } else {
        const errorDetail = orderData?.details?.[0] || orderData.error;
        throw new Error(errorDetail?.issue || errorDetail?.description || "Unknown error occurred");
      }
    } catch (error) {
      console.error("Error creating order:", error);
      setError(error.message);
      return null;
    }
  };

  const onApprove = async (data) => {
    try {
      const response = await fetch(`/api/orders/${data.orderID}/capture`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        }
      });

      const orderData = await response.json();
      
      // Your server defines the structure of this data, assuming it has an id property
      const captureID = orderData?.id || orderData?.purchase_units?.[0]?.payments?.captures?.[0]?.id;
      
      if (captureID) {
        console.log("Payment successful", orderData);
        if (onSuccess) {
          onSuccess(orderData);
        }
        return orderData;
      } else {
        const errorDetail = orderData?.details?.[0] || orderData.error;
        throw new Error(errorDetail?.issue || errorDetail?.description || "Unknown error occurred during capture");
      }
    } catch (error) {
      console.error("Error capturing order:", error);
      setError(error.message);
      return null;
    }
  };

  return (
    <div className="paypal-button-container">
      {error && <div className="error-message">{error}</div>}
      <PayPalButtons
        createOrder={createOrder}
        onApprove={onApprove}
        style={{
          layout: "vertical",
          color: "gold",
          shape: "rect",
          label: "pay"
        }}
      />
    </div>
  );
};

export default PayPalButton;

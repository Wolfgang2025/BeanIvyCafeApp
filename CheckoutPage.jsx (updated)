import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PayPalButton from "../components/PayPalButton";
import "../styles.css";

const CheckoutPage = () => {
  const [isComplete, setIsComplete] = useState(false);
  const navigate = useNavigate();
  
  // This would typically come from your cart state or context
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Cappuccino", price: 4.50, quantity: 2 },
    { id: 2, name: "Blueberry Muffin", price: 3.25, quantity: 1 },
    { id: 3, name: "Avocado Toast", price: 8.95, quantity: 1 }
  ]);
  
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };
  
  const calculateTax = () => {
    return calculateSubtotal() * 0.08; // 8% tax rate
  };
  
  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax();
  };
  
  const handlePaymentSuccess = (details) => {
    console.log("Payment completed", details);
    setIsComplete(true);
    // In a real app, you would send this data to your server
    // or update your state management system
  };
  
  const handleCancel = () => {
    navigate("/");
  };
  
  return (
    <div className="checkout-container">
      <h1 className="text-center mb-4 cafe-name">Bean & Ivy Cafe</h1>
      
      {isComplete ? (
        <div className="thank-you-container">
          <h2 className="text-center">Thank you for visiting Bean & Ivy Cafe today!</h2>
          <p className="text-center">Your order has been processed successfully.</p>
          <button 
            className="continue-btn"
            onClick={() => navigate("/")}
          >
            Return to Home
          </button>
        </div>
      ) : (
        <>
          <div className="order-summary">
            <h2>Order Summary</h2>
            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="item-details">
                    <span className="item-name">{item.name}</span>
                    <span className="item-quantity">x{item.quantity}</span>
                  </div>
                  <span className="item-price">£{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            
            <div className="price-details">
              <div className="price-row">
                <span>Subtotal</span>
                <span>£{calculateSubtotal().toFixed(2)}</span>
              </div>
              <div className="price-row">
                <span>Tax (8%)</span>
                <span>£{calculateTax().toFixed(2)}</span>
              </div>
              <div className="price-row total">
                <span>Total</span>
                <span>£{calculateTotal().toFixed(2)}</span>
              </div>
            </div>
          </div>
          
          <div className="payment-section">
            <h2>Payment Method</h2>
            <PayPalButton 
              amount={calculateTotal().toFixed(2)} 
              onSuccess={handlePaymentSuccess} 
            />
          </div>
        </>
      )}
    </div>
  );
};

export default CheckoutPage;

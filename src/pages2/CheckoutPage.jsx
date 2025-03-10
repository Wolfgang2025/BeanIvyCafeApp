import React, { useState } from "react";
import { useCart } from "../context2/CartContext"; // Use CartContext for global cart state
import CartSidebar from "../components2/CartSidebar"; // Moved cart sidebar here
/*import "../styles2/CheckoutPage.css"; // Create a separate checkout page CSS file*/

const CheckoutPage = () => {
  const { cartItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(true); // Keep cart open by default

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="checkout-items">
          {cartItems.map((item, index) => (
            <div key={index} className="checkout-item">
              <h3>{item.name}</h3>
              <p>Price: £{item.price.toFixed(2)}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;

/* What changed?

Cart sidebar is now only in CheckoutPage.js.
Users will now go to the checkout page to see their cart.
Cart updates automatically using useCart().*/

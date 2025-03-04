import React, { useState } from "react";
import { useCart } from "../CartContext"; // Import useCart
import { menuItems } from "../data/MenuData";
import MenuItem from "../data/MenuItem"; // Import MenuItem from the data folder
import CartSidebar from "../components/CartSidebar";
import "./MenuPage.css";

const MenuPage = () => {
  const { addToCart } = useCart(); // Use addToCart from context
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="menu-page">
      <div className="menu-header">
        <h1>Our Menu</h1>
        <div className="cart-icon" onClick={() => setIsCartOpen(!isCartOpen)}>
          🛒 {/* Display cart item count if needed */}
        </div>
      </div>

      <div className="menu-grid">
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            addToCart={() => addToCart(item)} // Pass addToCart function
          />
        ))}
      </div>

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default MenuPage;

import React, { useState } from "react";
import { useCart } from "../CartContext"; // Import useCart
import CartSidebar from "../routing2/CartSidebar";
import { menuItems } from "../data2/menuData";
import MenuItem from "../routing2/MenuItem/MenuItem";
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

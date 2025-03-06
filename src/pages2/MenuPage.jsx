import React, { useState } from "react";
import { useCart } from "../context2/CartContext"; // Import useCart
import CartSidebar from "../components2/CartSidebar";
import { menuItems } from "../data2/menuData";
import MenuItem from "../components2/MenuItem";
import "../styles2/MenuPage.css";

const MenuPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item) => {
    setCartItems([...cartItems, { ...item, quantity: 1 }]);
  };

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

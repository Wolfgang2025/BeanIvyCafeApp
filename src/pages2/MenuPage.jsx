import React from "react";
import { Link } from "react-router-dom";
import { menuItems } from "../data2/menuData";
import MenuItem from "../components2/MenuItem";
import "../styles2/MenuPage.css";

const MenuPage = ({ cartItems, addToCart }) => {
  return (
    <div className="menu-page">
      <div className="menu-header">
        <h2>Our Menu</h2>
        <Link to="/checkout" className="cart-icon">
          🛒 {cartItems.length > 0 && <span>{cartItems.length}</span>}
        </Link>
      </div>

      <div className="menu-grid">
        {menuItems.map((item) => (
          <MenuItem key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default MenuPage;

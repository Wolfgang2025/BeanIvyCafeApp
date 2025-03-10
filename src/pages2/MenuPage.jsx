import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { menuItems } from "../data2/menuData";
import "../styles2/MenuPage.css";

const MenuPage = () => {
  const navigate = useNavigate();

  const addToCart = (item, quantity) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ ...item, quantity });
    localStorage.setItem("cart", JSON.stringify(cart));

    navigate("/checkout"); // Redirect to checkout
  };

  return (
    <div className="menu-page">
      <div className="menu-header">
        <h1>Our Menu</h1>
      </div>

      <div className="menu-grid">
        {menuItems.map((item) => (
          <MenuItem key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

// ✅ Merged MenuItem Component (with Image, Description, and Quantity)
const MenuItem = ({ item, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="menu-item">
      {/* Item Image */}
      <img src={item.image} alt={item.name} className="item-image" />

      {/* Item Name & Description */}
      <h3 className="item-name">{item.name}</h3>
      <p className="item-description">{item.description}</p>

      {/* Item Price */}
      <p className="item-price">£{item.price.toFixed(2)}</p>

      {/* Quantity Selector */}
      <div className="quantity-selector">
        <label>Qty:</label>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="quantity-input"
        />
      </div>

      {/* Add to Cart Button */}
      <button
        className="add-to-cart-btn"
        onClick={() => addToCart(item, quantity)}
      >
        Add to Cart 🛒
      </button>
    </div>
  );
};

export default MenuPage;

import React from "react";
import { useContext } from "react";
import { useCart } from "../context2/CartContext"; // ✅ Correct import
import "../styles2/MenuPage.css";

const MenuItem = ({ item }) => {
  const { addToCart } = useCart(); // ✅ Ensure you're using useCart()

  return (
    <div className="menu-item">
      <img src={item.image} alt={item.name} className="item-image" />
      <div className="item-details">
        <h3 className="item-name">{item.name}</h3>
        <p className="item-price">£{item.price.toFixed(2)}</p>
        <p className="item-description">{item.description}</p>
        <button className="add-to-cart-btn" onClick={() => addToCart(item)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default MenuItem;

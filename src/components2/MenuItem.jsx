import React, { useState } from "react";
import "../styles2/MenuItem.css";

const MenuItem = ({ item, addToCart, cartItems = [] }) => {
  // Find the current quantity of the item in the cart
  const cartItem = cartItems.find((cartItem) => cartItem.id === item.id);
  const initialQuantity = cartItem ? cartItem.quantity : 0;

  // State to manage the quantity
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(item, quantity); // Add the item to the cart with the selected quantity
    }
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity)) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="menu-item">
      <img src={item.image} alt={item.name} className="item-image" />
      <div className="item-details">
        <h3 className="item-name">{item.name}</h3>
        <p className="item-price">£{item.price.toFixed(2)}</p>
        <p className="item-description">{item.description}</p>
        <div className="quantity-controls">
          <input
            type="number"
            min="0"
            value={quantity}
            onChange={handleQuantityChange}
            className="quantity-input"
          />
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            {quantity > 0 ? `Update Cart (${quantity})` : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;

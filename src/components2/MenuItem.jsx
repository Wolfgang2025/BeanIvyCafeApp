import React, { useState } from "react";

const MenuItem = ({ item, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(item, quantity);
    }
  };

  return (
    <div className="menu-item">
      <div className="item-details">
        <h3 className="item-name">{item.name}</h3>
        <p className="item-price">£{item.price.toFixed(2)}</p>
        <p className="item-description">{item.description}</p>
        <div className="quantity-controls">
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
            className="quantity-input"
          />
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Update Cart ({quantity})
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;

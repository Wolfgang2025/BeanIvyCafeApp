import React from "react";
import { useNavigate } from "react-router-dom"; /*new code added*/
import "../styles2/MenuItem.css";

const MenuItem = ({ item, addToCart }) => {
  const navigate = useNavigate(); // Initialise the navigate function

  const handleAddToCart = () => {
    addToCart(item); // Add the item to the cart
    navigate("/checkout"); // Redirect to the CheckoutPage
  };

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

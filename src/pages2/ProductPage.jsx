import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { menuItems } from "../data2/menuData";

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const product = menuItems.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const addToCart = () => {
    alert(`Added ${quantity} ${product.name}(s) to cart`);
    navigate("/checkout");
  };

  return (
    <div className="product-page">
      <img src={product.image} alt={product.name} className="product-image" />
      <h1>{product.name}</h1>
      <p className="product-price">£{product.price.toFixed(2)}</p>
      <p className="product-description">{product.description}</p>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
        min="1"
      />
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

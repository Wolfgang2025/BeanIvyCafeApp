// import React, { useState } from "react";

// import CartSidebar from "../components2/CartSidebar";
// import { menuItems } from "../data2/menuData";
// import MenuItem from "../components2/MenuItem";
// import "../styles2/MenuPage.css";

// const MenuPage = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [isCartOpen, setIsCartOpen] = useState(false);

//   const addToCart = (item) => {
//     setCartItems([...cartItems, { ...item, quantity: 1 }]);
//   };

//   return (
//     <div className="menu-page">
//       <div className="menu-header">
//         <h2>Our Menu</h2>
//         <div className="cart-icon" onClick={() => setIsCartOpen(!isCartOpen)}>
//           🛒 {cartItems.length > 0 && <span>{cartItems.length}</span>}
//         </div>
//       </div>

//       <div className="menu-grid">
//         {menuItems.map((item) => (
//           <MenuItem key={item.id} item={item} addToCart={addToCart} />
//         ))}
//       </div>

//       <CartSidebar
//         isOpen={isCartOpen}
//         onClose={() => setIsCartOpen(false)}
//         cartItems={cartItems}
//       />
//     </div>
//   );
// };

// export default MenuPage;

import React from "react";
import { Link } from "react-router-dom";
import { menuItems } from "../data2/menuData";
import MenuItem from "../components2/MenuItem";
import "../styles2/MenuPage.css";

const MenuPage = ({ cartItems, addToCart }) => {
  return (
    <div className="menu-page">
      <div className="menu-header">
        <h1 className="cursive-heading">Our Menu</h1>
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

// import React from "react";
// import "../styles2/CartSidebar.css";

// const CartSidebar = ({ isOpen, onClose, cartItems = [] }) => {

//   return (
//     <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
//       <div className="cart-header">
//         <h2>Your Basket</h2>
//         <button className="close-btn" onClick={onClose}>
//           ×
//         </button>
//       </div>

//       <div className="cart-items">
//         {cartItems.map((item, index) => (
//           <div className="cart-item" key={index}>
//             <h4>{item.name}</h4>
//             <div className="item-controls">
//               <span>£{(item.price * item.quantity).toFixed(2)}</span>
//               <div className="quantity-controls">
//                 <button>-</button>
//                 <span>{item.quantity}</span>
//                 <button>+</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="cart-total">
//         <h3>
//           Total: £
//           {cartItems
//             .reduce((sum, item) => sum + item.price * item.quantity, 0)
//             .toFixed(2)}
//         </h3>
//         <button className="checkout-btn">Checkout</button>
//       </div>
//     </div>
//   );
// };

// export default CartSidebar;

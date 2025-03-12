// import React from "react";
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
// import "../styles2/PayPal.css";

// const PayPalPayment = ({ totalAmount }) => {
//   const initialOptions = {
//     "client-id":
//       "AdVsAfIiMWgcgtgQeyRX6l9o-cVckBXLJ-tgJS3m1HM7sodaLOLMiSqOw67V7K6h_eAcJxEg9nII_pYQ", // Replace with your PayPal Client ID
//     currency: "GBP",
//     intent: "capture",
//   };

//   return (
//     <div className="paypal-container">
//       <h2 className="paypal-heading">Complete Your Purchase</h2>
//       <PayPalScriptProvider options={initialOptions}>
//         <div className="paypal-buttons">
//           <PayPalButtons
//             style={{
//               layout: "vertical",
//               color: "gold",
//               shape: "rect",
//               label: "paypal",
//               height: 55,
//             }}
//             createOrder={(data, actions) => {
//               return actions.order.create({
//                 purchase_units: [
//                   {
//                     amount: {
//                       value: totalAmount,
//                     },
//                   },
//                 ],
//               });
//             }}
//             onApprove={(data, actions) => {
//               return actions.order.capture().then((details) => {
//                 alert(
//                   `Transaction completed by ${details.payer.name.given_name}`
//                 );
//                 console.log("Payment details:", details);
//               });
//             }}
//             onError={(error) => {
//               console.error("PayPal error:", error);
//               alert("An error occurred during the payment process.");
//             }}
//           />
//         </div>
//       </PayPalScriptProvider>
//     </div>
//   );
// };

// export default PayPalPayment;

// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // ✅ Correct import path for App
import "./styles2/styles.css"; // ✅ Correct import path for CSS

// Create a root for ReactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component inside React.StrictMode
root.render(
  <React.StrictMode>
    <App /> {/* ✅ This should now work */}
  </React.StrictMode>
);

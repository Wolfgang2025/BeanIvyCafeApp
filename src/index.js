// src/index.js
import React from "react";
import ReactDOM from "react-dom"; // ✅ Use 'react-dom' instead of 'react-dom/client'
import App from "./App"; // ✅ Correct import path for App
import "./styles2/styles.css"; // ✅ Correct import path for CSS

// Render the App component inside React.StrictMode
ReactDOM.render(
  <React.StrictMode>
    <App /> {/* ✅ This will now work with React 17 */}
  </React.StrictMode>,
  document.getElementById("root") // ✅ Mount the app to the 'root' element
);
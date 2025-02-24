import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/routing/NavBar";
import MyRoutes from "./components/routing/MyRoutes";
import "./styles.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div style={{ paddingTop: "60px" }}>
          <h1 className="text-center mb-4 cafe-name">Bean & Ivy Cafe</h1>
          <MyRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;

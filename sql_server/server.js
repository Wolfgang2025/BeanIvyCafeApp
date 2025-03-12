const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const { config } = require("dotenv");
config
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST, // e.g., "localhost"
  user: process.env.DB_USER, // e.g., "root"
  password: process.env.DB_PASSWORD, // e.g., "password"
  database: process.env.DB_NAME, // e.g., "contactdb"
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL database!");
  }
});

// Create Table if Not Exists
const createTableQuery = `
CREATE TABLE IF NOT EXISTS feedback (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  feedback TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`;

const createTableQuery2 = `
CREATE TABLE IF NOT EXISTS subscriptions (
  email VARCHAR(20) NOT NULL,
  PRIMARY KEY (\`email\`)
)`;

db.query(createTableQuery, (err) => {
  if (err) console.error("Error creating table:", err);
});

db.query(createTableQuery2, (err) => {
    if (err) console.error("Error creating table:", err);
  });

// API Route to Save Feedback
app.post("/submit-feedback", (req, res) => {
  const { email, feedback } = req.body;
  const sql = "INSERT INTO feedback (email, feedback) VALUES (?, ?)";
  
  db.query(sql, [email, feedback], (err, result) => {
    if (err) {
      console.error("Error inserting feedback:", err);
      res.status(500).json({ error: "Database error" });
    } else {
      res.json({ message: "Saved successfully!" });
    }
  });
});

  // API Route to Save Feedback
app.post("/subscribe", (req, res) => {
    const { email } = req.body;
    const sql = "INSERT INTO subscriptions (email) VALUES (?)";
    
    db.query(sql, [email], (err, result) => {
      if (err) {
        console.error("Error subscribing to newsletter:", err);
        res.status(500).json({ error: "Database error" });
      } else {
        res.json({ message: "Successfully subscribed to newsletter!" });
      }
    });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

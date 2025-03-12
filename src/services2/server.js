import express from "express";
import mysql from "mysql2";
import cors from "cors";
import "dotenv/config";

import {
  ApiError,
  CheckoutPaymentIntent,
  Client,
  Environment,
  LogLevel,
  OrdersController,
  PaymentsController,
} from "@paypal/paypal-server-sdk";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const { PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET, PORT = 8080 } = process.env;

const client = new Client({
  clientCredentialsAuthCredentials: {
    oAuthClientId: PAYPAL_CLIENT_ID,
    oAuthClientSecret: PAYPAL_CLIENT_SECRET,
  },
  timeout: 0,
  environment: Environment.Sandbox,
  logging: {
    logLevel: LogLevel.Info,
    logRequest: { logBody: true },
    logResponse: { logHeaders: true },
  },
});
const ordersController = new OrdersController(client);
const paymentsController = new PaymentsController(client);

// Connect to the database and create the required tables
const db = GetDatabaseConnection();
OpenConnection(db);
CreateRequiredTablesIfNotExists(db);

/**
 * Create an order to start the transaction.
 * @see https://developer.paypal.com/docs/api/orders/v2/#orders_create
 */
const createOrder = async (cart) => {
  const collect = {
    body: {
      intent: "CAPTURE",
      purchaseUnits: [
        {
          amount: {
            currencyCode: "GBP",
            value: "100",
          },
        },
      ],
    },
    prefer: "return=minimal",
  };

  try {
    const { body, ...httpResponse } = await ordersController.ordersCreate(
      collect
    );
    // Get more response info...
    // const { statusCode, headers } = httpResponse;
    return {
      jsonResponse: JSON.parse(body),
      httpStatusCode: httpResponse.statusCode,
    };
  } catch (error) {
    if (error instanceof ApiError) {
      // const { statusCode, headers } = error;
      throw new Error(error.message);
    }
  }
};

// createOrder route
app.post("/api/orders", async (req, res) => {
  try {
    // use the cart information passed from the front-end to calculate the order amount detals
    const { cart } = req.body;
    const { jsonResponse, httpStatusCode } = await createOrder(cart);
    res.status(httpStatusCode).json(jsonResponse);
  } catch (error) {
    console.error("Failed to create order:", error);
    res.status(500).json({ error: "Failed to create order." });
  }
});

/**
 * Capture payment for the created order to complete the transaction.
 * @see https://developer.paypal.com/docs/api/orders/v2/#orders_capture
 */
const captureOrder = async (orderID) => {
  const collect = {
    id: orderID,
    prefer: "return=minimal",
  };

  try {
    const { body, ...httpResponse } = await ordersController.ordersCapture(
      collect
    );
    // Get more response info...
    // const { statusCode, headers } = httpResponse;
    return {
      jsonResponse: JSON.parse(body),
      httpStatusCode: httpResponse.statusCode,
    };
  } catch (error) {
    if (error instanceof ApiError) {
      // const { statusCode, headers } = error;
      throw new Error(error.message);
    }
  }
};

// captureOrder route
app.post("/api/orders/:orderID/capture", async (req, res) => {
  try {
    const { orderID } = req.params;
    const { jsonResponse, httpStatusCode } = await captureOrder(orderID);
    res.status(httpStatusCode).json(jsonResponse);
  } catch (error) {
    console.error("Failed to create order:", error);
    res.status(500).json({ error: "Failed to capture order." });
  }
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

  // API Route to Save subscription
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

function GetDatabaseConnection() 
{
  return mysql.createConnection({
    host: "localhost", // e.g., "process.env.DB_HOST"
    user: "root", // e.g., "process.env.DB_USER"
    password: "Gig@ni99", // e.g., "process.env.DB_PASSWORD"
    database: "contactdb", // e.g., "process.env.DB_NAME"
  });
}

function OpenConnection(db){
  db.connect((err) => {
    if (err) {
      console.error("Error connecting to database: ", err);
      return;
    }
    console.log("Connected to database.");
  });
}

function CreateRequiredTablesIfNotExists(db) {
  CreateFeedbackTable(db);
  CreateSubscriptionsTable(db);
}

function CreateFeedbackTable(db) {
  const sql = `CREATE TABLE IF NOT EXISTS feedback (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL
  )`;

  db.query(sql, (err) => {
    if (err) {
      console.error("Error creating feedback table: ", err);
      return;
    }
    console.log("Created feedback table.");
  });
}

function CreateSubscriptionsTable(db) {
  const sql = `CREATE TABLE IF NOT EXISTS subscriptions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL
  )`;

  db.query(sql, (err) => {
    if (err) {
      console.error("Error creating subscriptions table: ", err);
      return;
    }
    console.log("Created subscriptions table.");
  });
}

app.listen(PORT, () => {
  console.log(`Node server listening at http://localhost:${PORT}/`);
});

const express = require("express");
const cors = require("cors");
const Stripe = require("stripe");

const stripe = Stripe(
  "sk_test_51R1Fk3QvE4dQz98sbUkrppFpN2mhh7VjQEQBNKT76MyFeOSmPaPU7cP6dBwwsTSHr7EJmZ9CwYc0OEzf8P3CgXqT00N5ivOy3m"
); // Replace with your actual Stripe Secret Key

const app = express();

// ✅ Fix CORS
app.use(
  cors({
    origin: "https://vrdv22-3000.csb.app", // Allow requests from frontend
    methods: "GET, POST",
    allowedHeaders: "Content-Type",
  })
);

app.use(express.json());

// ✅ Add a Default Route to Show Backend is Running
app.get("/", (req, res) => {
  res.send("✅ Backend is running! Use POST /create-checkout-session.");
});

// ✅ Stripe Checkout Session Route
app.post("/create-checkout-session", async (req, res) => {
  try {
    const { cartItems } = req.body;

    if (!cartItems || cartItems.length === 0) {
      return res.status(400).json({ error: "Cart is empty" });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: cartItems.map((item) => ({
        price_data: {
          currency: "gbp",
          product_data: { name: item.name },
          unit_amount: item.price * 100, // Convert to pence
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });

    console.log("✅ Stripe Checkout URL:", session.url);
    res.json({ url: session.url });
  } catch (error) {
    console.error("❌ Error creating checkout session:", error);
    res.status(500).json({ error: error.message });
  }
});

// ✅ Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

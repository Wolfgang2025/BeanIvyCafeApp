const express = require("express");
const stripe = require("stripe")("sk_test_your_test_key");

const app = express();
app.use(express.json());

app.post("/create-checkout-session", async (req, res) => {
  const { cartItems } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: cartItems.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
          },
          unit_amount: item.price, // Price in cents
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url: "https://yourwebsite.com/success", // Redirect after success
      cancel_url: "https://yourwebsite.com/cancel", // Redirect if canceled
    });

    res.json({ url: session.url }); // Return the hosted checkout page URL
  } catch (error) {
    console.error("Error creating Checkout Session:", error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));

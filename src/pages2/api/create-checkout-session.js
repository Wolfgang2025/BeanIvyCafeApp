// /api/create-checkout-session.js
const stripe = require("stripe")("sk_test_your_test_key"); // Use your test secret key

export default async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Test Product",
            },
            unit_amount: 2000, // $20.00 (in cents)
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "https://yourwebsite.com/success", // Redirect after successful payment
      cancel_url: "https://yourwebsite.com/cancel", // Redirect if payment is canceled
    });

    res.json({ url: session.url }); // Return the Checkout Session URL to the frontend
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

import React, { useState } from "react";
import "../styles2/Contact.css";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  // Handle the subscription form submit
  const handleSubscriptionSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed with email:", email);
    setEmail(""); // Clear email input after submission
  };

  // Handle the feedback form submit
  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", feedback);
    alert("Thank you for your feedback!");
    setFeedback(""); // Clear feedback input after submission
  };

  return (
    <div className="about-us">
      <h1 className="cursive-heading">Contact Us</h1>
   
      <p>
        We’d love to hear from you! Reach out to us for any questions, feedback, or just to say hello.
      </p>

      <div className="contact-form" style={{ padding: "20px", maxWidth: "800px", margin: "0 auto", paddingBottom: "50px" }}>
        <h2 className="cursive-heading">Contact Information</h2>
        <p>Email: contact@beanandivy.com</p>
        <p>Phone: +123 456 7890</p>
        <p>Visit us at 123 Coffee Lane, Brewtown.</p>

        <h3>Subscribe to our Newsletter</h3>
        <form onSubmit={handleSubscriptionSubmit}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="email-input" // Added class for styling
            />
          </label>
          <button type="submit" className="submit-button">Subscribe</button>
        </form>

        <h3>Leave Your Feedback</h3>
        <form onSubmit={handleFeedbackSubmit}>
          <label>
          <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
              className="feedback-input" // Added class for styling
          />
          </label>
          <button type="submit" className="submit-button">Submit Feedback</button>
        </form>
      </div>
    </div>
  );
}


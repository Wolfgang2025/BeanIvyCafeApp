import React, { useState } from "react";
import axios from "axios";
import "../styles2/Contact.css";


export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  // Handle the subscription form submit
  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/submit-feedback", {
        email,
        feedback,
      });
      
      alert(response.data.message);
      setEmail(""); // Clear input
      setFeedback(""); // Clear feedback
    } catch (error) {
      alert("Error submitting feedback!");
      console.error(error);
    }
  };

  // Handle the subscription form submit
  const handleSubscriptionSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/subscribe", {
        email
      });
      
      alert(response.data.message);
      setEmail(""); // Clear input
    } catch (error) {
      alert("Error subscribing to newsletter!");
      console.error(error);
    }
  };

  return (
  
    <div className="contactContainer">
      <div className="about-us">
      <div className="contact-form" style={{ padding: "10px", maxWidth: "700px", margin: "0 auto", paddingBottom: "70px" }}>
        <h2 className="cursive-heading">✨📞 Contact Us ☕📍</h2>
        
        
        <p>
        We’d love to hear from you! Reach out to us for any questions, feedback, or just to say hello.
      </p>
       
       
        <ul className="contact-list">
          <li>
            <strong>Email:</strong> contact@beanandivy.co.uk
          </li>
          
          <li>
            <strong>Phone:</strong> +44 (0)20 7946 0958
          </li>
          
          <li>
            <strong>Visit us</strong>: Bean & Ivy Café, 45 Mayfair Lane,
            Mayfair, London, W1K 7AA, United Kingdom
          </li>
        </ul>
        

      
      <div className="newsletter-sectiom">
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
      </div>

      
       <div className="feedback-section">
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
    </div>
  </div>
  );
}


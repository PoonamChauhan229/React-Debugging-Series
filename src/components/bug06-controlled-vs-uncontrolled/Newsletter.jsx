import { useState } from "react";
import "./Newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    alert(`Subscribed Email: ${email}`);
  };

  return (
    <div className="newsletter-container">
      <div className="newsletter-card">
        <h2>React Debugging Series</h2>

        <h3>Bug #06 - Controlled vs Uncontrolled Input</h3>

        <input
          type="email"
          placeholder="Enter your email"
        />

        <button onClick={handleSubscribe}>
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
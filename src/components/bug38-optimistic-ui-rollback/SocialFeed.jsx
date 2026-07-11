import { useState } from "react";
import "./SocialFeed.css";

const SocialFeed = () => {
  const [likes, setLikes] = useState(120);
  const [message, setMessage] = useState("");

  const handleLike = () => {
    // Optimistic Update
    setLikes((prev) => prev + 1);

    setMessage("Updating like...");

    // Fake API Call
    setTimeout(() => {
      const apiSuccess = false;

      if (apiSuccess) {
        setMessage("Like updated successfully.");
      } else {
        setMessage("Failed to update like.");
      }
    }, 1500);
  };

  return (
    <div className="container">
      <div className="card">

        <h2>React Debugging Series</h2>

        <h3>Bug #38 - Optimistic UI Rollback Issues</h3>

        <div className="post">

          <h2>React Debugging Tips</h2>

          <p>
            Learn React by fixing real-world bugs.
          </p>

          <h3>❤️ Likes : {likes}</h3>

          <button onClick={handleLike}>
            Like
          </button>

          {message && (
            <p className="message">
              {message}
            </p>
          )}

        </div>

      </div>
    </div>
  );
};

export default SocialFeed;
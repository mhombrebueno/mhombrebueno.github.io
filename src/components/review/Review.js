import { useState } from "react";

import "./Review.css";

function Review({ name, numStars, text }) {
  const [expanded, setExpanded] = useState(false);

  // Split text into paraphraphs
  const paragraphs = text.split("\n").filter((p) => p.trim() !== "");
  const isLong = paragraphs.length > 1;

  return (
    <div className="Review">
      <div className="Review-profile">
        <h1 className="Review-name">{name}</h1>
        <h2 className="Review-stars">
          {Array.from({ length: numStars }).map(() => (
            <span className="Review-star">&#9733;</span>
          ))}
          <span className="Review-num-stars">{numStars}</span>
        </h2>
      </div>

      <div className="Review-text">
        {expanded ? (
          paragraphs.map((paragraph, _) => (
            <p className="Review-paragraph">{paragraph}</p>
          ))
        ) : (
          <p className="Review-paragraph">{paragraphs[0]}</p>
        )}
      </div>

      {isLong && (
        <button
          className="Review-read-more-button"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "read less" : "read more"}
        </button>
      )}
    </div>
  );
}

export default Review;

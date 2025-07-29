import React, { useState } from "react";

import "./ReviewCard.css";

function ReviewCard({ name, numStars, review }) {
  const [expanded, setExpanded] = useState(false);

  const isLong = review.length > 1;

  const collapsedState = () => {
    const firstParagraph = review[0];
    return (
      <p className="review-text">
        {isLong ? firstParagraph + ".." : firstParagraph}
      </p>
    );
  };

  const expandedState = () => {
    return review.map((paragraph, idx) => (
      <p className="review-text" key={idx}>
        {paragraph}
      </p>
    ));
  };

  return (
    <div className="review-card">
      <h1 className="review-name">{name}</h1>
      <h2 className="review-stars">
        {Array.from({ length: numStars }).map((_, idx) => (
          <span className="star" key={idx}>
            &#9733;
          </span>
        ))}
      </h2>

      {expanded ? expandedState() : collapsedState()}

      {isLong && (
        <button
          className="toggle-button"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}
      {/* {displayedText.map((paragraph, idx) => (
        <p className="review-text" key={idx}>
          {paragraph}
        </p>
      ))} */}
    </div>
  );
}

export default ReviewCard;

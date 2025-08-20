import React, { useState } from "react";

import "./Review.css";

function Review({ name, numStars, review }) {
  const [expanded, setExpanded] = useState(false);

  const isLong = review.length > 1;

  const collapsedState = () => {
    const firstParagraph = review[0];
    return (
      <p className="paragraph">
        {isLong ? firstParagraph + ".." : firstParagraph}
      </p>
    );
  };

  const expandedState = () => {
    return review.map((paragraph, index) => (
      <p className="paragraph" key={index}>
        {paragraph}
      </p>
    ));
  };

  return (
    <div className="review">
      <h1 className="name">{name}</h1>
      <h2 className="stars">
        {Array.from({ length: numStars }).map((_, index) => (
          <span className="star" key={index}>
            &#9733;
          </span>
        ))}
        <span className="num-stars">{numStars} / 5</span>
      </h2>

      {expanded ? expandedState() : collapsedState()}

      {isLong && (
        <button
          className="read-more-button"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}
    </div>
  );
}

export default Review;

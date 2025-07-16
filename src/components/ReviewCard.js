import "./ReviewCard.css";

function ReviewCard({ name, numStars, review }) {
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
      {review.map((paragraph, idx) => (
        <p className="review-text" key={idx}>
          {paragraph}
        </p>
      ))}
    </div>
  );
}

export default ReviewCard;

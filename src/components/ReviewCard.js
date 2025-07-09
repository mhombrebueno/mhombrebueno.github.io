function ReviewCard({ name, stars, review }) {
  return (
    <div className="review">
      <h1>{name}</h1>
      <h2> {stars} </h2>
      <div className="text">
        {review.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

export default ReviewCard;

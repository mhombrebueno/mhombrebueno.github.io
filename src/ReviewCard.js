function ReviewCard({ name, stars, review }) {
  return (
    <div className="review">
      <h1>
        {name} {stars}
      </h1>
      <div className="text">
        <p>{review}</p>
      </div>
    </div>
  );
}

export default ReviewCard;

function ReviewCard({ name, statement, review }) {
  return (
    <div className="review">
      <h1>{name}</h1>
      <div className="text">
        <h2>{statement}</h2>
        <p>{review}</p>
      </div>
    </div>
  );
}

export default ReviewCard;

function ReviewCard({ name, stars, review }) {
  return (
    <div className="review">
      <h1>{name}</h1>
      <h2> {stars} </h2>
      <div className="content">
        <p>{review}</p>
      </div>
    </div>
  );
}

export default ReviewCard;

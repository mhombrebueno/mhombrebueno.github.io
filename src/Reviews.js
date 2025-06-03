import "./Reviews.css";
import ReviewCard from "./ReviewCard";

function Reviews() {
  return (
    <section id="reviews">
      <h1>Reviews</h1>
      <div className="content">
        <ReviewCard
          name="Jayden Hutchinson"
          statement="Amazing Experience!"
          review="I've had such a great experience working with Miguel. The program was personalized, motivating, and truly effective. I felt supported every step of the way, and the results speak for themselves. Highly recommend to anyone looking to improve their health and fitness!"
        />
        <ReviewCard
          name="Jayden Hutchinson"
          statement="Amazing Experience!"
          review="I've had such a great experience working with Miguel. The program was personalized, motivating, and truly effective. I felt supported every step of the way, and the results speak for themselves. Highly recommend to anyone looking to improve their health and fitness!"
        />
        <ReviewCard
          name="Jayden Hutchinson"
          statement="Amazing Experience!"
          review="I've had such a great experience working with Miguel. The program was personalized, motivating, and truly effective. I felt supported every step of the way, and the results speak for themselves. Highly recommend to anyone looking to improve their health and fitness!"
        />
        <ReviewCard
          name="Jayden Hutchinson"
          statement="Amazing Experience!"
          review="I've had such a great experience working with Miguel. The program was personalized, motivating, and truly effective. I felt supported every step of the way, and the results speak for themselves. Highly recommend to anyone looking to improve their health and fitness!"
        />
      </div>
    </section>
  );
}

export default Reviews;

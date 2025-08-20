import "./Reviews.css";

import Review from "../../components/review/Review";
import Section from "../Section";
import { REVIEWS } from "../../constants";

function Reviews(props) {
  return (
    <Section {...props}>
      {REVIEWS.map((review) => (
        <Review {...review} />
      ))}
    </Section>
  );
}

export default Reviews;

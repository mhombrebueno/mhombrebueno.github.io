import "./Certifications.css";
import Section from "./Section";

import Certificate from "../components/Certificate";

function Certifications(props) {
  return (
    <Section {...props}>
      <Certificate
        title="Bachelor of Kinesiology"
        img="/imgs/certifications/ubc-certificate.jpg"
      />
      <Certificate
        title="Certified Personal Trainer"
        img="/imgs/certifications/certified-personal-trainer.jpg"
      />
      <Certificate
        title="Certified Nutrition Coach"
        img="/imgs/certifications/certified-nutrition-coach.jpg"
      />
      <Certificate
        title="Stretching & Flexibilty Coach"
        img="/imgs/certifications/stretch-flexibility-coach.jpg"
      />
    </Section>
  );
}

export default Certifications;

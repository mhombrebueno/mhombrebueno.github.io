import "./Certifications.css";

import Certificate from "./Certificate";

function Certifications() {
  return (
    <section id="certifications">
      <h1>Certifications</h1>
      <div className="content">
        <Certificate
          title="Kinesiology"
          img="/imgs/certifications/certified-personal-trainer.jpg"
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
      </div>
    </section>
  );
}

export default Certifications;

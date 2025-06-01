import "./Certification.css";

import Certificate from "./Certificate";

function Certification() {
  return (
    <section id="certification">
      <h1 className="section-heading">Certification</h1>
      <div className="content">
        <Certificate
          title="Kinesiology"
          img="/imgs/certification/certified-personal-trainer.jpg"
        />
        <Certificate
          title="Certified Personal Trainer"
          img="/imgs/certification/certified-personal-trainer.jpg"
        />
        <Certificate
          title="Certified Nutrition Coach"
          img="/imgs/certification/certified-nutrition-coach.jpg"
        />
        <Certificate
          title="Stretching & Flexibilty Coach"
          img="/imgs/certification/stretch-flexibility-coach.jpg"
        />
      </div>
    </section>
  );
}

export default Certification;

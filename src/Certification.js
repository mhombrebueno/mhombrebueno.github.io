import "./Certification.css";

function Certification() {
  return (
    <section id="certification">
      <h1 class="section-heading">Certification</h1>
      <Certificate title="" img="" />

      <div class="content">
        <div class="certificate">
          <h1>Stretching & Flexibility Coach</h1>
          <img
            alt="Personal Trainer Certificate"
            src="imgs/certification/stretch-flexibility-coach.jpg"
          />
        </div>

        <div class="certificate">
          <h1>Certified Personal Trainer</h1>
          <img
            alt="Certified Personal Trainer"
            src="imgs/certification/certified-personal-trainer.jpg"
          />
        </div>

        <div class="certificate">
          <h1>Certified Nutrition Coach</h1>
          <img
            alt="Certified Nutrition Coach"
            src="imgs/certification/certified-nutrition-coach.jpg"
          />
        </div>
      </div>
    </section>
  );
}

export default Certification;

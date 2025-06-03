import "./Profile.css";

function Profile() {
  return (
    <section id="profile">
      <img alt="Portrait" src="/imgs/portrait.jpeg" />
      <div className="text">
        <h1>Miguel Hombrebueno</h1>
        <div>
          <h2>UBC Kinesiology | Personal Trainer | BCPA Powerlifter</h2>
        </div>
        <p>
          I am a UBC Kinesiology graduate, competitive powerlifter, certified
          personal trainer, and more. But I didn’t start here.
        </p>
        <p>
          Growing up, I struggled with confidence, especially as one of the
          shortest guys in the room. After suffering an injury that left me
          sidelined, I felt even more disconnected from my body and unsure of
          myself. That’s when I found the gym. What started as rehab turned into
          a lifelong passion. Lifting gave me more than physical strength, it
          helped me rebuild my mindset and redefine what it meant to feel
          powerful.
        </p>
        <p>
          Through powerlifting, I found confidence, resilience, and a community
          that thrives on progress over perfection. Now, I coach with that same
          mindset: helping others overcome self-doubt, bounce back from injury,
          and build lasting strength—physically and mentally.
        </p>
        <p>
          Whether you are just starting or chasing your next PR, I’ll help you
          train with purpose, backed by science and real experience. No matter
          your size, background, or starting point, everyone deserves to feel
          strong in their own body.
        </p>
      </div>
    </section>
  );
}

export default Profile;

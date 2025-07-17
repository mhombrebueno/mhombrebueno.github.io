import "./Profile.css";
import ExpandableBox from "../components/ExpandableBox";
import Section from "./Section";

function Profile(props) {
  return (
    <Section {...props}>
      <div className="profile-hero">
        <h1 className="profile-title">Miguel Hombrebueno</h1>
        <span>
          <h2 className="profile-subtitle">
            UBC Kinesiology | Personal Trainer | BCPA Powerlifter
          </h2>
        </span>
        <ExpandableBox
          text={[
            `I am a UBC Kinesiology graduate, competitive powerlifter, certified
            personal trainer, and more. But I didn’t start here...  `,

            `Growing up, I struggled with confidence, especially as one of the
            shortest guys in the room. After suffering an injury that left me
            sidelined, I felt even more disconnected from my body and unsure of
            myself. That’s when I found the gym. What started as rehab turned into
            a lifelong passion. Lifting gave me more than physical strength, it
            helped me rebuild my mindset and redefine what it meant to feel
            powerful.`,

            `Through powerlifting, I found confidence, resilience, and a community
            that thrives on progress over perfection. Now, I coach with that same
            mindset: helping others overcome self-doubt, bounce back from injury,
            and build lasting strength—physically and mentally.`,

            `Whether you are just starting or chasing your next PR, I’ll help you
            train with purpose, backed by science and real experience. No matter
            your size, background, or starting point, everyone deserves to feel
            strong in their own body.`,
          ]}
        />
      </div>
    </Section>
  );
}

export default Profile;

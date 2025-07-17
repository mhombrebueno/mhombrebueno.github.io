import ContactCard from "../components/ContactCard";
import Section from "./Section";

import "./Contacts.css";

import {
  BUSINESS_EMAIL,
  BUSINESS_INSTAGRAM,
  BUSINESS_TIKTOK,
} from "../Variables";

function Contacts(props) {
  return (
    <Section {...props}>
      <img
        className="contact-img"
        src="/imgs/miguel/portrait.jpg"
        alt="Portrait"
      />
      <div className="contact-list">
        <h2 className="contact-full-name">Miguel Hombrebueno</h2>
        <ContactCard
          icon="/icons/email.svg"
          alt="Email"
          contact={BUSINESS_EMAIL}
        />
        <ContactCard
          icon="/icons/insta.svg"
          alt="Instagram"
          contact={BUSINESS_INSTAGRAM}
        />
        <ContactCard
          icon="/icons/tiktok.svg"
          alt="TikTok"
          contact={BUSINESS_TIKTOK}
        />
      </div>
    </Section>
  );
}

export default Contacts;

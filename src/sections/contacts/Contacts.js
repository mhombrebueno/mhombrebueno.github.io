import ContactCard from "../../components/contact-card/ContactCard";
import Section from "../Section";

import "./Contacts.css";

import {
  BUSINESS_EMAIL,
  BUSINESS_INSTAGRAM,
  INSTAGRAM_LINK,
  BUSINESS_TIKTOK,
  TIKTOK_LINK,
} from "../../global";

function Contacts(props) {
  return (
    <Section {...props}>
      <div className="contact-list">
        <ContactCard
          icon="/icons/email.svg"
          alt="Email"
          contact={BUSINESS_EMAIL}
          link=""
        />
        <ContactCard
          icon="/icons/insta.svg"
          alt="Instagram"
          contact={BUSINESS_INSTAGRAM}
          link={INSTAGRAM_LINK}
        />
        <ContactCard
          icon="/icons/tiktok.svg"
          alt="TikTok"
          contact={BUSINESS_TIKTOK}
          link={TIKTOK_LINK}
        />
      </div>
    </Section>
  );
}

export default Contacts;

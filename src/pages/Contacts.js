import "./Contacts.css";
import {
  BUSINESS_EMAIL,
  BUSINESS_INSTAGRAM,
  BUSINESS_TIKTOK,
} from "../Variables";
import ContactCard from "../components/ContactCard";
import Section from "./Section";

function Contacts(props) {
  return (
    <Section {...props}>
      <img
        className="contact-img"
        src="/imgs/miguel/portrait.jpg"
        alt="Portrait"
      />
      <div className="contact-list">
        <h2>Miguel Hombrebueno</h2>
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
      <img
        className="contact-img"
        src="/imgs/miguel/bicep-curl.jpg"
        alt="Portrait"
      />
    </Section>
    // <section id="contact">
    //   <h1>Contact</h1>
    //   <div className="content">
    // <img
    //   className="portrait"
    //   src="/imgs/miguel/portrait.jpg"
    //   alt="Portrait"
    // ></img>

    //     <div className="contacts">
    //       <h2>Miguel Hombrebueno</h2>
    // <ContactInfo
    //   icon="/icons/email.svg"
    //   alt="Email"
    //   contact={BUSINESS_EMAIL}
    // />
    // <ContactInfo
    //   icon="/icons/insta.svg"
    //   alt="Instagram"
    //   contact={BUSINESS_INSTAGRAM}
    // />
    // <ContactInfo
    //   icon="/icons/tiktok.svg"
    //   alt="TikTok"
    //   contact={BUSINESS_TIKTOK}
    // />
    //     </div>
    // <img
    //   className="portrait"
    //   src="/imgs/miguel/bicep-curl.jpg"
    //   alt="Portrait"
    // ></img>
    //   </div>
    // </section>
  );
}

export default Contacts;

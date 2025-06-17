import "./Contact.css";
import { BUSINESS_EMAIL, BUSINESS_INSTAGRAM } from "./Variables";

function Contact() {
  return (
    <section id="contact">
      <h1>Contact</h1>
      <div className="content">
        <img
          className="portrait"
          src="/imgs/miguel/portrait.jpg"
          alt="Portrait"
        ></img>
        <div>
          <div className="info">
            <img src="/icons/email.svg" alt="Email" />
            <span>{BUSINESS_EMAIL}</span>
          </div>
          <div className="info">
            <img src="/icons/insta.svg" alt="Instagram" />
            <span>{BUSINESS_INSTAGRAM}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

import "./Contact.css";
import { BUSINESS_EMAIL, BUSINESS_INSTAGRAM } from "./Variables";

function Contact() {
  return (
    <section id="contact">
      <h1>Contact</h1>
      <div className="content">
        <span>Email: {BUSINESS_EMAIL}</span>
        <span>Instagram: {BUSINESS_INSTAGRAM}</span>
      </div>
    </section>
  );
}

export default Contact;

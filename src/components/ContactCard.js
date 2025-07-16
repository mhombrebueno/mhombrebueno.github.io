import "./ContactCard.css";

function ContactCard({ icon, alt, contact }) {
  return (
    <div className="contact-card">
      <img className="contact-card-icon" src={icon} alt={alt} />
      <span>{contact}</span>
    </div>
  );
}

export default ContactCard;

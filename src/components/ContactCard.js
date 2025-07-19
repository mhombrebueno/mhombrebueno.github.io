import "./ContactCard.css";

function ContactCard({ icon, alt, contact, link }) {
  return (
    <div className="contact-card">
      <div className="contact-card-info">
        <img className="contact-card-icon" src={icon} alt={alt} />
        <span>{contact}</span>
      </div>
      <div className="contact-links">
        <a href={link} target="_blank" className="action-icon">
          ↗
        </a>
        <a className="action-icon">📋</a>
      </div>
    </div>
  );
}

export default ContactCard;

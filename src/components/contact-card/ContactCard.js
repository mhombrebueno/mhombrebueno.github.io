import "./ContactCard.css";

function ContactCard({ icon, alt, contact, link }) {
  return (
    <div className="contact-card">
      <div className="contact-card-info">
        <img className="contact-card-icon" src={icon} alt={alt} />
        <span>{contact}</span>
      </div>
      <div className="contact-links">
        <a className="action-icon">
          <img
            src="./icons/link.png"
            alt="copy link"
            className="contact-link-icon"
          />
        </a>
        <a href={link} target="_blank" className="action-icon">
          <img
            src="./icons/open-in-new.png"
            alt="copy link"
            className="contact-link-icon"
          />
        </a>
      </div>
    </div>
  );
}

export default ContactCard;

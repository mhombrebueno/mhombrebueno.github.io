import "./ContactInfo.css";

function ContactInfo({ icon, alt, contact }) {
  return (
    <div className="contact-info">
      <img src={icon} alt={alt} />
      <span>{contact}</span>
    </div>
  );
}

export default ContactInfo;

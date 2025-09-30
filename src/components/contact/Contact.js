import "./Contact.css";

function Contact({ id, icon, text, link, mailto }) {
  return (
    <a className="Contact" href={link} target="_blank" rel="noreferror">
      <img id={id} className="Contact-icon" src={icon} alt={id} />
      <span className="Contact-handle">{text}</span>
    </a>
  );
}

export default Contact;

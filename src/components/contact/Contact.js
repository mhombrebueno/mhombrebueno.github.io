import "./Contact.css";

function Contact({ id, icon, handle, link, mailto }) {
  return (
    <a className="Contact" href={link} target="_blank" rel="noreferror">
      <img className="Contact-icon" src={icon} alt={id} />
      <span className="Contact-handle">{handle}</span>
    </a>
  );
}

export default Contact;

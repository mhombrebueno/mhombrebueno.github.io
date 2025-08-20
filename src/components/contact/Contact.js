import "./Contact.css";

function Contact({ id, icon, handle, link, mailto }) {
  return (
    <a href={link} target="_blank" className="contact">
      <img className="icon" src={icon} alt={id} />
      <span className="handle">{handle}</span>
    </a>
  );
}

export default Contact;

import "./Contacts.css";

import Section from "../Section";
import { CONTACTS } from "../../constants";
import Contact from "../../components/contact/Contact";

function Contacts(props) {
  return (
    <Section {...props}>
      {CONTACTS.map((contact) => (
        <Contact {...contact} />
      ))}
    </Section>
  );
}

export default Contacts;

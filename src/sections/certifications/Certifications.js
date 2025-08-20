import "./Certifications.css";
import Section from "../Section";

import Certificate from "../../components/certification/Certification";
import { CERTIFICATIONS } from "../../constants";

function Certifications(props) {
  return (
    <Section {...props}>
      {CERTIFICATIONS.map((certification) => (
        <Certificate {...certification} />
      ))}
    </Section>
  );
}

export default Certifications;

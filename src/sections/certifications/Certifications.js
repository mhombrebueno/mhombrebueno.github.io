import "./Certifications.css";
import Section from "../Section";

import Certificate from "../../components/certification/Certificate";
import { CERTIFICATIONS } from "../../constants";

function Certifications(props) {
  return (
    <Section {...props}>
      {CERTIFICATIONS.map((certificate) => (
        <Certificate {...certificate} />
      ))}
    </Section>
  );
}

export default Certifications;

import Section from "../Section";
import ReactPlayer from "react-player";

import "../../global.css";
import "./Video.css";

function Video(props) {
  return (
    <Section {...props}>
      <ReactPlayer url="https://www.youtube.com/watch?v=ZnWdHE5PR8k" controls />
    </Section>
  );
}

export default Video;

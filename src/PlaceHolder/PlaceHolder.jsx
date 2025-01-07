import { useState, useEffect } from "react";
import funnyGif from "../assets/mrbean.gif";
import stillhere from "../assets/stillhere.gif";
import "./PlaceHolder.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function PlaceHolder() {
  let gif = funnyGif;
  const [timer, setTimer] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setTimer(true);
    }, 20000);
  }, []);
  if (timer) {
    gif = stillhere;
  }
  return (
    <>
      <img className="img" src={gif} alt="Funny GIF" />
      <h2>Back soon...</h2>
      <nav className="links">
        <a href="https://github.com/kdevante" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="mailto:kwizeradevante@gmail.com" target="_blank">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a
          href="https://www.linkedin.com/in/devante-kwizera-6a55031a2/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://www.instagram.com/_.devante_/" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </nav>
    </>
  );
}

export default PlaceHolder;

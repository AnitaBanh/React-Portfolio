import React from "react";
import '../styles/index.css';
import { Image } from "react-bootstrap";

export default function Footer() {
  return (
    <div>
      <a href="https://github.com/AnitaBanh">
      <Image
        src="github.png"
        alt="github cat logo"
        className="footerIcon"
        width= {40}
        height= {40}
      />
      </a>
      <a href="https://linkedin.com/AnitaBanh">
      <Image
        src="LI-In-Bug.png"
        alt="LinkedIn logo"
        className="footerIcon"
        width= {40}
        height= {40}
      />
      </a>
    </div>
  );
}

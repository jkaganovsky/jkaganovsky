import Nav from "../components/Nav";
import { Card, Media } from "react-bootstrap";

function Contact() {
  return(
    <>
    <Nav />
    <Card className="text-center bg-white my-5 py-5">
    <h5 className="contact text-center bg-white">CONTACT ME</h5>
      <ul>
      <a className="nav-link h5 container-fluid" href="mailto:jnctw33ty@gmail.com">
        <span className="iconify" data-icon="entypo:email" data-inline="false" data-width="40" data-height="40"></span>
        E-mail: jnctw33ty@gmail.com
      </a>
      <a className="nav-link h5" href="https://www.linkedin.com/in/jkaganovsky/">
        <span className="iconify" data-icon="mdi-linkedin" data-inline="false" data-width="40" data-height="40"></span>
          LinkedIn: https://www.linkedin.com/in/jkaganovsky/
      </a>
      <a className="nav-link h5" href="https://github.com/jkaganovsky">
          <span className="iconify" data-icon="entypo-social:github" data-inline="false" data-width="40" data-height="40"></span>
          Github: https://github.com/jkaganovsky
      </a>
      <a className="nav-link h5" href="resume">
        <span className="iconify" data-icon="zmdi:collection-pdf" data-inline="false" data-width="40" data-height="40"></span>
        Resume: https://docs.google.com/document/d/1U63ko9pZ3dNeMCcuE7i5g2YfHOdJp4xmGFkPXX4xC2E/edit?usp=sharing
      </a>
      </ul>
    </Card>
    </>
  )
}

export default Contact;
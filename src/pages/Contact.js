import Nav from "../components/Nav";
import { Card } from "react-bootstrap";

function Contact() {
  return(
    <>
    <Nav />
    <Card className="text-center bg-white my-5 py-5">
    <h5 className="contact text-center bg-white">CONTACT ME</h5>
      <ul>
      <a className="nav-link h5 container-fluid" href="mailto:jnctw33ty@gmail.com">
        <span className="iconify" data-icon="entypo:email" data-inline="false" data-width="40" data-height="40"></span>
        E-mails
      </a>
      <a className="nav-link h5" href="https://www.linkedin.com/in/jkaganovsky/">
        <span className="iconify" data-icon="mdi-linkedin" data-inline="false" data-width="40" data-height="40"></span>
          LinkedIn
      </a>
      <a className="nav-link h5" href="https://github.com/jkaganovsky">
          <span className="iconify" data-icon="entypo-social:github" data-inline="false" data-width="40" data-height="40"></span>
          Github
      </a>
      <a className="nav-link h5" href="resume">
        <span className="iconify" data-icon="zmdi:collection-pdf" data-inline="false" data-width="40" data-height="40"></span>
        Resume
      </a>
      </ul>
    </Card>
    </>
  )
}

export default Contact;
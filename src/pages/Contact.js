import Nav from "../components/Nav";

function Contact() {
  return(
    <>
    <Nav />
      <div className="container-fluid d-flex flex-wrap justify-content-center p-5 m-5">
        <div className="col-8 my-5 bg-white">

            <p className="fs-1 text-center pt-2">CONTACT ME</p>

            <a className="nav-link h5 text-center" href="mailto:jnctw33ty@gmail.com">
              <span className="iconify" data-icon="entypo:email" data-inline="false"></span>
              E-mail: jnctw33ty@gmail.com
            </a>

            <a className="nav-link h5 text-center" href="https://www.linkedin.com/in/jkaganovsky/">
              <span className="iconify" data-icon="mdi-linkedin" data-inline="false"></span>
              LinkedIn: https://www.linkedin.com/in/jkaganovsky/
            </a>

            <a className="nav-link h5 text-center" href="https://github.com/jkaganovsky">
              <span className="iconify" data-icon="entypo-social:github" data-inline="false"></span>
              Github: https://github.com/jkaganovsky
            </a>

            <a className="nav-link h5 text-center" href="resume">
              <span className="iconify" data-icon="zmdi:collection-pdf" data-inline="false"></span>
              Resume: https://docs.google.com/document/d/1U63ko9pZ3dNeMCcuE7i5g2YfHOdJp4xmGFkPXX4xC2E/edit?usp=sharing
            </a>
        </div>
      </div>
    </>
  )
}

export default Contact;
import React from "react";

function Contact() {
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-between m-5">
          <div className="col-8">
          </div>
          <div className="contact col-4 bg-white">
              <p className="fs-1 text-right">CONTACT ME</p>

              <a className="nav-link h5 text-right" href="mailto:jnctw33ty@gmail.com">
                  <span className="iconify" data-icon="entypo:email" data-inline="false"></span>
                  E-mail
              </a>


              <a className="nav-link h5 text-right" href="https://www.linkedin.com/in/jailanie-kaganovsky-573a00116/">
                  <span className="iconify" data-icon="mdi-linkedin" data-inline="false"></span>
                  LinkedIn
              </a>

              <a className="nav-link h5 text-right" href="https://github.com/jkaganovsky">
                  <span className="iconify" data-icon="entypo-social:github" data-inline="false"></span>
                  Github
              </a>

              <a className="nav-link h5 text-right" href="/assets/Resume.pdf">
                  <span className="iconify" data-icon="zmdi:collection-pdf" data-inline="false"></span>
                  Resume
              </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;
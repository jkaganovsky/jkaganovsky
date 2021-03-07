import { divide } from "lodash";

/* eslint-disable jsx-a11y/anchor-is-valid */
function Nav() {
  return(
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container-fluid">
          <a className="navbar-brand mb-0 h1">Jailanie Kaganovsky</a>
            <div className="col-sm d-flex flex-wrap justify-content-evenly">
                <a href="/" className="animate">
                    <span className="material-icons">home</span>
                    <span className="desc animate">Home</span>
                </a>
                <a href="about" className="animate">
                    <i className="material-icons">account_circle</i>
                    <span className="desc animate">About Me</span>
                </a>
                <a href="projects" className="animate">
                    <i className="material-icons">collections</i>
                    <span className="desc animate">Projects</span>
                </a>
                <a href="contact" className="animate">
                    <i className="material-icons">connect_without_contact</i>
                    <span className="desc animate">Contact Me</span>
                </a>
                <a href="resume" className="animate">
                    <i className="material-icons">picture_as_pdf</i>
                    <span className="desc animate">Resume</span>
                </a>
            </div>
        </div>
      </nav>
    </>
  )
}

export default Nav;
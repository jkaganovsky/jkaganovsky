import Nav from "../components/Nav";

function About() {
  return(
    <>
    <Nav />
      <div className="container-fluid p-5">
        <div className="row m-1">
          <div className="col-sm">
            <img className="self-portrait img-thumbnail rounded-circle" src="/assets/images/selfportrait.jpg" alt="Self Portrait" />
          </div>

          <div className="title-desc col d-flex flex-wrap bg-white p-5">

            <h1 className="title text-center fs-1">Research Coordinator & Full-Stack Web Developer</h1>

            <p className="lh-sm text-center fs-6">Full Stack Web Developer with a B.S. degree in Medical Technology and a continuous drive for learning. Known among staff for going above and beyond with great attention to detail while continuously and successfully meeting deadlines. Graduate of the University of Washington’s Coding Bootcamp who is passionate about creating intuitive user experiences with a focus on mobile first design and development. Skilled in JavaScript, HTML, CSS, Express, Express Handlebars, MySQL, MongoDB, React.js, and Node.js.</p>

          </div>
        </div>
      </div>
    </>
  )
}

export default About;
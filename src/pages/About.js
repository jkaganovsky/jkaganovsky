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

            <p className="lh-sm text-center fs-6">Very dedicated, patient-focused laboratory technician with 16 years of expertise in DNA extractions, tumor acquisitions, data entry, result entry, customer and client service relations, & Healthcare IT. Who exemplifies accuracy in patient history, medical and clinical documentation, kit send outs, workload organization, research assistance and coordination, and system application building, web development, and maintenance.</p>

          </div>
        </div>
      </div>
    </>
  )
}

export default About;
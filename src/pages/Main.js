/* eslint-disable react/jsx-no-target-blank */
function Main() {
  return(
    <>
      <div className="card my-5 py-5 bg-white">
        <div className="row">
          <div className="col-lg">
            <h1 className="name text-center"> JAILANIE KAGANOVSKY </h1>
          </div>
        </div>

        <div className="row">
          <div className="col-lg">
            <h2 className="title text-center">Research Coordinator & Full-Stack Web Developer</h2>
          </div>
        </div>
      </div>

      <div className="container-fluid pb-5">
        <div className="d-flex flex-wrap justify-content-evenly">
          <a className="text-white fw-bolder fs-3 p-4" href="about">ABOUT ME</a>
          <a className="text-white fw-bolder fs-3 p-4" href="projects">PROJECTS</a>
          <a className="text-white fw-bolder fs-3 p-4" href="contact">CONTACT ME</a>
          <a className="text-white fw-bolder fs-3 p-4" href="resume">RESUME</a>
        </div>
      </div>
    </>
  )
}

export default Main;
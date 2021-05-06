/* eslint-disable jsx-a11y/anchor-is-valid */
import Nav from "../components/Nav";
import ProjectsCarousel from "../components/ProjectsCarousel";
import ProjectsTable from "../components/ProjectsTable";

/* eslint-disable jsx-a11y/alt-text */
function Projects() {
  return(
    <>
      <Nav />
      <ProjectsCarousel />
      <ProjectsTable />
    </>
  )
}

export default Projects;
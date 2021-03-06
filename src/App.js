import Footer from "./components/Footer"
import Nav from "./components/Nav";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Main from "./pages/Main";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

function App() {
  const display = () => {
    const route = window.location.pathname
      if(route.includes("/about")){
        return <About />
      } else if(route.includes("/projects")){
        return <Projects />
      } else if(route.includes("/contact")){
        return <Contact />
      } else if(route.includes("/resume")){
        return <Resume />
      } else {
        return <Main />
      }
  }
  return (
    <>
      <Nav />
      {display()}
      <Footer />
    </>
  );
}

export default App;

import Nav from "../components/Nav";
import { Card, CardColumns, Image } from "react-bootstrap";

function About() {
  return(
    <>
      <Nav />
      <CardColumns className="text-center m-4">
        <Image
          width={300}
          height={200}
          src="/assets/images/selfportrait.jpg"
          alt="Self Portrait"
          roundedCircle
        />
        <Card>
          <Card.Body>
            <Card.Title>
              FULL-STACK WEB DEVELOPER
            </Card.Title>
            <Card.Text>
              Hello! My name is Jailanie Kaganovsky. I'm a recent Full Stack Web Developer certificate graduate with a B.S. degree in Medical Technology. I have worked in healthcare for over 18 years, and have always provided feedback on how a web application can be improved. I have often wondered if and how I may be able to do the improvements myself as I have always had been interested in coding, which is why I decided to become a Web Developer. I am known among staff for going above and beyond with great attention to detail while continuously and successfully meeting deadlines. Graduate of the University of Washington’s Coding Bootcamp, I am very passionate about creating intuitive user experiences with a focus on mobile first design and development.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Skillsets</Card.Title>
            <Card.Text>
              <img src="https://img.icons8.com/ios-filled/50/000000/javascript-logo.png" alt="JavaScript Logo"/>
              JavaScript
              <img src="https://img.icons8.com/ios-filled/50/000000/html-5--v1.png" alt="HTML Logo"/>
              HTML
              <img src="https://img.icons8.com/ios-glyphs/60/000000/css3.png" alt="CSS Logo"/>
              CSS
            </Card.Text>
            <Card.Text>
              <img className="p-2" src="https://img.icons8.com/windows/64/000000/nodejs.png" alt="Node.js Logo"/>
              Express
              <img src="https://img.icons8.com/color/30/000000/javascript.png" alt="JS Logo"/>
              <img className="ml-2 p-2" src="https://img.icons8.com/ios-filled/50/000000/english-mustache.png" alt="Express Handlebars Logo"/>
              Express Handlebars
            </Card.Text>
            <Card.Text>
              <img src="https://img.icons8.com/ios-glyphs/50/000000/react.png" alt="React Logo"/>
              React
              <img className="p-2" src="https://img.icons8.com/color/48/000000/mongodb.png" alt="MongoDB Logo"/>
              MongoDB
              <img className="ml-2 p-2" src="https://img.icons8.com/ios/50/000000/mysql-logo.png" alt="MySQL Logo"/>
            </Card.Text>
            <Card.Text>
              <img className="ml-2" src="https://img.icons8.com/color/50/000000/bootstrap.png" alt="Bootstrap Logo"/>
              Bootstrap
              <img className="ml-2 p-2" src="https://img.icons8.com/color/50/000000/material-ui.png" alt="Material-UI Logo"/>
              Material-UI
              <span class="iconify" data-icon="simple-icons:bulma" data-inline="false" data-width="40" data-height="40"></span>
              Bulma.io
            </Card.Text>
          </Card.Body>
          <a href="https://icons8.com/">Logo icons by Icons8</a>
        </Card>
      </CardColumns>
    </>
  )
}

export default About;
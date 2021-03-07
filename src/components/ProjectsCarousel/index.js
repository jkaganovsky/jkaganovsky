/* eslint-disable jsx-a11y/alt-text */
import { Carousel, Table }from "react-bootstrap";

function bootstrapCarousel() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row title" style={{ marginBottom: "20px" }} >
          <div className="col-sm-12 btn btn-warning">
            Projects in Coding
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <Carousel interval={5000} keyboard={false} pauseOnHover={true}>
          <Carousel.Item style={{'height': "300px"}}>
            <img style={{'height': "300px"}} className="d-block w-100" src="/assets/images/fooddadabase.png"/>
            <Carousel.Caption>
              <h3>Food Dad-a-Base</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{'height': "300px"}}>
            <img style={{'height': "300px"}} className="d-block w-100" src="/assets/images/weather-dashboard.png"/>
            <Carousel.Caption>
              <h3>Weather Dashboard</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{'height': "300px"}}>
            <img style={{'height': "300px"}} className="d-block w-100" src="/assets/images/password-generator.jpg"/>
            <Carousel.Caption>
              <h3>Password Generator</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{'height': "300px"}}>
            <img style={{'height': "300px"}} className="d-block w-100" src="/assets/images/eatdaburger.png"/>
            <Carousel.Caption>
              <h3>Eat Da Burger</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{'height': "300px"}}>
            <img style={{'height': "300px"}} className="d-block w-100" src="/assets/images/kitchen-helper.png"/>
            <Carousel.Caption>
              <h3>Kitchen Helper</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{'height': "300px"}}>
            <img style={{'height': "300px"}} className="d-block w-100" src="/assets/images/day-scheduler.png"/>
            <Carousel.Caption>
              <h3>Day Planner</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{'height': "300px"}}>
            <img style={{'height': "300px"}} className="d-block w-100" src="/assets/images/coding-quiz.png"/>
            <Carousel.Caption>
              <h3>Coding Quiz</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{'height': "300px"}}>
            <img style={{'height': "300px"}} className="d-block w-100" src="/assets/images/employee-directory.png"/>
            <Carousel.Caption>
              <h3>Employee Directory</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{'height': "300px"}}>
            <img style={{'height': "300px"}} className="d-block w-100" src="/assets/images/budget-tracker.png"/>
            <Carousel.Caption>
              <h3>Budget Tracker</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </div>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Project Name</th>
            <th>Github Repository</th>
            <th>Deployed Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Food Dad-a-Base</td>
            <td>
              <a href="https://github.com/goantonioUW/food-dadabase">Github Repository</a>
            </td>
            <td>
              <a href="https://food-dad-a-base.herokuapp.com/">Deployed Site</a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Weather Dashboard</td>
            <td>
              <a href="https://github.com/jkaganovsky/Weather-Dashboard">Github Repository</a>
            </td>
            <td>
              <a href="https://jkaganovsky.github.io/Weather-Dashboard/">Deployed Site</a>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Password Generator</td>
            <td>
              <a href="https://github.com/jkaganovsky/Password-Generator">Github Repository</a>
            </td>
            <td>
              <a href="https://jkaganovsky.github.io/Password-Generator/">Deployed Site</a>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Eat Da Burger</td>
            <td>
              <a href="https://github.com/jkaganovsky/Burger">Github Repository</a>
            </td>
            <td>
              <a href="https://eat-or-not-burger.herokuapp.com/">Deployed Site</a>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>Kitchen Helper</td>
            <td>
              <a href="https://github.com/jkaganovsky/Kitchen-Helper">Github Repository</a>
            </td>
            <td>
              <a href="https://jkaganovsky.github.io/Kitchen-Helper/">Deployed Site</a>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>Day Planner</td>
            <td>
              <a href="https://github.com/jkaganovsky/Day-Planner">Github Repository</a>
            </td>
            <td>
              <a href="https://jkaganovsky.github.io/Day-Planner/">Deployed Site</a>
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>Coding Quiz</td>
            <td>
              <a href="https://github.com/jkaganovsky/Code-Quiz">Github Repository</a>
            </td>
            <td>
              <a href="https://jkaganovsky.github.io/Code-Quiz/">Deployed Site</a>
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>Employee Directory</td>
            <td>
              <a href="https://github.com/jkaganovsky/employeedirectory">Github Repository</a>
            </td>
            <td>
              <a href="https://jkaganovsky.github.io/employeedirectory/">Deployed Site</a>
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>Budget Tracker</td>
            <td>
              <a href="https://github.com/jkaganovsky/Budget-Tracker">Github Repository</a>
            </td>
            <td>
              <a href="https://on-off-budget-tracking.herokuapp.com/">Deployed Site</a>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
};

export default bootstrapCarousel;
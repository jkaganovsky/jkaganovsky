/* eslint-disable jsx-a11y/alt-text */
import Carousel from "react-bootstrap/Carousel";

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
              <h3>Day Scheduler</h3>
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


    </div>
  )
};

export default bootstrapCarousel;
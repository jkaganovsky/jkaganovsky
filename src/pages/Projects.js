/* eslint-disable jsx-a11y/anchor-is-valid */
import Nav from "../components/Nav";
import ProjectsCarousel from "../components/ProjectsCarousel";

/* eslint-disable jsx-a11y/alt-text */
function Projects() {
  return(
    <>
      <Nav />
      <ProjectsCarousel />
       {/* <div className="container-fluid">
        <div id="main_area">

            <div className="span12" id="slider">

              <div className="row">
                <div className="span8" id="carousel-bounding-box">
                  <div className="carousel slide" id="myCarousel" data-bs-ride="carousel">

                    <div className="carousel-inner">
                      <div className="carousel-item active" data-slide-number="0">
                        <img src="/assets/images/fooddadabase.png" className="d-block w-200" alt="Food Dad-a-base"/>
                      </div>

                      <div className="carousel-item" data-slide-number="1">
                        <img src="/assets/images/kitchenhelper-screenshot.png" className="d-block w-200" alt="Kitchen Helper"/>
                      </div>

                      <div className="carousel-item" data-slide-number="2">
                        <img src="/assets/images/weatherdashboard-screenshot.png" className="d-block w-200" alt="Weather Dashboard"/>
                      </div>

                      <div className="carousel-item" data-slide-number="3">
                        <img src="/assets/images/dayscheduler-screenshot.png" className="d-block w-200" alt="Day Planner"/>
                      </div>

                      <div className="carousel-item" data-slide-number="4">
                        <img src="/assets/images/codingquiz-screenshot.png" className="d-block w-200" alt="Coding Quiz"/>
                      </div>

                      <div className="carousel-item" data-slide-number="5">
                        <img src="/assets/images/passwordgenerator-screenshot.jpg" className="d-block w-200" alt="Password Generator"/>
                      </div>

                      <div className="carousel-item" data-slide-number="6">
                        <img src="/assets/images/eatdaburger.png" className="d-block w-200" alt="Burger App"/>
                      </div>

                    </div>
                      <a className="carousel-control left" data-slide="prev" href="#myCarousel">‹</a>
                      <a className="carousel-control right" data-slide="next" href="#myCarousel">›</a>
                    </div>
                </div>

                <div className="span4" id="carousel-text"></div>

                <div id="slide-content">
                  <div id="slide-content-0">
                    <h2 className="text-white">Food Dad-a-base</h2>
                    <p className="sub-text">
                      <a className="fs-4" href="https://github.com/goantonioUW/food-dadabase">Github Repository</a>
                    </p>
                    <p className="sub-text">
                      <a className="fs-4" href="https://food-dad-a-base.herokuapp.com/">Deployed Site</a>
                    </p>
                  </div>

                  <div id="slide-content-1">
                    <h2 className="text-white">Kitchen Helper</h2>
                    <p className="sub-text">
                      <a className="fs-4" href="https://github.com/jkaganovsky/Kitchen-Helper">Github Repository</a>
                    </p>
                    <p className="sub-text">
                      <a className="fs-4" href="https://jkaganovsky.github.io/Kitchen-Helper/">Deployed Site</a>
                    </p>
                  </div>

                  <div id="slide-content-2">
                    <h2 className="text-white">Weather Dashboard</h2>
                    <p className="sub-text">
                      <a className="fs-4" href="https://github.com/jkaganovsky/Weather-Dashboard">Github Repository</a>
                    </p>
                    <p className="sub-text">
                      <a className="fs-4" href="https://jkaganovsky.github.io/Weather-Dashboard/">Deployed Site</a>
                    </p>
                  </div>

                  <div id="slide-content-3">
                    <h2 className="text-white">Day Planner</h2>
                    <p className="sub-text">
                      <a className="fs-4" href="https://github.com/jkaganovsky/Day-Planner">Github Repository</a></p>
                    <p className="sub-text">
                      <a className="fs-4" href="https://jkaganovsky.github.io/Day-Planner/">Deployed Site</a>
                    </p>
                  </div>

                  <div id="slide-content-4">
                    <h2 className="text-white">Coding Quiz</h2>
                    <p className="sub-text">
                      <a className="fs-4" href="https://github.com/jkaganovsky/Code-Quiz">Github Repository</a>
                    </p>
                    <p className="sub-text">
                      <a className="fs-4" href="https://jkaganovsky.github.io/Code-Quiz/">Deployed Site</a>
                    </p>
                  </div>

                  <div id="slide-content-5">
                    <h2 className="text-white">Password Generator</h2>
                    <p className="sub-text">
                      <a className="fs-4" href="https://github.com/jkaganovsky/Password-Generator">Github Repository</a>
                    </p>
                    <p className="sub-text">
                      <a className="fs-4" href="https://jkaganovsky.github.io/Password-Generator/">Deployed Site</a>
                    </p>
                  </div>

                  <div id="slide-content-6">
                    <h2 className="text-white">Eat da Burger</h2>
                    <p className="sub-text">
                      <a className="fs-4" href="https://github.com/jkaganovsky/Burger">Github Repository</a>
                    </p>
                    <p className="sub-text">
                      <a className="fs-4" href="https://eat-or-not-burger.herokuapp.com/">Deployed Site</a>
                    </p>
                  </div>
                </div>
            </div>
          </div>

          <div className="row hidden-phone" id="slider-thumbs">
            <div className="span14">

              <ul className="thumbnails d-flex justify-content-evenly">
                <li className="span2">
                  <a className="thumbnail" id="carousel-selector-0"><img className="img-thumbnail" src="/assets/images/fooddadabase.png"/></a>
                </li>

                <li className="span2">
                  <a className="thumbnail" id="carousel-selector-1"><img className="img-thumbnail" src="/assets/images/kitchenhelper-screenshot.png"/></a>
                </li>

                <li className="span2">
                  <a className="thumbnail" id="carousel-selector-2"><img className="img-thumbnail" src="/assets/images/weatherdashboard-screenshot.png"/></a>
                </li>

                <li className="span2">
                  <a className="thumbnail" id="carousel-selector-3"><img className="img-thumbnail" src="/assets/images/dayscheduler-screenshot.png"/></a>
                </li>

                <li className="span2">
                  <a className="thumbnail" id="carousel-selector-4"><img className="img-thumbnail" src="/assets/images/codingquiz-screenshot.png"/></a>
                </li>

                <li className="span2">
                  <a className="thumbnail" id="carousel-selector-5"><img className="img-thumbnail" src="/assets/images/passwordgenerator-screenshot.jpg"/></a>
                </li>

                <li className="span2">
                  <a className="thumbnail" id="carousel-selector-6"><img className="img-thumbnail" src="/assets/images/eatdaburger.png"/></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default Projects;
import React from "react";
import "../../pages/style.css";
import { Container, Row, Col } from "react-bootstrap";
import htmlIcon from "../../Assets/skills/html.svg";
import cIcon from "../../Assets/skills/c.svg";
import cssIcon from "../../Assets/skills/css.svg";
import firebaseIcon from "../../Assets/skills/firebase.svg";
import gitIcon from "../../Assets/skills/git.svg";
import javascriptIcon from "../../Assets/skills/javascript.svg";
import nodeIcon from "../../Assets/skills/node-js.svg";
import reactIcon from "../../Assets/skills/react.svg";
import { Player } from "@lottiefiles/react-lottie-player";
import about from "../../Assets/animations/about.json";

function Aboutpage() {
  return (
    <div className="aboutpagebackground">
      <Container>
        <Row className="textbackground">
          <Col md={7}>
            <h3 className="aboutmetext">
              About <span>Me</span>
            </h3>
            <p className="aboutdetails">
              I am a Full Stack Developer with hands-on experience in developing
              web applications using React.js, Node.js, and Firebase. I have
              worked on various projects that involved creating RESTful APIs,
              implementing authentication middleware, and integrating APIs for
              email, spreadsheet, and Firebase. I have also worked on developing
              admin portals for managing and editing data. With strong technical
              skills in JavaScript, HTML, CSS, AWS, Git, and Linux, I am always
              eager to learn new technologies and implement them in my projects
            </p>
            <ul className="skilllist">
              <Row>
                <h3>Skills</h3>
                <Col md={7}>
                  <li>
                    <img
                      src={htmlIcon}
                      width="20rem"
                      height="20rem"
                      style={{ marginRight: "0.4rem" }}
                      alt="html"
                    />
                    HTML
                  </li>
                  <li>
                    <img
                      src={javascriptIcon}
                      width="20rem"
                      height="20rem"
                      style={{ marginRight: "0.4rem" }}
                      alt="js"
                    />
                    JavaScript
                  </li>
                  <li>
                    <img
                      src={reactIcon}
                      width="20rem"
                      height="20rem"
                      style={{ marginRight: "0.4rem" }}
                      alt="react"
                    />
                    React Js
                  </li>
                  <li>
                    <img
                      src={nodeIcon}
                      width="20rem"
                      height="20rem"
                      style={{ marginRight: "0.4rem" }}
                      alt="node"
                    />
                    Node Js
                  </li>
                </Col>
                <Col md={5}>
                  <li>
                    <img
                      src={cIcon}
                      width="20rem"
                      height="20rem"
                      style={{ marginRight: "0.4rem" }}
                      alt="cpp"
                    />
                    C++
                  </li>
                  <li>
                    <img
                      src={cssIcon}
                      width="20rem"
                      height="20rem"
                      style={{ marginRight: "0.4rem" }}
                      alt="css"
                    />
                    CSS
                  </li>
                  <li>
                    <img
                      src={gitIcon}
                      width="20rem"
                      height="20rem"
                      style={{ marginRight: "0.4rem" }}
                      alt="git"
                    />
                    Git
                  </li>
                  <li>
                    <img
                      src={firebaseIcon}
                      width="20rem"
                      height="20rem"
                      style={{ marginRight: "0.4rem" }}
                      alt="fb"
                    />
                    Firebase
                  </li>
                </Col>
              </Row>
            </ul>
          </Col>
          <Col md={5}>
            <div>
              <Player
                src={about}
                background="transparent"
                speed="1"
                style={{ width: "400px", height: "400px" }}
                loop
                controls
                autoplay
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Aboutpage;

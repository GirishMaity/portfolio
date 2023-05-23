import React from "react";
import "../../pages/style.css";
import { Container, Row, Col } from "react-bootstrap";
import Text from "../Homepage/Text";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Player } from "@lottiefiles/react-lottie-player";

function Home() {
  return (
    <div className="homepagebackground">
      <Container>
        <Row>
          <Col md={7}>
            <h2 className="headtext">
              Hello <span className="wave">👋 </span>
            </h2>
            <h2 className="nametext">I'm Girish Maity</h2>
            <span></span>
            <Text />
            <button
              onClick={() => {
                window.open("https://github.com/GirishMaity");
              }}
              className="socailmediabtn"
            >
              <AiFillGithub className="icon" />
            </button>
            <button
              onClick={() => {
                window.open("https://www.linkedin.com/in/girishmaity/");
              }}
              className="socailmediabtn"
            >
              <FaLinkedinIn className="icon" />
            </button>
          </Col>

          <Col md={5}>
            <div>
              <Player
                src="https://assets8.lottiefiles.com/packages/lf20_v9riyrep.json"
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

export default Home;

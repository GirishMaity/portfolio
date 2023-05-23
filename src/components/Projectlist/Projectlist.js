import React from "react";
import "../../pages/style.css";
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from "react-bootstrap";
import chat from "../../Assets/projects/chat1.jpg";
import face from "../../Assets/projects/face1.jpg";
import keyword from "../../Assets/projects/keyword2.jpg";
import network from "../../Assets/projects/network1.jpg";
import password from "../../Assets/projects/password1.jpg";
import sort from "../../Assets/projects/sort1.jpg";

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={face}
                isBlog={false}
                title="Face Insight AI"
                description="
AI Face Insight is a React app that utilizes Azure Face API to analyze human faces. It accurately detects attributes like head position, accessories, and glasses, providing a comprehensive summary. Accessible on Firebase for convenient usage."
                ghLink="https://github.com/0xankityadav/ai-face-app"
                demoLink="https://faceinsightai.live/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={chat}
                isBlog={false}
                title="MERN Chat Application"
                description="
This MERN-based web chat app utilizes socket.io for real-time communication. It includes RESTful APIs for efficient data exchange, ensuring a seamless and reliable chatting experience."
                ghLink="https://github.com/GirishMaity/Secure-chat-application"
                demoLink="https://www.chat-up.me/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={password}
                isBlog={false}
                title="Password Manager"
                description="
This MERN-based password manager ensures highly secure password management. It utilizes industry-standard encryption to protect user data and integrates the HaveIBeenPwned API for password breach checks, enhancing overall security."
                ghLink="https://github.com/GirishMaity/Password_Manager"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={sort}
                isBlog={false}
                title="Selection Sort Simulator"
                description="A selection sort simulator in HTML, CSS, and JS visualizes the sorting process step-by-step. Users can control speed, pause, and reset the simulation. Ideal for visual learning of sorting algorithms."
                ghLink="https://github.com/GirishMaity/Selection-Sort-Visualizer"
                demoLink="https://girishmaity.github.io/Selection-Sort-Visualizer/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={keyword}
                isBlog={false}
                title="Keyword Extractor"
                description="Keyword Extractor is a user-friendly React app that extracts relevant keywords from text using the OpenAPI API. Ideal for content optimization, research, and analysis, it simplifies the identification of valuable insights in textual data."
                ghLink="https://github.com/GirishMaity/ai-keyword-extractor"
                demoLink="https://keyword-extractor-6cc7c.web.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={network}
                isBlog={false}
                title="Secure Instituitional Network"
                description="
We built a secure network for an institution using Cisco Packet Tracer. With VLAN segmentation, ACLs, and encryption, we ensured data security."
                ghLink="https://github.com/GirishMaity/CISCO-internship-project"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
export default Projectlist;

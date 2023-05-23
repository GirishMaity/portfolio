import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../../pages/style.css";
import link from "../../Assets/projects/link.png";
import github from "../../Assets/projects/github.png";

function ProjectCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between",
            // alignItems: "center",
          }}
        >
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Button
              className="viewbtn"
              variant="primary"
              href={props.ghLink}
              target="_blank"
            >
              <img
                src={github}
                style={{ marginRight: "0.5rem" }}
                alt="image1"
              />
              Code
            </Button>
            <Button
              className="viewbtn"
              variant="primary"
              href={props.demoLink}
              target="_blank"
            >
              <img src={link} style={{ marginRight: "0.5rem" }} alt="image2" />
              Live
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCard;

import React, { useState } from "react";

import Project from "./Components/Project";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Projects = props => {
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    index < 2 ? setIndex(index + 1) : setIndex(0);
  };

  return (
    <Container className="projects">
      <Project index={index} key={index} clickHandler={handleClick} />
      <Row onClick={handleClick}>
        <Col>
          <div className="project-toggle d-none d-sm-flex">
            <p className="next-project">Next</p>
            <div className="line"></div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;

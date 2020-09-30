import React from "react";

import { connect } from "react-redux";
import ReactVisibilitySensor from "react-visibility-sensor";
// import { useMediaQuery } from "react-responsive";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import Logo from "../../Assets/Logo/Logo Dark.svg";

const About = ({ dispatch, footerVisible }) => {
  // const lg = useMediaQuery({ query: "(min-width: 992px)" });

  const handleChange = e => {
    dispatch({
      type: "TOGGLE_FOOTER_VISIBILITY",
      payload: e
    });
  };

  const skills = [
    ["HTML", "CSS", "JS", "React", "Native", "Redux", "Firebase"].map(i => {
      return (
        <div className="skill" key={i}>
          {i}
        </div>
      );
    }),
    ["Sketch", "Git", "Figma", "Invision", "After Effects"].map(i => {
      return (
        <div className="skill" key={i}>
          {i}
        </div>
      );
    })
  ];

  return (
    <Container className="about">
      <Row>
        <Col sm={10} lg={8} xl={6} className="intro-col">
          <div className="intro">
            <ReactVisibilitySensor onChange={handleChange}>
              <Image src={Logo} />
            </ReactVisibilitySensor>
            <h3>
              I’m a Front-End Developer and Designer from{" "}
              <span className="taxi">NYC</span> with a great love for minimal
              design.
            </h3>
            <div className="underline" />
            <div className="skills">
              <div className="skills-inner-wrapper first">{skills[0]}</div>
              <div className="skills-inner-wrapper second">{skills[0]}</div>
            </div>
            <div className="skills">
              <div className="skills-inner-wrapper first one">{skills[1]}</div>
              <div className="skills-inner-wrapper second two">{skills[1]}</div>
            </div>
          </div>
        </Col>
        <Col md={10} lg={8} className="footer-col">
          <div className="footer-links">
            <a href="https://dribbble.com/KelvinDelosangeles" target="blank">
              Dribbble
            </a>
            <a href="https://github.com/kelvindelosangeles" target="blank">
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/kelvin-de-los-angeles-a7049260/"
              target="blank"
            >
              Linkedin
            </a>
            <a href="mailto:kelvin623@me.com" target="blank">
              Contact
            </a>
            <a href="/" target="blank">
              CV
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default connect(state => {
  return {
    footerVisible: state.GlobalState.footerVisible
  };
})(About);

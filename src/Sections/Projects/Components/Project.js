import React from "react";

import { connect } from "react-redux";
import { useSpring, animated, useTrail, config } from "react-spring";

import ReactVisibilitySensor from "react-visibility-sensor";

import ProjectDetails from "./ProjectDetails";
import ProjectImage from "./ProjectImage";

import HangarLogo from "../../../Assets/Project-Logos/Hangar Logo.svg";
import HangarDemo from "../../../Assets/Project-Images/Project Image.jpg";
import BfLogo from "../../../Assets/Project-Logos/BF.svg";
import BfDemo from "../../../Assets/Project-Images/Bf.jpg";
import BevappLogo from "../../../Assets/Project-Logos/Bevapp Logo.svg";
import BevappDemo from "../../../Assets/Project-Images/Bevapp.jpg";

import Javascript from "../../../Assets/Icons/dev-icons/Javascript.svg";
import react from "../../../Assets/Icons/dev-icons/React.svg";
import php from "../../../Assets/Icons/dev-icons/PHP.svg";
import html from "../../../Assets/Icons/dev-icons/HTML.svg";
import css from "../../../Assets/Icons/dev-icons/CSS.svg";

import Col from "react-bootstrap/Col";

const Project = ({ index, dispatch, visible, clickHandler }) => {
  const projects = [
    {
      name: "Hangar Tarim",
      url: "www.hangartarim.com",
      type: "Website",
      logo: HangarLogo,
      demo: HangarDemo,
      description:
        "A cold food storage depo based out of Manisa Turkey specializing in fruit preservation",
      roles: ["UX/UI Design", "Front-End Development", "Back-End Development"],
      technology: [html, css, Javascript, react, php]
    },
    {
      name: "Barely Finished",
      url: "http://barelyfinished.com/",
      type: "Web Application",
      logo: BfLogo,
      demo: BfDemo,
      description:
        "A fashion beauty and lifestyle blog focusing on the daily Struggle of living in NYC and the day to day commute",
      roles: ["UX/UI Design", "Project Management", "Front-End Development"],
      technology: [html, css, Javascript, react, php]
    },
    {
      name: "Bevapp",
      url: null,
      type: "Mobile Web Application",
      logo: BevappLogo,
      demo: BevappDemo,
      description:
        "The second largest beverage distribution center on the East Coast.  A Way for customers to place orders on their own.",
      roles: [
        "Branding",
        "UX/UI Design",
        "Project Management",
        "Front-End Development",
        "Back-End Development"
      ],
      technology: [html, css, Javascript, react]
    }
  ];

  const mappedRoles = projects[index].roles.map(i => {
    return <p key={i}>{i}</p>;
  });

  const trail = useTrail(5, {
    from: { transform: "translateY(-10px)", opacity: 0 },
    to: { transform: "translateY(0)", opacity: 1 },
    config: config.molasses
  });

  const slide = useSpring({
    from: {
      opacity: 0,
      transform: "translateX(-30px)"
    },
    to: {
      opacity: 1,
      transform: "translateX(0)"
    },
    config: config.molasses
  });

  const fade = useSpring({
    opacity: visible ? 1 : 0,
    config: config.molasses
  });

  const handleChange = e => {
    dispatch({
      type: "TOGGLE_PROJECT_VISIBILITY",
      payload: e
    });
  };

  return (
    <ReactVisibilitySensor
      partialVisibility
      minTopValue={250}
      onChange={handleChange}
    >
      <animated.div className="row" style={fade}>
        <Col md={5} className="project-col">
          <ProjectDetails
            logo={projects[index].logo}
            projectType={projects[index].type}
            projectDescription={projects[index].description}
            roles={mappedRoles}
            animated={animated}
            trail={trail}
            technology={projects[index].technology}
            url={projects[index].url}
          />
        </Col>
        <Col className="d-xs-block d-sm-none" onClick={clickHandler}>
          <div className="project-toggle above">
            <p className="next-project">Next</p>
            <div className="line"></div>
          </div>
        </Col>
        <Col md={{ span: 6, offset: 1 }}>
          <ProjectImage
            img={projects[index].demo}
            animated={animated}
            slide={slide}
          />
        </Col>
      </animated.div>
    </ReactVisibilitySensor>
  );
};

export default connect(state => {
  return {
    visible: state.GlobalState.projectsVisible
  };
})(Project);

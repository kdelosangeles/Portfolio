import React from "react";

import { connect } from "react-redux";
import { useSpring, animated, config } from "react-spring";
import { useMediaQuery } from "react-responsive";

import ConnectBar from "./Components/ConnectBar";
import Logo from "../../Assets/Logo/Logo Dark.svg";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Navbar = ({ footerVisible, projectsVisible }) => {
  const fade = useSpring({
    from: {
      opacity: 0,
      transform: "translateY(-50px)"
    },
    to: { opacity: 1, transform: "translateY(0)" },
    config: config.molasses
  });

  const xs = useMediaQuery({ query: "(max-width: 575px)" });
  const sm = useMediaQuery({ query: "(min-width: 576px)" });
  const md = useMediaQuery({ query: "(min-width: 768px)" });
  const lg = useMediaQuery({ query: "(min-width: 576px)" });
  const xl = useMediaQuery({ query: "(min-width: 576px)" });

  // conditions to show the navbar
  const show = () => {
    if (md && projectsVisible) {
      return true;
    } else if (xs && projectsVisible) {
      return false;
    } else if (xs && footerVisible) {
      return false;
    } else if (sm && projectsVisible) {
      return false;
    } else if (sm && footerVisible) {
      return false;
    } else if (md && footerVisible) {
      return false;
    } else {
      return true;
    }
  };

  const fadeOut = useSpring({
    opacity: show() ? 1 : 0
  });

  return (
    <animated.div className="navigation container" style={fadeOut}>
      <Row>
        <Col>
          <div className="navigation-bar">
            <animated.img src={Logo} alt="logo" style={fade} />
            <ConnectBar />
          </div>
        </Col>
      </Row>
    </animated.div>
  );
};

export default connect(state => {
  return {
    footerVisible: state.GlobalState.footerVisible,
    projectsVisible: state.GlobalState.projectsVisible
  };
})(Navbar);

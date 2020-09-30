import React, { useRef } from "react";

import { connect } from "react-redux";
import { useSpring, animated, useTrail, config, useChain } from "react-spring";
import axios from "axios";

import design from "../../Assets/Icons/design.svg";
import developer from "../../Assets/Icons/developer.svg";
import Scroll from "../../Assets/Icons/Scroll Icon.svg";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const Welcome = ({ projectsVisible, footerVisible }) => {
  const fade = useSpring({
    opacity: projectsVisible || footerVisible ? 0 : 1
  });

  const springRef = useRef();
  const trailRef = useRef();

  const headerSpring = useSpring({
    from: {
      opacity: 0,
      transform: "translateY(40px)"
    },
    to: {
      opacity: 1,
      transform: "translateY(0px)"
    },
    config: config.molasses,
    ref: springRef
  });

  const subheaderTrail = useTrail(2, {
    from: {
      opacity: 0
      // transform: "translateX(-40px)"
    },
    to: {
      opacity: 1
      // transform: "translateX(0px)"
    },
    config: config.molasses,
    ref: trailRef
  });

  useChain([springRef, trailRef], [0, 2]);

  return (
    <animated.div className="welcome container" style={fade}>
      <Row>
        <Col xs={12}>
          <animated.h3 style={headerSpring}>Hi, i'm</animated.h3>
          <animated.h3 style={headerSpring}>Kelvin De Los Angeles</animated.h3>

          {subheaderTrail.map((i, index) => {
            return (
              <animated.div style={i} key={index}>
                {
                  [
                    <p>
                      UX/UI Designer <Image src={design} />
                    </p>,
                    <p>
                      Front-End Web Developer <Image src={developer} />
                    </p>
                  ][index]
                }
              </animated.div>
            );
          })}
        </Col>
        <Col>
          <div className="scroll-indicator">
            <img src={Scroll} alt="scroll indicator" />
          </div>
        </Col>
      </Row>
    </animated.div>
  );
};

export default connect(state => {
  return {
    projectsVisible: state.GlobalState.projectsVisible,
    footerVisible: state.GlobalState.footerVisible
  };
})(Welcome);

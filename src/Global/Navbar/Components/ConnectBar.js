import React from "react";

import { useTrail, animated, config } from "react-spring";

import Linkedin from "../../../Assets/Icons/linkedin.svg";
import Dribbble from "../../../Assets/Icons/dribble.svg";
import Github from "../../../Assets/Icons/github.svg";
import Email from "../../../Assets/Icons/Mail.svg";

const ConnectBar = () => {
  const trail = useTrail(4, {
    from: {
      opacity: 0,
      transform: "translateY(-10px)"
    },
    to: { opacity: 1, transform: "translateY(0)" },
    config: config.molasses
  });

  const urls = [
    "https://dribbble.com/KelvinDelosangeles",
    "https://github.com/kelvindelosangeles",
    "https://www.linkedin.com/in/kelvin-de-los-angeles-a7049260/",
    "mailto:kelvin623@me.com"
  ];

  return (
    <div className="connect-bar">
      {trail.map((i, index) => {
        return (
          <animated.a href={urls[index]} style={i} key={index} target="blank">
            {
              [
                <img alt="dribbble" src={Dribbble} />,
                <img alt="github" src={Github} />,
                <img alt="linkedin" src={Linkedin} />,
                <img alt="email" src={Email} />
              ][index]
            }
          </animated.a>
        );
      })}
    </div>
  );
};

export default ConnectBar;

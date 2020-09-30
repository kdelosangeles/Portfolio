import React from "react";

const ProjectImage = ({ img, animated, slide }) => {
  return (
    <animated.div style={slide}>
      {/* <div className="project-overlay">
        <h1>text goes here</h1>
      </div> */}
      <img className="project-image" src={img} alt="" />
    </animated.div>
  );
};

export default ProjectImage;

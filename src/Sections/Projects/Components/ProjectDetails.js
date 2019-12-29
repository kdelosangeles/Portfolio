import React from "react";
import Image from "react-bootstrap/Image";

const ProjectDetails = ({
  logo,
  url,
  projectType,
  projectDescription,
  roles,
  animated,
  trail,
  technology
}) => {
  const Mappedtech = technology.map(i => {
    return <img src={i} alt="dev-language" />;
  });

  return trail.map((i, index) => {
    return (
      <animated.div className="project-details" style={i} key={index}>
        {
          [
            <div className="brand">
              <Image src={logo} />
              <div className="underline" />
            </div>,

            <div className="area">
              <h3>{projectType}</h3>
              <p>{projectDescription}</p>
            </div>,

            <div className="area">
              <h3>Role</h3>
              {roles}
            </div>,

            <div className="technologies">
              <h3>Technology</h3>
              <div className="tech-wrapper">{Mappedtech}</div>
            </div>,
            <a className="demo" href={url} target="blank">
              <h3>Demo</h3>
              {console.log(url)}
            </a>
          ][index]
        }
      </animated.div>
    );
  });
};

export default ProjectDetails;

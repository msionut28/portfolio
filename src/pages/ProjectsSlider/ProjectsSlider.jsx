import React, { useRef, useState } from "react";
import "./style.css";
import { projects } from "../../data/content";
import Project from "../../components/Project/Project";
import { ArrowRight } from "react-feather";
import { ArrowLeft } from "react-feather";

function ProjectsSlider() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [leftButton, setLeftButton] = useState(false);
  const [rightButton, setRightButton] = useState(true);

  const containerRef = useRef();

  const handleScroll = (scrollAmount) => {
    setScrollPosition((prevScrollPosition) => {
      const newScrollPosition = prevScrollPosition + scrollAmount;

      containerRef.current.scrollLeft = newScrollPosition;

      setLeftButton(newScrollPosition > 0);
      setRightButton(newScrollPosition < 1680);
      return newScrollPosition;
    });
  };

  return (
    <div className="container">
      <div
        ref={containerRef}
        style={{
          width: "100vw",
          overflowX: "scroll",
          scrollBehavior: "smooth",
        }}
      >
        <div className="content-box">
          <div className="item">
            <Project
              title={projects.bs.title}
              shortDesc={projects.bs.shortDesc}
              image={projects.bs.image}
            />
          </div>
          <div className="item">
            <Project
              title={projects.pc.title}
              shortDesc={projects.pc.shortDesc}
              image={projects.pc.image}
            />
          </div>
          <div className="item">
            <Project
              title={projects.sh.title}
              shortDesc={projects.sh.shortDesc}
              image={projects.sh.image}
            />
          </div>
          <div className="item">
            <Project
              title={projects.sp.title}
              shortDesc={projects.sp.shortDesc}
              image={projects.sp.image}
            />
          </div>
        </div>
      </div>

      <div className="action-btns">
        {leftButton && (
          <button onClick={() => handleScroll(-560)}>
            <ArrowLeft />
          </button>
        )}
        {rightButton && (
          <button onClick={() => handleScroll(560)}>
            <ArrowRight />
          </button>
        )}
      </div>
    </div>
  );
}

export default ProjectsSlider;

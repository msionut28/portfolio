import React, { useRef, useState } from "react";
import "./style.css";
import { projects } from "../../data/content";
import Project from "../../components/Project/Project";
import { ArrowRight } from "react-feather";
import { ArrowLeft } from "react-feather";

function Test() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [leftButton, setLeftButton] = useState(false);
  const [rightButton, setRightButton] = useState(true);

  const containerRef = useRef();

  // Function to handle scrolling when the button is clicked
  const handleScroll = (scrollAmount) => {
    setScrollPosition((prevScrollPosition) => {
      const newScrollPosition = prevScrollPosition + scrollAmount;

      containerRef.current.scrollLeft = newScrollPosition;

      // Update the state of leftButton based on scroll position
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
      {/* <iframe src="https://pantrychef-ga.netlify.app/" title="my first project"
      width={800}
      height={600}></iframe> */}
    </div>
  );
}

export default Test;

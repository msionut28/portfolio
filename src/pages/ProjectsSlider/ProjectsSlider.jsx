import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "react-feather";
import { ArrowLeft } from "react-feather";
import { projects } from "../../data/content";
import Project from "../../components/Project/Project";
import "./style.css";

const ProjectsSlider = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [leftButton, setLeftButton] = useState(false);
  const [rightButton, setRightButton] = useState(true);

  const containerRef = useRef();

  const handleScroll = (scrollAmount) => {
    const newScrollPosition = scrollPosition + scrollAmount;

    containerRef.current.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    });

    setScrollPosition(newScrollPosition);
    setLeftButton(newScrollPosition > 0);
    setRightButton(newScrollPosition < calculateMaxScroll());
  };

  const calculateMaxScroll = () => {
    const totalProjects = Object.keys(projects).length;
    const viewportWidth = window.innerWidth;
    const projectWidthPercentage = 30;

    const projectWidth = (viewportWidth * projectWidthPercentage) / 100;

    return (totalProjects - 1) * projectWidth;
  };

  const calculateOneScroll = () => {
    const totalProjects = Object.keys(projects).length;
    const viewportWidth = window.innerWidth;
    const gapPercentage = viewportWidth * 0.23;

    const projectWidth = viewportWidth / totalProjects + gapPercentage;

    return projectWidth;
  };

  return (
    <div className="container">
      <h1 className="montserrat">Projects</h1>
      <div
        ref={containerRef}
        style={{
          width: "100vw",
          overflowX: "scroll",
          scrollBehavior: "smooth",
        }}
      >
        <motion.div
          className="content-box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {Object.keys(projects).map((key) => {
            const project = projects[key];
            return (
              <div className="item" key={key}>
                <Project
                  title={project.title}
                  shortDesc={project.shortDesc}
                  image={project.image}
                  web={project.live}
                  git={project.git}
                />
              </div>
            );
          })}
        </motion.div>
      </div>

      <div className="action-btns">
        {leftButton && (
          <button onClick={() => handleScroll(-calculateOneScroll())}>
            <ArrowLeft />
          </button>
        )}
        {rightButton && (
          <button onClick={() => handleScroll(calculateOneScroll())}>
            <ArrowRight />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectsSlider;
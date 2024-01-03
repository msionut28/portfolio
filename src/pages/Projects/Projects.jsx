import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Project from "../../components/Project/Project";
import { projects } from "../../data/content";
import "./style.css";

const Projects = () => {
  const [scrollPos, setScrollPos] = useState()

  return (
    <div className="test">
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1, y: -200, x: 0 }}
        transition={{ duration: 0.75 }}
      >
        <Project
          title={projects.bs.title}
          shortDesc={projects.bs.shortDesc}
          image={projects.bs.image}
        />
      </motion.div>
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1, y: -200, x: 50 }}
        transition={{ duration: 0.75, delay: 0.25 }}
      >
        <Project
          title={projects.pc.title}
          shortDesc={projects.pc.shortDesc}
          image={projects.pc.image}
        />
      </motion.div>
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1, y: -200, x: 100 }}
        transition={{ duration: 0.75, delay: 0.5 }}
      >
        <Project
          title={projects.sh.title}
          shortDesc={projects.sh.shortDesc}
          image={projects.sh.image}
        />
      </motion.div>
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1, y: -200, x: 150 }}
        transition={{ duration: 0.75, delay: 0.75 }}
      >
        <Project
          title={projects.sp.title}
          shortDesc={projects.sp.shortDesc}
          image={projects.sp.image}
        />
      </motion.div>
      <div className="scrollBtns">
        <button>LEFT</button>
        <button>RIGHT</button>
      </div>
    </div>
  );
};

export default Projects;

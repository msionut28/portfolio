import "./style.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Project = ({ title, shortDesc, image, git, web }) => {
  return (
    <motion.div className="project"
    whileHover={{ scale: 1.1 }}
    transition={{ type: "spring", stiffness: 150, damping: 12, duration: 0.4 }}>
      <img src={image} alt={title} />
      <div className="overlay">
        <div className="title bebas">{title}</div>
        <p className="description montserrat">{shortDesc}</p>
        <div className="links">
          <a href={git} target="_blank" rel="noopener noreferrer">
            <button className="bebas customBtn">SOURCE CODE</button>
          </a>
          <Link to="/browser">
            <button className="bebas customBtn">HEAD TO MY SAFARI CLONE</button>
          </Link>
          <a href={web} target="_blank" rel="noopener noreferrer">
            <button className="bebas customBtn">LIVE DEMO</button>
          </a> 
        </div>
      </div>
    </motion.div>
  );
};

export default Project;

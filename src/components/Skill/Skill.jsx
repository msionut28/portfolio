import "./style.css";
import { motion } from "framer-motion";

const Skill = (props) => {
  const { name, img } = props
return (
    <motion.div className="skill"
    whileHover={{ scale: 1.3 }}
    transition={{ type: "spring", stiffness: 150, damping: 12, duration: 0.4 }}>
      <div className="skill-img">
        <img src={img} alt="skill" />
      </div>
      <span className="skill-name montserrat">{name}</span>
    </motion.div>
  );
};

export default Skill;

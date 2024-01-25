import { skills, skillsAssessment } from "../../data/content";
import { motion } from "framer-motion";
import Skill from "../../components/Skill/Skill";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import "./style.css";

const Test = () => {
  return (
    <div className="test">
      <h1 className="montserrat title"> Skills & Technologies </h1>
      <motion.div
        className="skills-wrapper"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="skills">
          {Object.values(skills).map((skill, index) => (
            <Skill key={index} name={skill.name} img={skill.img} />
          ))}
        </div>
      </motion.div>
      <div className="skill-assess">
        <motion.div
          className="top-skills"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="montserrat" style={{ cursor: "default" }}>
            TOP 5
          </h1>
          {Object.entries(skillsAssessment.top5).map(
            ([key, { delay, name, percentage }]) => (
              <motion.div
                key={key}
                className="top-skills"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: delay }}
              >
                <ProgressBar percentage={percentage} name={name} />
              </motion.div>
            )
          )}
        </motion.div>
        <motion.div
          className="bottom-skills"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <h1 className="montserrat" style={{ cursor: "default" }}>
            BOTTOM 5
          </h1>
          {Object.entries(skillsAssessment.bottom5).map(
            ([key, { delay, name, percentage }]) => (
              <motion.div
                key={key}
                className="top-skills"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: delay }}
              >
                <ProgressBar percentage={percentage} name={name} />
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Test;

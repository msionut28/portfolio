import { skills, skillsAssessment } from "../../data/content";
import { motion } from "framer-motion";
import Skill from "../../components/Skill/Skill";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import "./style.css";

const Skills = () => {
  return (
    <div className="test">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="montserrat title"> SKILLS </h1>
      </motion.div>
      <motion.div
        className="skills-wrapper"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.25 }}
      >
        <div className="skills">
          {skills.map((skill, index) => {
            const {name, img} = skill
            return(
              <Skill key={index} name={name} img={img} />
            )
            })}
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

export default Skills;

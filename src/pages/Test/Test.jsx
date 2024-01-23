import { skills } from "../../data/content";
import Skill from "../../components/Skill/Skill";
import "./style.css";

const Test = () => {
  return (
    <div className="test">
      <h1 className="montserrat"> Technologies </h1>
      <div className="skills-wrapper">
        <div className="skills">
          {Object.values(skills).map((skill, index) => (
            <Skill key={index} name={skill.name} img={skill.img} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Test;

import "./style.css";

const Skill = (props) => {
  const { name, img } = props
return (
    <div className="skill">
      <div className="skill-img">
        <img src={img} alt="skill" />
      </div>
      <span className="skill-name montserrat">{name}</span>
    </div>
  );
};

export default Skill;

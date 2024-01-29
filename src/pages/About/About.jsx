import "./style.css";
import SocialLinks from "../../components/SocialLinks/SocialLinks";

const About = () => {
  return (
    <div className="about">
      <SocialLinks />
      <div className="introduction">
        {/* <h1 className="montserrat about-me-title custom-text-style">WHO AM I?</h1> */}
        <h1 className="montserrat title custom-text-style">
          Hi there! <span className="animated">👋</span> I'm Stelian-Ionut
          Molocea
        </h1>
        <p className="montserrat about-me-introduction custom-text-style">
          I'm a passionate web developer seeking opportunities to put my skills
          into practice.
        </p>
      </div>
    </div>
  );
};

export default About;

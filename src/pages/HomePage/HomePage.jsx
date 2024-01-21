import Typewriter from "typewriter-effect";
import { aboutMe } from "../../data/content";
import Browser from "../Browser/Browser";
import ProjectsSlider from "../ProjectsSlider/ProjectsSlider"
import "./style.css";

const HomePage = () => {
  return (
    <div id="top">
      <a href="#top"><button>here</button></a>
      <a href="#browser"><button>here</button></a>
      <a href="#projects"><button>here</button></a>
      <div className="one">
        <h5 className="bebas">
          <Typewriter
            options={{
              strings: [
                aboutMe.english.typewriter.first,
                aboutMe.english.typewriter.second,
                aboutMe.english.typewriter.third,
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 10,
              delay: 25,
            }}
          />
        </h5>
      </div>
      <div id="browser">
      <Browser id="browser"/>
      </div>
      <div id="projects">
      <ProjectsSlider id="projects"/>
      </div>

    </div>
  );
};

export default HomePage;

import TopSection from "../TopSection/TopSection";
import Browser from "../Browser/Browser";
import ProjectsSlider from "../ProjectsSlider/ProjectsSlider";
import Test from "../Test/Test";
import "./style.css";

const HomePage = () => {
  return (
    <div id="top">
      <div className="one">
        <TopSection/>
      </div>
      <div id="projects">
        <ProjectsSlider/>
      </div>
      <div id="browser">
        <Browser/>
      </div>
      <div id="test">
        <Test />
      </div>
    </div>
  );
};

export default HomePage;

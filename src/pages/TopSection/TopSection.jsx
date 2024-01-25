import "./style.css";
import Typewriter from "typewriter-effect";
import { aboutMe } from "../../data/content";

const TopSection = () => {
  return (
    <div>
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
  );
};

export default TopSection;

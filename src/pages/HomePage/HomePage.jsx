import Typewriter from "typewriter-effect";
import { aboutMe } from "data/content";
import SocialLinks from "components/SocialLinks/SocialLinks";
import AnimateWhenVisible from "components/AnimateWhenVisible/AnimateWhenVisible";
import Avatar from "components/Avatar/Avatar";
import "./style.css";

const HomePage = () => {
  const isDesktop = window.innerWidth > 991;

  return (
    <div id="homepage">
      {isDesktop && (
          <SocialLinks delay={0.5} />
      )}
      <div className="personal-info">
        <div className="titleAndDesc">
          <AnimateWhenVisible delay={0.5}>
            <h3 className="bebas full-name">Stelian-Ionut Molocea</h3>
            <h5 className="bebas"> Jr. Full-Stack Developer </h5>
          </AnimateWhenVisible>
          <AnimateWhenVisible delay={1}>
            <h6 className="montserrat typewriter">
              <Typewriter
                options={{
                  strings: [
                    aboutMe.english.typewriter.first,
                    aboutMe.english.typewriter.second,
                    aboutMe.english.typewriter.third,
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 20,
                  delay: 50,
                }}
              />
            </h6>
          </AnimateWhenVisible>
        </div>
        <AnimateWhenVisible delay={0.5}>
          <Avatar img={"/pic/profilepic.png"} />
        </AnimateWhenVisible>
      </div>
    </div>
  );
};

export default HomePage;

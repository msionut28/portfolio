import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { aboutMe } from "../../data/content";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import Avatar from "../../components/Avatar/Avatar";
import "./style.css";

const HomePage = () => {
  const isDesktop = window.innerWidth > 991;

  return (
    <div id="homepage">
      {isDesktop && <SocialLinks />}
      <div className="personal-info">
        <div className="titleAndDesc">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 className="bebas full-name">Stelian-Ionut Molocea</h3>
            <h5 className="bebas"> Jr. Full-Stack Developer </h5>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: -50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 1 }}
          >
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
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="avatar-pic"
          >
          <Avatar img={"/pic/profilepic.png"} />
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;

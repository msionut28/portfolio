import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import { aboutMe } from "../../data/content";
import "./style.css";

const HomePage = () => {
  return (
    <div id="homepage">
      <SocialLinks />
      <div className="titleAndDesc">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="bebas">Hi! I'm Stelian-Ionut Molocea</h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: -50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.5 }}
        >
          <h6 className="montserrat">
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
    </div>
  );
};

export default HomePage;

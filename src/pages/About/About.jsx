import "./style.css";
import { motion } from "framer-motion";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import Image from "../../components/Image/Image";

const About = () => {
  return (
    <div className="about">
      <SocialLinks />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="introduction"
      >
        {/* <h1 className="montserrat about-me-title custom-text-style">WHO AM I?</h1> */}
        <h1 className="montserrat title custom-text-style">
          Hi there! <span className="animated">👋</span> I'm Stelian-Ionut
          Molocea
        </h1>
        <h5 className="montserrat about-me-introduction custom-text-style">
          I'm a passionate full stack web developer seeking opportunities to put
          my skills into practice.
        </h5>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.75, delay: 0.75 }}
        className="beginnings"
      >
        <div className="beginnings-text">
          <h3
            className="montserrat custom-text-style"
            style={{ fontWeight: "bold" }}
          >
            How it all started?
          </h3>
          <p className="montserrat passion custom-text-style">
            <br />
            I have always found myself intrigued by coding and how computers
            work, but mainly fascinated about Web, how things rendered and were
            displayed to us.
            <br /> <br />
            My very first contact with coding was quite a few years ago, when I
            decided to dive in head first in this subject, mainly relying on
            web-packs and internet tutorials to build the things that I wanted.
            Back then, I used to build blogs and forums using <b>WordPress</b>,
            as well as <b>phpBB</b> and Invision Community(<b>IPS</b>).
            <br /> <br />
            Fast-forward a few years, in April 2023 I decided to start
            self-teaching myself web-development, as the passion for coding and
            web development never faded away. I decided to follow courses on
            <span style={{ fontWeight: "bold", marginLeft: "0.3vw" }}>
              Codecademy
            </span>
            , slowly moving towards <b>Udemy</b> courses.
          </p>
        </div>
        <div className="beginnings-media">
            <Image
              img={"/about/first-line-of-code.png"}
              text={"Hover to see my very first .html page"}
            />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="further-education"
      >
        <h3
          className="montserrat custom-text-style float-right"
          style={{ fontWeight: "bold", marginLeft: "55vw" }}
        >
          How it developed?
        </h3>
      </motion.div>
    </div>
  );
};

export default About;

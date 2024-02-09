import "./style.css";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import AnimateWhenVisible from "components/AnimateWhenVisible/AnimateWhenVisible";
import SocialLinks from "components/SocialLinks/SocialLinks";
import Image from "components/Image/Image";

const About = () => {
  const isDesktop = window.innerWidth > 991;
  return (
    <div className="about">
      {isDesktop && <SocialLinks />}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="introduction"
      >
        <h1 className="montserrat title custom-text-style">
          Hi there! <span className="animated">👋</span> I'm Stelian-Ionut
          Molocea
        </h1>
        <h5 className="montserrat about-me-introduction custom-text-style">
          I am a passionate full-stack web developer seeking opportunities to
          apply my skills.
        </h5>
      </motion.div>
      <AnimateWhenVisible delay={1}>
        <div className="timeline">
          <VerticalTimeline className="custom-text-style">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(36, 39, 30)", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(50, 55, 45)" }}
              date="January 2024 - present"
              iconStyle={{ background: "rgb(50, 55, 45)", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title bebas">
                Freelance
              </h3>
              <h4 className="vertical-timeline-element-subtitle montserrat">
                Iasi, Romania & London, UK
              </h4>
              <p className="montserrat">
                Developing web apps, mainly relying on MERN stack/ Next.js +
                MongoDB, while further enchancing my development knowledge by
                learning TypeScript.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(36, 39, 30)", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(50, 55, 45)" }}
              date="September 2023 - December 2023"
              iconStyle={{ background: "rgb(50, 55, 45)", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title bebas">
                Software Engineering Immersive
              </h3>
              <h4 className="vertical-timeline-element-subtitle montserrat">
                General Assembly - London, UK
              </h4>
              <p className="montserrat">
                I completed a 12-week full-stack coding bootcamp, totaling 420
                hours of instruction. During this period, I gained proficiency
                in HTML5, CSS, JavaScript, and Python. We delved into frontend
                frameworks such as React.js, Next.js, and Vue.js, and on the
                backend, we explored Node.js, Express, and Django. These
                technologies were not only discussed theoretically but also
                actively utilized in the unit projects we had to deliver.
                Moreover, I integrated a non-relational database, MongoDB, into
                some of my projects, while others required the use of a
                relational database—PostgreSQL. API consumption was a constant
                requirement throughout all the projects.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(36, 39, 30)", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(50, 55, 45)" }}
              date="June 2023 - July 2023"
              iconStyle={{ background: "rgb(50, 55, 45)", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title bebas">
                JavaScript - The Complete Guide(Beginner + Friendly)
              </h3>
              <h4 className="vertical-timeline-element-subtitle montserrat">
                Udemy
              </h4>
              <p className="montserrat">
                68hrs of lessons, teaching fundamentals of JavaScript, mainly
                focused on DOM Manipulation, Object Oriented Programming, ASYNC
                JavaScript - Async/Await, promises.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(36, 39, 30)", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(50, 55, 45)" }}
              date="March 2023 - May 2023"
              iconStyle={{ background: "rgb(50, 55, 45)", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title bebas">
                Career Path - Full-Stack Engineer
              </h3>
              <h4 className="vertical-timeline-element-subtitle montserrat">
                Codecademy
              </h4>
              <p className="montserrat">
                150hrs of beginner friendly lessons, teaching fundamentals of
                HTML, CSS, JS and DevOps, slowly shifting towards topics such as
                React, Git & GitHub, Express.js, PostgreSQL, REST APIs.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </AnimateWhenVisible>
      <AnimateWhenVisible delay={0.25}>
        <div className="beginnings">
          <div className="beginnings-text">
            <h3
              className="montserrat title custom-text-style"
              style={{ fontWeight: "bold" }}
            >
              How it all started?
            </h3>
            <p className="montserrat passion custom-text-style">
              <br />
              I've always been fascinated by coding, especially the intricate
              workings of computers and the captivating world of the web – how
              things get rendered and displayed to us.
              <br /> <br />
              My first foray into coding happened several years ago. I took the
              plunge headfirst, relying on web-packs and internet tutorials to
              bring my ideas to life. During this time, I built blogs and forums
              using <b>WordPress</b>, along with platforms like <b>phpBB</b> and
              Invision Community (<b>IPS</b>).
              <br /> <br />
              Fast forward to March 2023, and my passion for coding and web
              development remained as strong as ever. I embarked on a
              self-teaching journey with JavaScript. I started with courses on{" "}
              <span style={{ fontWeight: "bold", marginLeft: "0.3vw" }}>
                Codecademy
              </span>{" "}
              and gradually transitioned to <b>Udemy</b> courses. Following
              this, I took a deep dive into the world of software engineering
              with an immersive bootcamp at <b>General Assembly</b>, cementing
              my skills and knowledge in the field.
            </p>
          </div>
          <div className="beginnings-media">
            {isDesktop && (
              <Image
                img={"/about/first-line-of-code.png"}
                text={"Hover to see my very first .html page"}
              />
            )}
          </div>
        </div>
      </AnimateWhenVisible>
      {/* <AnimateWhenVisible delay={0.25}>
        <div className="further-education">
          <div className="ga-media">
          {isDesktop && (
              <Image
                img={"/about/first-line-of-code.png"}
                text={"Hover to see my very first .html page"}
              />
            )}
          </div>
          <div className="ga">
          <h3 className="montserrat title" style={{ fontWeight: "bold" }}>
            How it developed?
          </h3>
            <p className="montserrat passion custom-text-style">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
              mollitia debitis ad iure quidem ipsum nam voluptatibus obcaecati
              nemo aliquam fuga, eaque excepturi. Aut, eligendi. Culpa aliquid
              incidunt doloribus quae.
            </p>
          </div>
        </div>
      </AnimateWhenVisible> */}
    </div>
  );
};

export default About;

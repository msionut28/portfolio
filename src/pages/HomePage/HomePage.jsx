import Typewriter from "typewriter-effect";
import { aboutMe } from "../../data/content";
import "./style.css";


const HomePage = () => {
  return (
    <div className="d-block d-lg-flex align-items-center">
      {/* <Canvas className="h-100 w-100">
            <OrbitControls enableZoom={true} />
            <ambientLight intensity={5} />
            <Model />
          </Canvas> */}
      <div className="order-1 h-100 d-flex justify-content-center">
        <div className="align-self-center">
          <div className="mx-auto">
            <h1 className="bebas fluidz-48 mb-1x">
              {/* <Typewriter
                options={{
                  strings: [
                    aboutMe.typewriter.first,
                    aboutMe.typewriter.second,
                    aboutMe.typewriter.third,
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,
                  delay: 25,
                }}
              /> */}
              HOME PAGE
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

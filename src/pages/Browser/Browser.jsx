import "./style.css";
import { ChevronLeft } from "react-feather";
import { ChevronRight } from "react-feather";

const Browser = () => {
  return (
    <div className="safari">
      <div className="topSection">
        <div className="buttons">
          <button className="close"></button>
          <button className="minimize"></button>
          <button className="maximize"></button>
        </div>
        <div className="symbols">
          <div className="chevrons">
            <ChevronLeft style={{ paddingRight: "5px" }} className="chevron" />
            <ChevronRight style={{ paddingLeft: "5px" }} className="chevron" />
          </div>
        </div>
        <div className="search">
            <input type="text" />
        </div>
      </div>
      <iframe src="https://pantrychef-ga.netlify.app/" title="my first project"
      width={1200}
      height={1000}></iframe>
    </div>
  );
};

export default Browser;

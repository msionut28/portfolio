import "./style.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="link-btns">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="bebas link-btn">HOME</span>
        </Link>
        <Link to="/projects" style={{ textDecoration: "none" }}>
          <span className="bebas link-btn" style={{ textDecoration: "none" }}>
            PROJECTS
          </span>
        </Link>
        <Link to="/browser" style={{ textDecoration: "none" }}>
          <span className="bebas link-btn">BROWSER</span>
        </Link>
        <Link to="/test" style={{ textDecoration: "none" }}>
          <span className="bebas link-btn">SKILLS</span>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;

import "./style.css";
import { Link } from "react-router-dom";
import { routes } from "../../data/routes";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="link-btns">
        {routes.map((route) => {
          const {name, to} = route
          return (
            <Link to={to} style={{textDecoration: "none"}}>
              <span className="bebas link-btn">
                {name}
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  );
};

export default NavBar;

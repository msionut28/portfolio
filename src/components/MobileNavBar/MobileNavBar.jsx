import "./style.css";
import Hamburger from "hamburger-react";
import { useState, useRef } from "react";
import { useClickAway } from "react-use";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { routes } from "data/routes";

const MobileNavBar = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} className="mobile-navbar">
      <Hamburger toggled={isOpen} toggle={setOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="list-wrapper"
          >
            <ul className="navbar-list">
              {routes.map((route, idx) => {
                const { name, to, Icon } = route;
                return (
                  <motion.li
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 160,
                      damping: 25,
                      delay: 0.05 + idx / 10,
                    }}
                    key={name}
                    className="list-item"
                  >
                    <Link to={to} style={{ textDecoration: "none" }}>
                      <span
                        className="bebas mobile-link-btn"
                        onClick={() => setOpen((prev) => !prev)}
                        >
                        <Icon style={{marginRight: "2.5vw"}}/>
                        {name}
                      </span>
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNavBar;

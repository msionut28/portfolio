import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Lock,
  RotateCw,
  Share,
  Plus,
  Layers,
  Globe,
  Wifi,
  Battery,
  Search,
  Monitor,
} from "react-feather";
import { getCurrentDateTime } from "lib/dateGetter";
import { selectedTabSettings } from "data/content";
import SocialLinks from "components/SocialLinks/SocialLinks";
import "./style.css";

const Browser = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const [currentDateTime, setCurrentDateTime] = useState(getCurrentDateTime());

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(getCurrentDateTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <motion.div
      className="browser"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <SocialLinks/>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="montserrat title">SAFARI CLONE</h1>
      </motion.div>
      <motion.div
        className="start-up"
        initial={{ opacity: 1, zIndex: 9999 }}
        animate={{ opacity: 0, zIndex: -1, y: 500 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <span className="start-logo"></span>
      </motion.div>
      <motion.div
        className="safari"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: -window.innerHeight * 1.1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <div className="menu-bar">
          <div className="left">
            <span className="apple-sign"></span>
            <span className="app">Safari</span>
            <span className="option">File</span>
            <span className="option">View</span>
            <span className="option">History</span>
            <span className="option">Bookmarks</span>
          </div>
          <div className="right">
            <span>
              <Wifi size={16} />
            </span>
            <span>
              <Battery size={16} />
            </span>
            <span>
              <Search size={16} />
            </span>
            <span>
              <Monitor size={16} />
            </span>
            <span className="time">{currentDateTime}</span>
          </div>
        </div>
        <div className="top-section">
          <div className="buttons">
            <button className="close"></button>
            <button className="minimize"></button>
            <button className="maximize"></button>
          </div>
          <div className="symbols">
            <div className="chevrons">
              <ChevronLeft
                style={{ paddingRight: "5px" }}
                className="chevron"
              />
              <ChevronRight
                style={{ paddingLeft: "5px" }}
                className="chevron"
              />
            </div>
          </div>
          <div className="search">
            <div className="search-bar">
              <span className="lock-sign">
                <Lock size={12} style={{ marginRight: "0.25vw" }} />
              </span>
              <span className="search-input">
                {selectedTabSettings[selectedTab]?.url || ""}
              </span>
            </div>
            <span className="refresh">
              <RotateCw size={16} />
            </span>
          </div>
          <div className="right-hand-symbols">
            <span className="share">
              <Share size={18} />
            </span>
            <span className="plus">
              <Plus size={18} />
            </span>
            <span className="layers">
              <Layers size={18} />
            </span>
          </div>
        </div>
        <div className="tabs">
          {Object.keys(selectedTabSettings).map((index) => (
            <div
              key={index}
              className={`tab ${selectedTab === index ? "selected" : ""}`}
              onClick={() => handleTabClick(index)}
            >
              <Globe size={14} style={{ marginRight: "0.5vw" }} />
              {selectedTabSettings[index].text}
            </div>
          ))}
        </div>
        <div className="website">
          <iframe
            src={selectedTabSettings[selectedTab]?.url || ""}
            title="my project"
            width="100%"
            height="100%"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Browser;

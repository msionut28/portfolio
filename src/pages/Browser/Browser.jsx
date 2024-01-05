import { useState, useEffect } from "react";
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
import "./style.css";

const Browser = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const [currentDateTime, setCurrentDateTime] = useState(getCurrentDateTime());

  function getCurrentDateTime() {
    const currentDate = new Date();
    const day = currentDate.toLocaleDateString("en-GB", { weekday: "short" });
    const date = currentDate.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
    });
    const time = currentDate.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return `${day} ${date} ${time}`;
  }
  const selectedTabSettings = {
    0: {
      text: "BattleShip Game",
      url: "https://msionut28.github.io/battleships_browserGame/",
    },
    1: {
      text: "PantryChef",
      url: "https://pantrychef-ga.netlify.app",
    },
    2: {
      text: "SafeHaven",
      url: "https://safehaven-ga.netlify.app",
    },
    3: {
      text: "SquadSprint",
      url: "https://squadsprintfe-production.up.railway.app",
    },
  };

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
    <div className="safari">
      <div className="top-bar">
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
            <ChevronLeft style={{ paddingRight: "5px" }} className="chevron" />
            <ChevronRight style={{ paddingLeft: "5px" }} className="chevron" />
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
    </div>
  );
};

export default Browser;

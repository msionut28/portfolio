import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Lock,
  RotateCw,
  Share,
  Plus,
  Layers,
} from "react-feather";
import "./style.css";

const Browser = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const selectedTabSettings = {
    0: {
      text: "BattleShip Game",
      url: "https://msionut28.github.io/battleships_browserGame/",
    },
    1: { text: "PantryChef", url: "https://pantrychef-ga.netlify.app" },
    2: { text: "SafeHaven", url: "https://safehaven-ga.netlify.app" },
    3: {
      text: "SquadSprint",
      url: "https://squadsprintfe-production.up.railway.app",
    },
  };

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };
  return (
    <div className="safari">
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
            {selectedTabSettings[index].text}
          </div>
        ))}
      </div>
      <div className="website">
        <iframe
          src={selectedTabSettings[selectedTab]?.url || ""}
          title="my first project"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default Browser;

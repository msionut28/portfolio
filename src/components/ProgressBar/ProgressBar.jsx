import "./style.css";

const ProgressBar = (props) => {
  const { percentage, name } = props;

  const wrapper = {
    display: "flex",
    marginLeft: "2vw",
    textAlign: "left",
  };

  const progressBar = {
    height: "100%",
    width: `${percentage}%`,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: "inherit",
    textAlign: "right",
  };

  const fullBar = {
    display: "flex",
    alignItems: "center",
    height: 20,
    width: "30vw",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 50,
    marginRight: "2vw",
    marginBottom: "2vh",
    border: "0.5px solid black",
  };

  const progress = {
    padding: 5,
    color: "black",
    fontWeight: "bold",
    cursor: "default",
  };
  return (
    <div style={wrapper}>
      <div style={fullBar}>
        <div style={progressBar}>
          <span style={progress}>{`${percentage}%`}</span>
        </div>
      </div>
      <span
        className="montserrat"
        style={{ fontWeight: "600", cursor: "default" }}
      >
        {name}
      </span>
    </div>
  );
};

export default ProgressBar;

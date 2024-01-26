import "./style.css";

const Avatar = (props) => {
  const { img } = props;
  return (
    <div className="avatar">
      <div className="gradient-overlay"></div>
      <img src={img} alt="profile-pic" />
    </div>
  );
};

export default Avatar;

import "./style.css";

const Image = (props) => {
  const { img, text } = props;
  return (
    <div className="image-div">
      <div className="image-gradient">
        <p className="montserrat" style={{fontWeight: 'bold'}}>{text}</p>
      </div>
      <img src={img} alt="custom pic" />
    </div>
  );
};

export default Image;

import './style.css'

const Project = ({title, shortDesc, description, image, link}) => {
    return(
        <div className="project">
            <img src={image} alt={title} />
            <div className="overlay">
                <div className="title bebas">
                    {title}
                </div>
                <p className="description montserrat">{shortDesc}</p>
            </div>
        </div>
    )
}

export default Project
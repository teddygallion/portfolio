import "../../styles/ProjectCard.css";

const ProjectCard = ({ title, image_link, description, github, live }) => {
  return (
    <div className="project-card">
      <div className="project-image-wrapper">
        <img
          className="project-img"
          src={image_link}
          alt={title}
          onError={() => console.warn("Image failed to load:", image_link)}
        />
      </div>

      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>

        <div className="project-links">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer">
              Live App
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

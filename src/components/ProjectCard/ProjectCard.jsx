const ProjectCard = ({ title, image_link, description, github, live }) => {
  return (
    <div className="project-card">
      <span className="project-title">{title}</span>
      <img
        className="project-img"
        src={image_link}
        alt={title}
        onError={(e) => {
          console.warn("Image failed to load:");
        }}
      />
      <p className="img-blurb">{description}</p>
      <div className="project-links">
        {github && (
          <span>
            <a href={github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>{" "}
            |{" "}
          </span>
        )}
        {live && (
          <span>
            <a href={live} target="_blank" rel="noopener noreferrer">
              Live App
            </a>
          </span>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

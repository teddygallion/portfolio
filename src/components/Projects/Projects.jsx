import { useState, useEffect } from "react";
import "../../styles/Projects.css";
import ProjectCard from "../ProjectCard/ProjectCard";

const Projects = () => {
  const API_URL = import.meta.env.VITE_BACKEND_URL;

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch projects:", err);
        setError("Something went wrong while fetching projects.");
        setLoading(false);
      });
  }, [API_URL]);

  return (
    <section className="projects-section">
      <h2 className="projects-title">Here’s some stuff I’ve made</h2>

      {loading && <p className="loading">Loading projects...</p>}
      {error && <p className="error">{error}</p>}

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image_link={project.image_link}
            description={project.description}
            github={project.github_link}
            live={project.live_app_link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;

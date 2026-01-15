import teddy from "../../assets/teddy.jpg";
import "../../styles/About.css";

const About = () => {
  return (
    <section className="about-section">

      <div className="about-header">
        <img src={teddy} alt="Ted Gallion" className="about-photo" />
        <h2>About Me</h2>
        <p className="about-intro">
          Hi, I’m Teddy Gallion — a software engineer based in San Francisco 
          who loves building intuitive, user-centric web applications and 
          clean backends that scale.
        </p>
      </div>

      <div className="about-grid">

        {/* About Me */}
        <div className="about-card">
          <h3>Who I Am</h3>
          <p>
            I specialize in building responsive, streamlined web apps using modern 
            frontend tools like React and lightweight backends with Python and Django.
            I love solving real-world problems with thoughtful, minimalistic design.
          </p>
        </div>

        {/* What I Do */}
        <div className="about-card">
          <h3>What I Do</h3>
          <p>I focus on full-stack engineering with an emphasis on:</p>
          <ul>
            <li>React, Next.js & modern frontend tooling</li>
            <li>Django, DRF & PostgreSQL</li>
            <li>Integrating AI/LLMs into web apps</li>
            <li>End-to-end product development</li>
          </ul>
        </div>

        {/* What I'm Working On */}
        <div className="about-card">
          <h3>What I’m Working On</h3>
          <p>
            I’m building an AI-powered learning platform that constructs 
            personalized learning paths using CrewAI agents and a Django backend.
          </p>
          <ul>
            <li>LLM integrations</li>
            <li>Complex PostgreSQL queries</li>
            <li>Agentic workflows</li>
          </ul>
        </div>

      </div>

    </section>
  );
};

export default About;

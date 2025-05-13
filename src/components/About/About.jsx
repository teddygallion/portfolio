import teddy from "../../assets/teddy.jpg"
const About = () => {
  return (
    <>
      <section className="about">
        <div className="about-img">
          <img src={teddy} className="teddy" alt="Teddy" />
        </div>
        <section className='blurb'>
        <section className="about">
          <div className="about-text">
          <h3>About Me</h3>
            <p>
             Hi, I’m Ted Gallion, a software engineer based in San Francisco, California. I specialize in building responsive, user-centric web applications with ReactJS and crafting robust backends with Python and Django.
             I’m passionate about creating clean, scalable solutions that solve real-world problems—whether that’s developing intuitive interfaces, designing efficient APIs, or building full-stack platforms from the ground up.
            </p>
          </div>
          </section>
          
          <section className='about'> 
          <div className="about-text">
           <h3>What I Do</h3>
            <p>I focus on full-stack web development with a strong emphasis on:</p>
               <ul>
                <li>Frontend development using ReactJS, Next.js, and modern JavaScript tooling</li>
                <li>Backend architecture with Django, Django REST Framework, and PostgreSQL</li>
                <li>AI integration for smart, personalized web experiences</li>
                <li>End-to-end app development, from concept to deployment</li>
              </ul>
            <p>I love working on educational technology, productivity tools, and apps that make learning or working easier and more enjoyable.</p>
          </div>
          </section>
        <section className="about">
        <div className="about-text">
        <h3>What I’m Working On</h3>
          <p>
            Currently, I’m building an AI-powered learning platform that creates custom learning paths based on user goals. The app is built with Django, React, and CrewAI agents, and is designed to make self-guided learning more accessible, effective, and engaging.
            I’m also diving deeper into:
          </p>
          <ul>
            <li>Integrating LLMs into web platforms</li>
            <li>Advanced PostgreSQL optimization</li>
            <li>Building agentic workflows with AI</li>
          </ul>
        </div>
        </section>
       {/* <section className="about">
          <div className="about-text">
            <h3>When I'm Not Programming:</h3>
            <p> I enjoy yoga, cycling, photography, and making music. </p>
          </div>
        </section>*/}
      </section>
    </section>
    </>
  );
};

export default About;

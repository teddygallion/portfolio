import "../../styles/Hero.css";
import teddy from "../../assets/teddy.jpg";
import Forest from "../../assets/forest.svg"; // you’ll add this

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">

        {/* Left side — photo */}
        <div className="hero-photo-wrapper">
          <img src={teddy} className="hero-photo" alt="Teddy" />
        </div>

        {/* Right side — text */}
        <div className="hero-text">
          <h1>Hi, I'm Teddy.</h1>
          <h2>
            Software Engineer <br />
            Designer at Heart <br />
            Bass Wizard on Weekends
          </h2>
        </div>
      </div>

      {/* Bottom forest silhouette */}
      <img src={Forest} className="hero-forest" alt="" />
    </section>
  );
};

export default Hero;

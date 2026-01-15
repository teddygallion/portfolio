import { useState } from 'react';
import lampOff from '../../assets/lamp-off.svg';
import lampOn from '../../assets/lamp-on.svg';
import "../../styles/Navbar.css";

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const [hovered, setHovered] = useState(false);

  // Base colors depending on theme
  const primary = isDarkMode ? "#F6F1E9" : "#2F2F2F";
  const secondary = isDarkMode ? "#2F2F2F" : "#F6F1E9";

  // Swap colors on hover
  const primaryFill = hovered ? secondary : primary;
  const secondaryFill = hovered ? primary : secondary;

  return (
    <nav className={`nav-wrapper ${isDarkMode ? "dark" : "light"}`}>
      <div className="nav-content">

        {/* Logo */}
        <svg
          width="160"
          height="160"
          viewBox="0 0 300 300"
          className="logo"
          xmlns="http://www.w3.org/2000/svg"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <path
            d="M72.8 47V41H197V47H72.8ZM72.8 60.2V54.2H197V60.2H72.8ZM72.8 73.4V67.4H197V73.4H72.8ZM145.2 201.8V79.8H151.2V201.8H145.2ZM118.8 201.8V79.8H124.8V201.8H118.8ZM132 201.8V79.8H138V201.8H132Z"
            fill={primaryFill}
          />
          <path
            d="M150.2 258.6C106.2 258.6 71 223.4 71 179.4C71 135.4 106.2 100.2 150.2 100.2C194.2 100.2 229.4 135.4 229.4 179.4C229.4 223.4 194.2 258.6 150.2 258.6ZM150.2 250.2C189.6 250.2 221 218.8 221 179.4H150.2V108.6C110.8 108.6 79.4 140 79.4 179.4C79.4 218.8 110.8 250.2 150.2 250.2Z"
            fill={secondaryFill}
          />
        </svg>

        {/* Theme toggle */}
        <img
          src={isDarkMode ? lampOff : lampOn}
          className="light-toggle"
          alt="Light toggle"
          onClick={toggleDarkMode}
        />
      </div>
    </nav>
  );
};

export default Navbar;

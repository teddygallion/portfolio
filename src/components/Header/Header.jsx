import NavBar from "../NavBar/NavBar";
import '../../styles/Header.css';

const Header = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <header className="header">
      <NavBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </header>
  );
};

export default Header;

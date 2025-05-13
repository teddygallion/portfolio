import NavBar from "../Navbar/NavBar";

const Header = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <header>
      <NavBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </header>
  );
};

export default Header;
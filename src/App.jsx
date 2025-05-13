import { useState, useEffect } from 'react';
import logo from './assets/TG.svg';
import lampOff from './assets/lamp-off.svg';
import lampOn from './assets/lamp-on.svg';
import smolskul from "./assets/smolskul.png";

import Projects from "./components/Projects/Projects";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from './components/About/About';
import Contact from "./components/Contact/Contact"
import './App.css';

const App = () => {

  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'false' ? false : true;
  });


  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove('light-mode');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.body.classList.add('light-mode');
      localStorage.setItem('darkMode', 'false');
    }
  }, [isDarkMode]);

  return (
    <div className="App">
     <Header isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(prev => !prev)} />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer>
        <img src={smolskul} className="smolskul" />
        <span>© 2025 <a href ="https://github.com/teddygallion/"> Ted Gallion</a> </span>
      </footer>
    </div>
  );
}

export default App;

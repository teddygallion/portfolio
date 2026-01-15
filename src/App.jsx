import { useState, useEffect, useRef } from 'react';
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

  const rippleRef = useRef(null);
  useEffect(() => {
  const nav = document.querySelector(".nav-wrapper");

  const handleScroll = () => {
    if (window.scrollY > 30) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove('light-mode');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.body.classList.add('light-mode');
      localStorage.setItem('darkMode', 'false');
    }
  }, [isDarkMode]);

  const toggleDarkMode = (e) => {
    const ripple = rippleRef.current;

    const x = e.clientX;
    const y = e.clientY;

    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.remove('animate');
    void ripple.offsetWidth; // trigger reflow
    ripple.classList.add('animate');

    setTimeout(() => {
      setIsDarkMode(prev => !prev);
    }, 200); // sync with animation timing
  };

  return (
    <div className="theme-transition-wrapper">
      <div className="theme-ripple" ref={rippleRef}></div>
      <div className="App">
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <footer>
          <img src={smolskul} className="smolskul" />
          <span>© 2025 <a href="https://github.com/teddygallion/"> Ted Gallion</a> </span>
        </footer>
      </div>
    </div>
  );
};

export default App;

import { useRef } from 'react';
import About from './About';
import './assets/css/header.css';
import ContactMe from './ContactMe';
import Experience from './Experience';
import Intro from './Intro';
import Navbar from './NavBar';

const Home = (props) => {
  return (
    <>
      <header className="header-background">
        <div className="bg-animation">
          <div id="stars" />
          <div id="stars2" />
          <div id="stars3" />
        </div>
        <Navbar />
        <Intro />
        <About />
        <Experience />
        <ContactMe />
        <footer>
          <div className="bottom">Revised by Khanh Dang</div>
        </footer>
      </header>
    </>
  );
};

export default Home;

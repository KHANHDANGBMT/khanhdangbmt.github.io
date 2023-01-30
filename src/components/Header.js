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
          <Navbar />
          <Intro />
        </div>
      </header>
      <div className="header-body">
        <About />
        <Experience />
        <ContactMe />
        <footer>
          <div className="bottom">Revised by Khanh Dang</div>
        </footer>
      </div>
      {/* <About /> */}
    </>
  );
};

export default Home;
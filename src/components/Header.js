import About from './About';
import './assets/css/header.css';
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
          <About />
          <Experience />
        </div>
      </header>
      {/* <About /> */}
    </>
  );
};

export default Home;

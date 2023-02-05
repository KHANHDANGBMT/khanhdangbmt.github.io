import About from './About';
import './assets/css/header.css';
import ContactMe from './ContactMe';
import Experience from './Experience';
import Intro from './Intro';

const Home = (props) => {
  return (
    <>
      <Intro />
      <About />
      <Experience />
      <ContactMe />
      <footer>
        <div className="bottom">Revised by Khanh Dang</div>
      </footer>
    </>
  );
};

export default Home;

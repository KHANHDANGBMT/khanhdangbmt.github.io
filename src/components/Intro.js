import Typed from 'react-typed';
import './assets/css/intro.css';

const Intro = () => {
  return (
    <div id="home" className="intro route">
      <div className="intro-content display-table">
        <div className="table-cell">
          <div className="container title-center-column">
            <h1 className="intro-title mb-4">Hello, I am Khanh</h1>
            <p className="intro-subtitle">
              <span className="text-slider-items"></span>
              <strong className="text-slider">
                <Typed
                  strings={['Back End Developer', 'Software Engineer']}
                  typeSpeed={80}
                  backDelay={1100}
                  backSpeed={30}
                  loop
                />
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;

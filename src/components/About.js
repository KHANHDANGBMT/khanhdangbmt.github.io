import './assets/css/about.css';
import avt from './assets/images/avt.jpg';

const About = (props) => {
  return (
    <div className="container about">
      <div className="about-me">
        <h3 className="numbered-heading">
          <span className="number-head">01.</span>
          About me
        </h3>
        <p>
          Hello! Wonderful, I got introduced to programming in my freshman year
          at University of Danang - University of Science and Technology, where
          I completed my{' '}
          <a
            href="https://drive.google.com/file/d/1A2Zv2X8Y1brs3QctlQYOvyijnjj8tN69/view?usp=share_link"
            className="hyper-link"
          >
            Information Technology Engineering Degree
          </a>{' '}
          (2017-2022) with 3.14/4 score.
        </p>

        <p>
          Currently, I'm working as a developer at NeoX. My responsibility
          includes NodeJs based microservices.
        </p>

        <p>
          <span>I have been awarded as </span>
          <a
            href="https://drive.google.com/file/d/1VMuBNZJ2XSJTL6T-0rc8TOwkGXfln4Bd/view?usp=share_link"
            className="hyper-link"
          >
            GameLoft Game Jam 2019
          </a>
          <span>, 3rd prize winner for </span>
          <a
            href="https://drive.google.com/file/d/1Q0RBlHkHpU5oSx-c2-GOB7uCJVJ6tLBy/view?usp=share_link"
            className="hyper-link"
          >
            MTI Online Hackathon 2020
          </a>
        </p>

        <p>
          Besides, I have two scientific papers published in IEE and MDPI which
          are:
        </p>
        <p className="child-tab">
          <a
            href="https://ieeexplore.ieee.org/abstract/document/9794726"
            className="hyper-link"
          >
            Malware Spreading Model for Routers in Wi-Fi Networks
          </a>
        </p>
        <p className="child-tab">
          <a
            href="https://www.mdpi.com/2079-9292/10/19/2403"
            className="hyper-link"
          >
            A Behavior-Based Malware Spreading Model for Vehicle-to-Vehicle
          </a>
        </p>

        <p>Here is a list of the technologies that I'm familiar with!</p>
        <div className="list-tech">
          <span className="label-custom">NodeJs</span>
          <span className="label-custom">Javascript</span>
          <span className="label-custom">Express</span>
          <span className="label-custom">MongoDB</span>
          <span className="label-custom">MySQL</span>
          <span className="label-custom">HTML</span>
          <span className="label-custom">CSS</span>
        </div>
      </div>
      <div className="about-avatar-wrapper">
        <div className="box-wrapper">
          <div className="box">
            <div className="content">
              <img src={avt} alt="avatar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

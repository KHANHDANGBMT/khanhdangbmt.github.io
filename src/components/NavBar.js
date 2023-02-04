import './assets/css/navbar.css';
import React from 'react';

import logo1 from './assets/images/logo-no-background.png';

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      logo: logo1
    };
  }

  handleScroll(e) {
    e.preventDefault();
    const dataId = e.target.getAttribute('data-id');
    const element = document.getElementById(dataId);
    const titleTopPosition = element?.offsetTop;
    window.scrollTo({
      top: titleTopPosition - 50,
      behavior: 'smooth'
    });
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 50) {
        document
          .querySelector('.navbar-expand-md')
          .classList.add('navbar-reduce');
        document
          .querySelector('.navbar-expand-md')
          .classList.remove('navbar-trans');
        this.setState({ logo: logo1 });
      } else {
        document
          .querySelector('.navbar-expand-md')
          .classList.add('navbar-trans');
        document
          .querySelector('.navbar-expand-md')
          .classList.remove('navbar-reduce');
        this.setState({ logo: logo1 });
      }
    });
  }

  render() {
    return (
      <nav
        className="navbar navbar-b navbar-trans navbar-expand-md fixed-top"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand js-scroll" href="#page-top">
            <img
              src={this.state.logo}
              alt="logo"
              style={{ maxWidth: '100px' }}
            />
          </a>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarDefault"
            aria-controls="navbarDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div
            className="navbar-collapse collapse justify-content-end"
            id="navbarDefault"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link js-scroll nav-custom" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll nav-custom" href="blog">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link js-scroll nav-custom"
                  href="#about"
                  data-id="about"
                  onClick={(e) => this.handleScroll(e)}
                >
                  About me
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link js-scroll nav-custom"
                  href="#work"
                  data-id="work"
                  onClick={(e) => this.handleScroll(e)}
                >
                  Work
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link js-scroll nav-custom"
                  href="#contact"
                  data-id="contact"
                  onClick={(e) => this.handleScroll(e)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;

import './assets/css/header.css';
import Intro from './Intro';
import Navbar from './NavBar';

const Header = (props) => {
  return (
    <header className="header-background">
      <div className="bg-animation">
        {' '}
        <Navbar />
        <Intro />
      </div>
    </header>
  );
};

export default Header;

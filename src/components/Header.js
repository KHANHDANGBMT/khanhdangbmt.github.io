import './assets/css/header.css';

const Header = (props) => {

  return (
    <header className="header-background">
      <div className="bg-animation">{props.children}</div>
    </header>
  );
};

export default Header;

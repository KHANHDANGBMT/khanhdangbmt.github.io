import './assets/css/header.css';
const Background = (props) => {
  return (
    <header className="header-background">
    <div className="bg-animation">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
    </div>
    {props.children}
    <footer>
      <div className="bottom">Revised by Khanh Dang</div>
    </footer>
  </header>
  );
};

export default Background;
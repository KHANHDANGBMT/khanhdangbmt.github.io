import { createContext, useState, useEffect } from 'react';
import './components/assets/css/bootstrap.css';
import {
  HashRouter,
  Route,
  Routes
} from 'react-router-dom';
import Home from './components/Header';
import PostList from './components/PostList';
import Background from './components/Background';
import Navbar from './components/NavBar';
import Post from './components/Post';

// Create Context
export const ThemeContext = createContext();

function App() {
  const [page, setPage] = useState('home');
  const changePage = (pageName) => {
    setPage(pageName);
  };
  useEffect(() => {
    switch (page) {
      case 'home': {
        setPage(
          <Background>
            <Home />
          </Background>
        );
        break;
      }
      default: {
        setPage(
          <Background>
            <PostList />
          </Background>
        );
      }
    }
  }, []);

  return (
    <Background>
    <HashRouter >
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/blog" element={<PostList />} />
          <Route  path="/blog/:year/:month/:day/:fileName" element={<Post />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </HashRouter>
  </Background>
  );
}

export default App;

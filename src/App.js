import { createContext, useState } from 'react';
import './components/assets/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Header';
import Post from './components/Post';
import PostList from './components/PostList';

// Create Context
export const ThemeContext = createContext();

function App() {
  const [isDark, setIsDark] = useState(true);

  const value = {
    isDark,
    setIsDark
  };

  return (
    <ThemeContext.Provider value={value}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/posts" element={<PostList />} />
          <Route exact path="/post/:id" element={<Post />} />
          <Route exact path="/" element={<Home />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;

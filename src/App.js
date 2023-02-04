import { createContext, useState } from 'react';
import './components/assets/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Header';
import PostList from './components/PostList';
import Background from './components/Background';

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
          <Route
            exact
            path="/blog"
            element={
              <Background>
                <PostList />
              </Background>
            }
          />
          <Route
            exact
            path="/"
            element={
              <Background>
                <Home />
              </Background>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;

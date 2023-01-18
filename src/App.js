import { createContext, useState } from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import NavBar from './components/NavBar';
import './components/assets/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
          <Route path="/" element={<Header />}>
            {/* <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;

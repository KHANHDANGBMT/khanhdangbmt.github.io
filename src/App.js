import { createContext, useState } from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import NavBar from './components/NavBar';

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
      <Header>
        <NavBar />
        <Intro />
      </Header>
    </ThemeContext.Provider>
  );
}

export default App;

import React, { createContext, useState } from 'react';

const ThemeContext = createContext(null);

export const themeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = e => {
    setTheme();
  };

  return (
    <ThemeContext.Provider value={ theme, toggleTheme } >
      {children}
    </ThemeContext.Provider>

  );
};

export const useTheme = () => {
  const { theme } = useTheme(ThemeContext);
  return theme;
};

import React, { useState, createContext, useContext } from 'react';

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = e => {
    setTheme();
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const { theme } = useTheme(ThemeContext);
  return theme;
};

export const ThemeError = () => {
  const { alertTheme } = useContext(ThemeContext);
  return alertTheme;
}; 


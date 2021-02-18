import React, { createContext, useState } from 'react';
import styles from './styles';

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('lightTheme');
  
  const value = { setTheme, theme };
  const mode = styles[theme];

  return (
    <ThemeContext.Provider styles={mode} value={value} >
      <div style={mode}>{children}</div>
    </ThemeContext.Provider>

  );
};


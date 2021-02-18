import React, { useContext } from 'react';
import { ThemeContext } from '../../state/themeContext';

const Header = () => {
  const { setTheme, theme } = useContext(ThemeContext);

  const changeTheme = () => {
    if(theme === 'lightTheme') setTheme('darkTheme');
    else setTheme('lightTheme');
  };

  return (
    <>
      <input type="checkbox" onChange={changeTheme} /> Toggle Theme 
    </>
  );
};

export default Header;

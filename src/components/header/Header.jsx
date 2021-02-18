import React from 'react';

export const lightTheme = {
  body: '#E2E2E2',
  text: '#363537',
  toggleBorder: '#FFF',
  gradient: 'linear-gradient(#39598A, #79D7ED)',
};

export const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  gradient: 'linear-gradient(#091236, #1E215D)',
};

const Header = () => {
  return (
    <>
      <div onChange={this.onChangeValue}> 
        <input type="radio" value="light" name="theme" /> Light Mode 
        <input type="radio" value="dark" name="theme" />  Dark Mode
      </div>
    </>
  );
};

export default Header;

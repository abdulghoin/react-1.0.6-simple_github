import React, {createContext, useState, cloneElement} from 'react';

const themes = {
  light: {
    color: '#000000',
    background: '#eeeeee',
  },
  dark: {
    color: '#ffffff',
    background: '#222222',
  },
};

const initialValue = {
  mode: 'light',
  themes,
  toggleTheme() {},
};

const Theme = createContext(initialValue);

export function ThemeProvider(props) {
  const [mode, setMode] = useState('light');

  const toggleTheme = () => setMode(/light/gi.test(mode) ? 'dark' : 'light');

  return (
    <Theme.Provider value={{mode, themes, toggleTheme}}>
      {cloneElement(props.children, props)}
    </Theme.Provider>
  );
}

export default Theme;

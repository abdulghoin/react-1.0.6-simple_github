import React from 'react';
import {Link} from 'react-router-dom';
import {useThemeConsumer} from '../contexts/theme';

import './Header.css';

export default useThemeConsumer(function({themeContext: {toggleTheme, mode}}) {
  return (
    <header>
      <Link to="/">Simple Github</Link>
      <span onClick={toggleTheme}>
        {/light/gi.test(mode) ? 'Dark Theme' : 'Light Theme'}
      </span>
    </header>
  );
});

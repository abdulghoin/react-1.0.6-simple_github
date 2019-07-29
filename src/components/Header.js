import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import theme from '../contexts/theme';

import './Header.css';

export default function() {
  const {toggleTheme, mode} = useContext(theme);
  return (
    <header>
      <Link to="/">Simple Github</Link>
      <span onClick={toggleTheme}>
        {/light/gi.test(mode) ? 'Dark Theme' : 'Light Theme'}
      </span>
    </header>
  );
}

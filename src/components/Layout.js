import React from 'react';
import {useThemeConsumer} from '../contexts/theme';

import './Layout.css';

export default useThemeConsumer(function({
  children,
  themeContext: {mode, themes, toggleTheme},
}) {
  return (
    <section className="layout" style={themes[mode]}>
      <span onClick={toggleTheme}>
        {/light/gi.test(mode) ? 'Dark Theme' : 'Light Theme'}
      </span>
      {children}
    </section>
  );
});

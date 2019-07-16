import React from 'react';
import {useThemeConsumer} from '../contexts/theme';

import Header from './Header';

import './Layout.css';

export default useThemeConsumer(function({
  children,
  themeContext: {mode, themes},
}) {
  return (
    <section className="layout" style={themes[mode]}>
      <Header />
      {children}
    </section>
  );
});

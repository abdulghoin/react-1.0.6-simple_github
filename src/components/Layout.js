import React, {useContext} from 'react';
import theme from '../contexts/theme';

import Header from './Header';

import './Layout.css';

export default function({children}) {
  const {mode, themes} = useContext(theme);
  return (
    <section className="layout" style={themes[mode]}>
      <Header />
      {children}
    </section>
  );
}

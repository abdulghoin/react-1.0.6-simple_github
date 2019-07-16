import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Layout from './components/Layout';
import List from './components/List';

export default function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" component={List} />
        </Switch>
      </Layout>
    </Router>
  );
}

import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Layout from './components/Layout';
import List from './components/List';
import Detail from './components/Detail';

export default function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/:login" component={Detail} />
          <Route path="/" component={List} />
        </Switch>
      </Layout>
    </Router>
  );
}

import React, {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Layout from './components/Layout';
const List = lazy(() => import('./components/List'));
const Detail = lazy(() => import('./components/Detail'));

export default function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<p>Loading.</p>}>
          <Switch>
            <Route path="/:login" component={Detail} />
            <Route path="/" component={List} />
          </Switch>
        </Suspense>
      </Layout>
    </Router>
  );
}

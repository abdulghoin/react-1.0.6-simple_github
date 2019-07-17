import React, {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {ThemeProvider} from './contexts/theme';

import Layout from './components/Layout';
import Loader from './components/Loader';

const List = lazy(() => import('./components/List'));
const Detail = lazy(() => import('./components/Detail'));

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route path="/:login" component={Detail} />
              <Route path="/" component={List} />
            </Switch>
          </Suspense>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

import React, {Suspense, lazy} from 'react';

import useFetch from '../hooks/useFetch';

import Loader from './Loader';

import './List.css';

const ListItem = lazy(() => import('./ListItem'));

export default function() {
  const [data, isLoading] = useFetch([], 'https://api.github.com/users');

  if (isLoading) return <Loader />;

  return (
    <ul>
      <Suspense fallback={<Loader />}>
        {data.map(({node_id, avatar_url, login}) => (
          <ListItem key={node_id} {...{avatar_url, login}} />
        ))}
      </Suspense>
    </ul>
  );
}

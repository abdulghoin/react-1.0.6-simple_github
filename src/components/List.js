import React, {Suspense, lazy} from 'react';

import useFetch from '../hooks/useFetch';

import './List.css';

const ListItem = lazy(() => import('./ListItem'));

export default function() {
  const [data, isLoading] = useFetch([], 'https://api.github.com/users');

  if (isLoading) return <p>Loading...</p>;

  return (
    <ul>
      <Suspense fallback={<p>Loading..</p>}>
        {data.map(({node_id, avatar_url, login}) => (
          <ListItem key={node_id} {...{avatar_url, login}} />
        ))}
      </Suspense>
    </ul>
  );
}

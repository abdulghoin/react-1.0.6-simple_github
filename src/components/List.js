import React from 'react';

import useFetch from '../hooks/useFetch';

import ListItem from './ListItem';

import './List.css';

export default function() {
  const [data, isLoading] = useFetch([], 'https://api.github.com/users');

  if (isLoading) return <p>Loading...</p>;

  return (
    <ul>
      {data.map(({node_id, avatar_url, login}) => (
        <ListItem key={node_id} {...{avatar_url, login}} />
      ))}
    </ul>
  );
}

import React, {useState, useEffect} from 'react';

import ListItem from './ListItem';

import './List.css';

export default function() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://api.github.com/users');
      const data = await res.json();

      setData(data);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  console.log(data);
  if (isLoading) return <p>Loading...</p>;

  return (
    <ul>
      {data.map(({node_id, avatar_url, login}) => (
        <ListItem key={node_id} {...{avatar_url, login}} />
      ))}
    </ul>
  );
}

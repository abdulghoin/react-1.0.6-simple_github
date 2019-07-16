import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import './Followers.css';

export default function Followers({text, value}) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(value);
      const data = await res.json();

      console.log(data);
      setData(data);
      setIsLoading(false);
    }

    fetchData();
  }, [value]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <p style={{marginBottom: '1rem'}}>{text}</p>
      <ul>
        {data.map(({node_id, avatar_url, login}) => (
          <li key={node_id}>
            <Link to={`/${login}`}>
              <img src={avatar_url} alt={login} />
              <span>{login}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

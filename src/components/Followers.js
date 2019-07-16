import React from 'react';
import {Link} from 'react-router-dom';

import useFetch from '../hooks/useFetch';

import './Followers.css';

export default function Followers({text, value}) {
  const [data, isLoading] = useFetch([], value);

  return (
    <>
      <p style={{marginBottom: '1rem'}}>{text}</p>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map(({node_id, avatar_url, login}) => (
            <li className="followers_item" key={node_id}>
              <Link to={`/${login}`}>
                <img src={avatar_url} alt={login} />
                <span>{login}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

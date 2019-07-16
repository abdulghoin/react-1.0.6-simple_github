import React from 'react';
import {Link} from 'react-router-dom';

import './ListItem.css';

export default function({avatar_url, login}) {
  return (
    <li>
      <Link to={`/${login}`}>
        <img src={avatar_url} alt={login} />
        <span>{login}</span>
      </Link>
    </li>
  );
}

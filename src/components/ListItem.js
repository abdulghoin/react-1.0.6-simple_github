import React from 'react';

import './ListItem.css';

export default function({avatar_url, login}) {
  return (
    <li>
      <img src={avatar_url} alt={login} />
      <span>{login}</span>
    </li>
  );
}

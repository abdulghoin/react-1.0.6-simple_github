import React, {useState, useEffect} from 'react';

import Followers from './Followers';

export default function(props) {
  const [detail, setDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const {
    match: {
      params: {login},
    },
  } = props;

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://api.github.com/users/${login}`);
      const data = await res.json();

      setDetail(data);
      setIsLoading(false);
    }

    fetchData();
  }, [login]);

  if (isLoading) return <p>Loading...</p>;

  let neededData = {
    name: {
      text: 'Name',
      component: DetailItem,
    },
    company: {
      text: 'Company',
      component: DetailItem,
    },
    blog: {
      text: 'Blog',
      component: DetailItem,
    },
    location: {
      text: 'Location',
      component: DetailItem,
    },
    email: {
      text: 'Email',
      component: DetailItem,
    },
    followers_url: {
      text: 'Followers',
      component: Followers,
    },
  };

  return (
    <section>
      {Object.keys(neededData).reduce((res, v) => {
        let {component: Comp, text} = neededData[v];
        res.push(<Comp {...{text, value: detail[v], key: v}} />);
        return res;
      }, [])}
    </section>
  );
}

function DetailItem({text, value}) {
  return (
    <p style={{margin: '1rem 0'}}>
      {text} : {value || '-'}
    </p>
  );
}

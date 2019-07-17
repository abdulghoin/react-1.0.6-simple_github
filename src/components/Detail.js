import React, {Suspense, lazy} from 'react';

import useFetch from '../hooks/useFetch';

import Loader from './Loader';

import './Detail.css';

const Followers = lazy(() => import('./Followers'));

export default function({
  match: {
    params: {login},
  },
}) {
  const [detail, isLoading] = useFetch(
    {},
    `https://api.github.com/users/${login}`,
  );

  if (isLoading) return <Loader />;

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
    <section className="detail">
      <Suspense fallback={<Loader />}>
        {Object.keys(neededData).reduce((res, v) => {
          let {component: Comp, text} = neededData[v];
          res.push(<Comp {...{text, value: detail[v], key: v}} />);
          return res;
        }, [])}
      </Suspense>
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

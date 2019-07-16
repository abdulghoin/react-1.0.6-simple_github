import {useState, useEffect} from 'react';

export default function(defaultData, url) {
  const [data, setData] = useState(defaultData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();

      setData(data);
      setIsLoading(false);
    }
    fetchData();

    return () => {
      setIsLoading(true);
      setData(defaultData);
    };
  }, [url]);

  return [data, isLoading];
}

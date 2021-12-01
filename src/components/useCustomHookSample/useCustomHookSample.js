import React, { useEffect, useState } from "react";
import axios from "axios";

const useInfiniteScroll = (start = 10, pace = 10) => {
  const [limit, setLimit] = useState(start);

  window.onscroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop
      === document.documentElement.offsetHeight) {
      setLimit(limit + pace);
    }
  };
  return limit;
};

const useSearch = (query = null) => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    let baseUrl = 'https://hn.algolia.com/api/v1/search?query=';

    async function fetchData() {
      const response = await axios(baseUrl + query);
      if (response.status === 200) {
        setResult(response.data.hits);
      }
    }

    fetchData();
  }, [query]);

  return result;
}

const UseCustomHookSample = () => {
  const [query, setQuery] = useState('react');

  const data = useSearch(query);

  let infiniteScroll = useInfiniteScroll();

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <input value={query} onChange={e => setQuery(e.target.value)} />

        {
          data.length > 0
            ? (data.slice(0, infiniteScroll).map(content => {
              return (
                <div key={content.objectID}>
                  <a href={content.url}>{content.title}</a>
                </div>
              );
            })
            )
            : <div>Loading...</div>
        }
      </div>
    </>
  );
};

export default UseCustomHookSample;

import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  data: [],
  loading: true,
  error: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'success':
      return { 
        data: action.payload,
        loading: false,
        error: null
      };
    case 'error':
      return { 
        data: [],
        loading: false,
        error: action.errors
      };
    case 'pending':
      return initialState;
    default:
      return state;
  }
}

const useSearch = (query = null) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let baseUrl = 'https://hn.algolia.com/api/v1/search?query=';

    async function fetchData() {
      dispatch({ type: 'pending'});

      const response = await axios(baseUrl + query);
      if (response.status === 200) {
        dispatch({ type: 'success', payload: response.data.hits});
      } else {
        dispatch({ type: 'error', error: new Error('Error loading data')});
      }
    }

    fetchData();
  }, [query]);

  return state;
}

const UseCustomHookReducerSample = () => {
  const [query, setQuery] = useState('react');
  const {data, loading, error} = useSearch(query);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <input value={query} onChange={e => setQuery(e.target.value)} />

        {loading && <div>Loading...</div>}
        {error ? error : null}
        {
          data.length > 0 &&
          (
            data.map(content => {
              return (
                <div key={content.objectID}>
                  <a href={content.url}>{content.title}</a>
                </div>
              );
            })
          )
        }
      </div>
    </>
  );
};

export default UseCustomHookReducerSample;

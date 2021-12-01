import React, { useReducer } from "react";

// this function runs 2 times
// first time loading component
// second time calling dispatch 'reset' 
function init(initialCount) {
  // Do some computationally expensive work...
  if (initialCount !== 0) {
    initialCount = + 0
  }
  return { count: initialCount };
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
}

const UseReducerSample = function () {
  const initialCount = 0;

  // const [state, dispatch] = useReducer(reducer, {count: 0});

  // lazy initialization
  // the initialCount (second argument) is an arg of init function (third argument)
  const [state, dispatch] = useReducer(reducer, initialCount, init);

  return (
    <div>
      <div>Count: {state.count}</div>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      &nbsp;
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      &nbsp;
      <button onClick={() => dispatch({ type: 'reset', payload: initialCount })}>
        Reset count
      </button>
    </div>
  );
}

export default UseReducerSample;


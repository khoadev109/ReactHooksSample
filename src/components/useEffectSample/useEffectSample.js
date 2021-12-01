import React, { useState, useEffect } from "react";

const UseEffectSample = function () {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      &nbsp;
      <button onClick={() => setCount(count)}>
        Click me no change
      </button>
    </div>
  );
}

export default UseEffectSample;


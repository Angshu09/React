import React, { useState } from "react";

export default function Counter({name}) {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);  

  return (
    <>
      <h1>{name}</h1>
      <div className="counterContainer">
        <button className="btn" onClick={() => setCount((prev) => prev + 1)}>
          +
        </button>
        <p>{count}</p>
        <button className="btn" onClick={() => setCount((prev) => prev - 1)}>
          -
        </button>
      </div>

      <div className="counterContainer">
        <button className="btn" onClick={() => setCount2((prev) => prev + 1)}>
          +
        </button>
        <p>{count2}</p>
        <button className="btn" onClick={() => setCount2((prev) => prev - 1)}>
          -
        </button>
      </div>
    </>
  );
}

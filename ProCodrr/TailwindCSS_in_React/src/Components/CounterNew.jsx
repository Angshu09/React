import React, { useEffect } from "react";
import { useState } from "react";

export default function CounterNew({name}) {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      console.log('hi new')
    }, 1000)

    return () => {
      console.log('clean up')
      clearInterval(timerId)
    } //This is equivalent to componentWillUnmount()
  }, [])


  return (
    <>
    <h1 className="mt-10 ml-10">{name}</h1>
      <div className="mt-10 ml-10 flex gap-5">
        <button
          className="px-3 py-1 bg-slate-500 text-white border"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        <h1>{count}</h1>
        <button
          className="px-3 py-1 bg-slate-500 text-white border"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>

      <div className="mt-10 ml-10 flex gap-5">
        <button
          className="px-3 py-1 bg-slate-500 text-white border"
          onClick={() => setCount2(count2 - 1)}
        >
          -
        </button>
        <h1>{count2}</h1>
        <button
          className="px-3 py-1 bg-slate-500 text-white border"
          onClick={() => setCount2(count2 + 1)}
        >
          +
        </button>
      </div>
    </>
  );
}

import React, { useState } from "react";
// import {data} from '../DummyData'

export default function About() {
  const [todoList, setTodoList] = useState([])
  return (
    <>
      <div>About</div>
      <button onClick={() => {
        import('../DummyData').then((module) => {
          return setTodoList(module.data)
        })
      }}>Load Data</button>
      <ul>
        {
          todoList.map((d) => {
            return <li key={d.id}>{d.title}</li>
          })
        }
      </ul>
    </>
  );
}

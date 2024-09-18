import React from 'react'
import Container from './components/Container'
import Counter from './components/Counter'


export default function App() {
  return (
    <>
      {/* <h1 onClick={(e) => {
        console.log(e)
      }}>Hello</h1>

      <input onChange={(e) => console.log(e.target.value)} type="text" /> */}
       <Container onClick={(e) => console.log('hi')} />
       {/* <Container /> */}
       {/* <Counter /> */}
    </>   
  )
}

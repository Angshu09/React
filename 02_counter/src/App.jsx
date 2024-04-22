import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, stateCounter] = useState(5);
  // let counter = 5;

  const addValue = ()=>{
    if(counter == 20){
      return;
    }
    // stateCounter(counter+1);
    // stateCounter(counter+1);
    // stateCounter(counter+1);
    // stateCounter(counter+1);

    // stateCounter((prevCounter) => prevCounter+1);
    // stateCounter((prevCounter) => prevCounter+1);
    // stateCounter((prevCounter) => prevCounter+1);
    // stateCounter((prevCounter) => prevCounter+1);
    stateCounter(counter+1);
  }

  const removeValue = ()=>{
    if(counter <= 0){
      return;
    }
    stateCounter(counter-1);
  }

  return (
    <>
      <h1>Chai Aur React {counter}</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <button onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App

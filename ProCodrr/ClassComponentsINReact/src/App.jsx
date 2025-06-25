import { useState } from 'react'
import Counter from './components/Counter'
import OldCounter from './components/OldCounter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Counter name={"New Counter"}/>
      <OldCounter name={"Old Counter"}/> 
    </>
  )
}

export default App

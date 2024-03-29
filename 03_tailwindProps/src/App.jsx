import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  const obj = {
    name: "Angshu",
    college: "makaut"
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card author="Angshu" btn="Visit Me"/>
      <Card author="Angshu09" btn="Visit Here"/>
    </>
  )
}

export default App

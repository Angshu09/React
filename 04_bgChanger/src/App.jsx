import { useState } from "react"

function App() {
  const [color, setColor] = useState('olive')

  return (
   <div className="w-full flex justify-center h-screen duration-150 relative" style={{backgroundColor : color}}>

    <div className="flex rounded-lg items-center gap-2 py-2 px-2 fixed bottom-5 bg-slate-50">
      
      <button onClick={() => setColor("red")} className=" bg-red-500 py-2 px-8 rounded-xl text-cyan-50">Red</button>
      <button onClick={() => setColor("yellow")} className=" bg-yellow-500 py-2 px-8 rounded-xl text-cyan-50">yellow</button>
      <button onClick={() => setColor("blue")} className=" bg-blue-500 py-2 px-8 rounded-xl text-cyan-50">blue</button>
      <button onClick={() => setColor("green")} className=" bg-green-500 py-2 px-8 rounded-xl text-cyan-50">green</button>
      <button onClick={() => setColor("pink")} className=" bg-pink-500 py-2 px-8 rounded-xl text-cyan-50">pink</button>

    </div>

   </div>
  )
}

export default App

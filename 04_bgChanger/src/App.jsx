import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
   <div className="w-full h-screen duration-200" style={{backgroundColor : color}}>

    <div className=" flex flex-wrap justify-center fixed bottom-10 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-slate-50 px-3 py-3 rounded-full">
      <button onClick={() => setColor('green')} className="px-7 py-2 text-cyan-50 rounded-3xl" style={{backgroundColor: "green"}}>green</button>
      <button onClick={() => setColor('red')} className="px-7 py-2 text-cyan-50 rounded-3xl" style={{backgroundColor: "red"}}>Red</button>
      <button onClick={() => setColor('yellow')} className="px-7 py-2 text-black rounded-3xl" style={{backgroundColor: "yellow"}}>Yellow</button>
      <button onClick={() => setColor('brown')} className="px-7 py-2 text-black rounded-3xl" style={{backgroundColor: "brown"}}>Brown</button>
      <button onClick={() => setColor('aqua')} className="px-7 py-2 text-black rounded-3xl" style={{backgroundColor: "aqua"}}>Aqua</button>
      <button onClick={() => setColor('pink')} className="px-7 py-2 text-black rounded-3xl" style={{backgroundColor: "pink"}}>Pink</button>
      </div>
    </div>

   </div>
  )
}

export default App

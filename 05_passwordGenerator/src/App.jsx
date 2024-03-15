import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")

  //UseRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed){
      str += "0123456789";
    }
    if(charAllowed){
      str += "~!@#$%^&*()_-+={[}]|\:;<,>.?/"
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyToBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 101);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=>{
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
     <div className=' bg-slate-900 max-w-4xl mx-auto shadow-md rounded-md text-orange-400  px-4 py-4'>
        <h2 className='text-white my-3'>Password Generator</h2>

        <div className=' flex justify-between'>
          <div className='w-4/5'><input type="text" value={password} className=' outline-none w-full py-1 px-3 rounded-md' placeholder='Password' readOnly ref={passwordRef}/>
          </div>
          <button onClick={copyToBoard} className=' bg-blue-500 text-black px-3 py-1 w-2/12 rounded-md text-center'>
            copy
          </button>
        </div>

        <div className='flex gap-5 text-sm my-3'>
          <div className='flex text-center gap-1'>
            <input type="range" min={6} max={100} value={length} className=' cursor-pointer' onChange={(e) => {setLength(e.target.value)}} />
            <label>Length {length}</label>
          </div>

          <div className='flex gap-2'>
            <div className='flex gap-1'>
              <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' onChange={() => {setNumberAllowed((prev) => !prev)}}/>
              <label htmlFor='numberInput'>Numbers</label>
            </div>

            <div className='flex gap-1'>
              <input type="checkbox" defaultChecked={charAllowed} id='charInput' onChange={() => {setCharAllowed((prev) => !prev)}}/>
              <label htmlFor='charInput'>Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

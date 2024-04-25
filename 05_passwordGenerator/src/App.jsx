import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [Password, setPassword] = useState()

  //useRef()
  const reference = useRef(null)

  const copyToClipboard = useCallback(() => {
    reference.current?.select()
    // reference.current?.setSelectionRange(0, 5)
    window.navigator.clipboard.writeText(Password)
  }, [Password])

  //useCallback(fn, dependicies) ---> syntax
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(number) str+= "0123456789"
    if(character) str+= "~!@#$%^&*()-_+={}[]|;'<>,.?/"

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

      setPassword(pass)
    }
  }, [length, number, character, setPassword])

  //useEffect()
  useEffect(() => {
    passwordGenerator()
  }, [length, number, character, passwordGenerator])

  return (
    
    <>
      <div className='main w-full h-screen flex justify-center items-center'>
        <div className='box px-4 py-4 rounded-xl bg-slate-700 min-w-96'>
          <h2 className='text-center text-2xl text-white mb-4'>Password Generator</h2>
          <div>
            <input type="text" value={Password} placeholder='Password' className='px-2 py-2 rounded w-3/4' ref={reference} />
            <button onClick={copyToClipboard} className='bg-blue-500 font-semibold tex px-2 py-2  rounded w-1/4'>Copy</button>
          </div>

          <div className='flex items-center mt-4 gap-2 text-white'>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e) => setLength(e.target.value)}/>
            <label>Length: {length},</label>

            <input type="checkbox" defaultChecked={number} id='numberSelect' onChange={() => setNumber((prev) => !prev)} />
            <label htmlFor="numberSelect">Numbers,</label>

            <input type="checkbox" defaultChecked={character} id='characterSelect' onChange={() => setCharacter((prev) => !prev)} />
            <label htmlFor="characterSelect">characters,</label>
          </div>
        </div>
      </div>
    </> 

  )
}

export default App

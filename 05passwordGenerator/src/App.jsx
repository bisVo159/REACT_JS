import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState,useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [charAllowed,setCharAllowed]=useState(false)
  const [password,setPassword]=useState("");


  // useRef hook
  const passwordRef=useRef(null);

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstwxyz"

    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&~`?"

    for (let i = 1; i <=length; i++) {
      let char=Math.floor(Math.random() * str.length)
      pass+=str.charAt(char);
    }

    setPassword(pass)
  },
    [length,numberAllowed,charAllowed,setPassword])

    const copyPasswordToClipboard=useCallback(()=>{
      passwordRef.current?.select()
      // passwordRef.current?.selectionRange(0,3)
        window.navigator.clipboard.writeText(password);
    },[password])

    useEffect(()=>{
      passwordGenerator()
    },
    [length, numberAllowed, charAllowed])

  return (
    <div className='w-full max-w-md mx-auto shadow-md 
    rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-2xl text-white text-center my-3'>PassWord Generator</h1>
      <div className="flex  shadow rounded-lg overflow-hidden mb-4">
        <input type="text" 
        value={password} 
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordRef}
        />
        <button
        className='outline-none bg-blue-700 text-white px-3 py-0.5 hover:bg-blue-800 hover:text-yellow-100 shrink-0'
        onClick={copyPasswordToClipboard}
        >Copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
            <input
            type='range'
            min={1}
            max={50}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>setLength(Number(e.target.value))}
            />
            <label>Length: {length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked={numberAllowed}
          id='"numberInput'
          onChange={()=>{
            setNumberAllowed((prev)=>!prev)
          }}
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked={charAllowed}
          id='"charInput'
          onChange={()=>{
            setCharAllowed((prev)=>!prev)
          }}
          />
          <label htmlFor='charInput'>Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App

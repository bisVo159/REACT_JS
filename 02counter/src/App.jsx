import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    let [counter, setCounter] = useState(15)

    const addValue=()=>{
      // setCounter(Math.min(20,counter+1))
      setCounter(counter+1) //16
      setCounter(counter+1) //16
      setCounter(counter+1) //16
      setCounter(counter+1) //16  
      // all same as useState send all update in a batch therefore all update same counter

      setCounter((counter)=>counter+1) 
      setCounter((counter)=>counter+1) 
      setCounter((counter)=>counter+1) 
      setCounter((counter)=>counter+1) 
      // this is promise like function so it will wait until previous finish then execute next one
      // counter=19 
      console.log("value Added ",counter);
    }
    const removeValue=()=>{
      setCounter(Math.max(0,counter-1))
    }
  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter value: {counter}</h2>

    <button
    onClick={addValue}
    >Add Value</button>
    <button
    onClick={removeValue}
    >Decrease Value</button>
    {/* once read react fibre from github */}
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj={
    userName:"Anik",
    collage:"IEM"
  }

  let newArr=[1,2,3]

  return (
    <>
      <h1 className='text-red-900 bg-green-400 rounded-xl p-3 mb-2'>Tailwind test!</h1>

      {/* <Card channel="chai aur code" someObj={myObj} myArr={newArr}/> */}
      <Card userName="anik" btnText= "Click me!" />
      <Card userName="ayan"/>
    </>
  )
}

export default App

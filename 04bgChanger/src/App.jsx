import { useState } from "react"


function App() {
  const [color,setColor]=useState("bg-black")

  return (
      <div className={`w-full h-screen duration-200 ${color}`}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-2 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg
           bg-white px-3 py-2 rounded-3xl">
            <button 
            className={`outline-none px-4 py-1 rounded-full
             text-white shadow-lg bg-red-500`}
            onClick={()=> setColor('bg-red-500')}>Red
            </button>
            <button 
            className={`outline-none px-4 py-1 rounded-full
             text-white shadow-lg bg-green-500`}
            onClick={()=> setColor('bg-green-500')}>Green
            </button>
            <button 
            className={`outline-none px-4 py-1 rounded-full
             text-white shadow-lg bg-blue-500`}
            onClick={()=> setColor('bg-blue-500')}>Blue
            </button>
            <button 
            className={`outline-none px-4 py-1 rounded-full
             text-white shadow-lg bg-black`}
            onClick={()=> setColor('bg-black')}>Black
            </button>
            <button 
            className={`outline-none px-4 py-1 rounded-full
             text-white shadow-lg bg-cyan-500`}
            onClick={()=> setColor('bg-cyan-500')}>Cyan
            </button>
           </div>
        </div>
      </div>
  )
}

export default App

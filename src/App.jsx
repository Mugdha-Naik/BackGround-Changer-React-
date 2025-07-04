import React from 'react'
import { useState } from 'react'

const App = () => {
  const [color, setColor] = useState("olive")
  return (
    <div className='w-full h-screen duration-200' 
    style={{backgroundColor: color}}
    
    > 
        <div className='fixed flex flex-wrap bottom-12 inset-x-0 px-2  justify-center'>
            <div className='shadow-xl flex flex-wrap justify-center gap-3 rounded-3xl px-3 py-2 bg-white '>

                <button onClick={() => {setColor("red")}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
                style={{backgroundColor: "red"}}>
                  Red
                </button>
                <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
                style={{backgroundColor: "green"}}>
                  Green
                </button>
                <button onClick={() => setColor("blue")}className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
                style={{backgroundColor: "blue"}}>
                  Blue
                </button>
                <button onClick={() => setColor("pink")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
                style={{backgroundColor: "pink"}}>
                  Pink
                </button>
                <button onClick={() => setColor("gray")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
                style={{backgroundColor: "gray"}}>
                  Gray
                </button>
                <button onClick={() => setColor("black")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
                style={{backgroundColor: "black"}}>
                  Black
                </button>
                <button onClick={() => setColor("purple")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
                style={{backgroundColor: "purple"}}>
                  Purple
                </button>
                <button onClick={() => setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
                style={{backgroundColor: "yellow"}}>
                  Yellow
                </button>
                <button onClick={() => setColor("orange")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
                style={{backgroundColor: "orange"}}>
                  Lavender
                </button>
                <button onClick={() => setColor("white")} className='outline-none  px-4 py-1 rounded-full text-black shadow-lg'
                style={{backgroundColor: "white"}}>
                  white
                </button>
            </div>
            
        </div>
    </div>
  )
}

export default App
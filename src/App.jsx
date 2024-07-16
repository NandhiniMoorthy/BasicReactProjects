import { useState } from 'react'

import './App.css'

function App() {
  const [color,setColor] = useState('olive')

 /* function changeColor(color) {
    setColor(color)
  }*/



  return (
   <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-5 bg-white px-3 py-2 rounded-3xl'>
          <button 
          onClick={() => setColor('red')}
          className='outline-none px-4 py-1 w-5 h-5 rounded-full text-black shadow-lg'
          style={{backgroundColor:'red'}}
          ></button>
          <button 
          onClick={() => setColor('blue')}
          className='outline-none px-4 py-1 w-5 h-5 rounded-full text-black shadow-lg'
          style={{backgroundColor:'blue'}}
          ></button>
          <button 
          onClick={() => setColor('orange')}
          className='outline-none px-4 py-1 w-5 h-5 rounded-full text-black shadow-lg'
          style={{backgroundColor:'orange'}}
          ></button>
          <button 
          onClick={() => setColor('purple')}
          className='outline-none px-4 py-1 w-5 h-5 rounded-full text-black shadow-lg'
          style={{backgroundColor:'purple'}}
          ></button>
        </div>
      </div>
   </div>
  )
}

export default App

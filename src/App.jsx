import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  
  const [count, setCount] = useState(0)
  return (
    <>
    <div className='bg-white min-h-screen flex flex-col items-center justify-center font-sans gap-5 p-4'>
      <div className='bg-slate-200 w-[800px] flex flex-col items-center justify-center gap-3 h-[700px] p-4 rounded-3xl text-center shadow-md'>
        <h1 className="text-3xl font-bold"> Welcome to CIC's Personality Test! </h1>
        <h3>Get to know how good are you with children</h3>
        <div>
          <button className=' max-[300px]: bg-purple-600 text-white py-2 px-4 rounded-lg'>
            Start Now</button>

        </div>



      </div>
        

    </div>
      
    
    </>
  )
}

export default App

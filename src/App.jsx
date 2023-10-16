import { useState } from 'react'
import './App.css'
import Questionnaire from './component/questionare.jsx'; // Import the Questionnaire component

function App() {
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);

  const handleClick = () => {
    setShowQuestionnaire(true);
  };

  return (
    <>
      <div className='bg-white min-h-screen flex flex-col items-center justify-center font-sans gap-5 p-4'>
        <div className='bg-slate-200 min-[700px]:w-2/3 flex flex-col items-center justify-center gap-3 h-[700px] p-4 rounded-3xl text-center shadow-md'>
            {!showQuestionnaire ? (
              <div className='flex flex-col gap-5'>
                <h1 className="text-3xl font-bold"> Welcome to CIC's Personality Test! </h1>
                <h3>Get to know how good are you with children</h3>
                <div>
                  <button onClick={handleClick} className=' max-[300px]: bg-purple-600 text-white py-2 px-4 rounded-lg'>
                    Start Now
                  </button>
                </div>
              </div>
              ) : (
              <Questionnaire />
              )}
        </div>
      </div>
    </>
  )
}

export default App

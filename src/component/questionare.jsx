import { useState } from 'react';
import { questions } from './questions';
import axios from 'axios';


function Questionnaire({ question, language }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [totalScore, setTotalScore] = useState(0);

  const handleAnswer = (score) => {
    setAnswers([...answers, score]);
    setTotalScore(totalScore + score);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleEmailInput = (event) => {
    setEmail(event.target.value);
  };
  const handleNameInput = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = async (e) => {
    const Name = e.target[0].value;
    const gender = e.target[1].value;
    const doB = e.target[2].value;
    const email = e.target[3].value;
    const reqBody = { Name, gender, doB, email, totalScore };
    console.log(e.target)
    debugger
    try {
      const res = await axios.post("http://localhost:3000/submission", reqBody)
      alert(`your score is: ${totalScore}`)
    } catch (error) {
      console.error(error);
      alert(error.response.data.message)
      
    }
  };


  if (currentQuestionIndex >= questions.length) {
    return (
      <div className='flex flex-col items-center '>
        <h2 className='text-3xl font-bold py-3 my-3'>Enter your details to see your total score:</h2>
        <form action="" onSubmit={(event) => handleSubmit(event)} className='flex flex-col gap-2'>
          {/* name */}
            <input placeholder='Name' className=' p-2 h-10 rounded-lg w-60' type="Name" value={Name} name='Name' id='Name' onChange={handleNameInput} />
            {/* Gender */}
                <select id="gender" className='h-10 rounded-lg' name="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                </select>
            {/* date of birth */}
            <label htmlFor="DoB">Date of Birth</label>
            <input className=' h-10 rounded-lg w-60' name='doB' id='doB' type="date" min="1960-01-01" max="2010-01-01" />
            {/* email */}
            <input placeholder='Email' className=' p-2 h-10 rounded-lg w-60' type="email" value={email} name='email' id='email' onChange={handleEmailInput} />

            <button className='max-[300px]: bg-purple-600 shadow-lg text-white py-2 px-4 rounded-lg m-3' type='submit'>Submit</button>

        </form>
      </div>
    );
  }

  return (
    <div className='flex flex-col gap-2'>
    <h3>{currentQuestionIndex+1}/{questions.length}</h3>
      <h2 className='text-3xl font-bold py-3 mb-4'>{language === 'en' ? questions[currentQuestionIndex].question : questions[currentQuestionIndex].translation}</h2>
      {questions[currentQuestionIndex].options.map((option, index) => (
        <button 
        className='
          max-[300px]: bg-purple-600
          text-white
          shadow-lg
          py-2 px-4 
           hover:bg-purple-900
          rounded-lg' 
    
         key={index} onClick={() => handleAnswer(questions[currentQuestionIndex].scores[index])}>
          {language === 'en' ? option : questions[currentQuestionIndex].translationOptions[index]}
        </button>
      ))}
    </div>
  );
}

export default Questionnaire;

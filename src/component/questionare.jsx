import { useState } from 'react';
import { questions } from './questions';


function Questionnaire() {
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

  const handleSubmit = () => {
    // Here you can handle the submission of the email and score
    // For example, you might send them to a server
    console.log("Name:", Name);
    console.log("Email:", email);
    console.log("Total Score:", totalScore);
  };

  if (currentQuestionIndex >= questions.length) {
    return (
      <div className='flex flex-col items-center '>
        <h2 className='text-3xl font-bold py-3 my-3'>Enter your details to see your total score:</h2>
        <form action="" method="post" className='flex flex-col gap-2'>
            <input placeholder=' Name' className=' h-10 rounded-lg w-60' type="Name" value={Name} onChange={handleNameInput} />
                <select id="gender" className='h-10 rounded-lg' name="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                </select>
            <label htmlFor="DoB">Date of Birth</label>
            <input className=' h-10 rounded-lg w-60' type="date" min="1960-01-01" max="2010-01-01" />
            <input placeholder=' Email' className=' h-10 rounded-lg w-60' type="email" value={email} onChange={handleEmailInput} />
            <button className='max-[300px]: bg-purple-600 text-white py-2 px-4 rounded-lg m-3' onClick={handleSubmit}>Submit</button>

        </form>
      </div>
    );
  }

  return (
    <div className='flex flex-col gap-2'>
      <h2 className='text-3xl font-bold py-3'>{questions[currentQuestionIndex].question}</h2>
      {questions[currentQuestionIndex].options.map((option, index) => (
        <button className='max-[300px]: bg-purple-600 text-white py-2 px-4 rounded-lg' key={index} onClick={() => handleAnswer(questions[currentQuestionIndex].scores[index])}>
          {option}
        </button>
      ))}
    </div>
  );
}

export default Questionnaire;

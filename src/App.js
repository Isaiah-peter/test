import Header from './component/header';
import './App.css';
import { useState } from 'react';
import QuestionSelector from './component/questionSelector'


function App() {
  const questions = [
    {
      questionText: 'What is your email?',
      type: 'INPUT',
      answerOption: 'email'
    },
    {
      questionText: 'What is the capital of France?',
      type: 'MULTIPLE_ANSWER',
      answerOptions: [
        { answerText: 'New York' },
        { answerText: 'London' },
        { answerText: 'Paris' },
        { answerText: 'Dublin' },
      ],
    },
    {
      questionText: 'What is your name?',
      type: 'INPUT',
      answerOption: 'text'
    },
    {
      questionText: 'What is the capital of France?',
      type: 'SINGLE_ANSWER',
      answerOptions: [
        { answerText: 'Apple' },
        { answerText: 'Intel' },
        { answerText: 'Amazon' },
        { answerText: 'Microsoft' },
      ],
    },
  ]

  

 

  const [currentQuestion, setCurrentQuestion] = useState(0)


  const nextQuestion = currentQuestion + 1
  const nextQuest = () => {
    
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    }
  }


  

  return (
    <div className='App'>
      <div className='question-section'>
        <Header />

        <div className='question-text'><QuestionSelector question={questions[currentQuestion]} /></div>

        <button className={ nextQuestion === questions.length ? "endButton":'nextButton'} onClick={nextQuest} >
          {nextQuestion === questions.length ? "nice job ✓":'continue'}
          </button>
      </div>
    </div>
  );
}

export default App;

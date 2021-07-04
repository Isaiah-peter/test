import Header from './component/header';
import './App.css';
import { useState } from 'react';
import Input from './component/input'
import Multiple from './component/multiple'
import Single from './component/single'

function App() {
  const questions = [
    {
      questionText: 'What is your email?',
      type: 'INPUT'
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

  

  const component = [
    {
      page: (<Input question={questions} />)
    },
    {
      page: (<Multiple question={questions} />)
    },
    {
      page: (<Single question={questions} />)
    },
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0)



  const nextQuest = () => {
    const nextQuestion = currentQuestion + 1
    if (nextQuestion < component.length) {
      setCurrentQuestion(nextQuestion)
    }
  }


  

  return (
    <div className='App'>
      <div className='question-section'>
        <Header />

        <div className='question-text'>{component[currentQuestion].page}</div>

        <button className='nextButton' onClick={nextQuest}>continue</button>
      </div>
    </div>
  );
}

export default App;

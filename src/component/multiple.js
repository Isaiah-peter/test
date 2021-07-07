
const Mutilpe = ({ question }) => {

  const addAnswer = () =>{
    let mul = document.getElementById('multiple')
    mul.classList.add('green')
  }

  return (
    <div>
      <div className='question-text'>{question.questionText}</div>
      <div className='answer-section'>
        {question.answerOptions.map(({ answerText }) => {
          return (
            <button id='multiple' onClick={addAnswer} className='answer-button' key={answerText}>{answerText}</button>
          )
        })}
      </div>
    </div>
  )
}

export default Mutilpe
const Single = ({ question }) => {
  
  return (
    <div>
      <div >
        <div className='question-text'>{question.questionText}</div>
      </div>
      <div className='answer-section'>
        {question.answerOptions.map(({ answerText }) => {
          return (
            <button className='answer-button' key={answerText[0]}>{answerText}</button>
          )
        })}
      </div>

    </div>
  )
}

export default Single
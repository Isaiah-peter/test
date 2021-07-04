const Single = ({question}) => {
    const renderQuestion = question.map((quest) => {
        if (quest.type === "SINGLE_ANSWER") {
            return (
                <div key={quest.type}>
                    <div >
                        <div className='question-text'>{quest.questionText}</div>
                    </div>
                    <div className='answer-section'>
                        {quest.answerOptions.map(({ answerText}) => {
                            return (
                                <button key={answerText[0]}>{answerText}</button>
                            )
                        })}
                    </div>
                </div>
            )
        }
    })
    return (
        <div>{renderQuestion}</div>
    )
}

export default Single
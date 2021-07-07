import React from "react"
import Input from './input'
import Multiple from './multiple'
import Single from './single'

const QuestionSelector = ({question}) => {
 
    return (
        <>
         {question.type === 'SINGLE_ANSWER' && (<Single question={question} />)}
         {question.type ==='MULTIPLE_ANSWER' && (<Multiple question={question} />)}
         {question.type === 'INPUT' && (<Input question={question} />)}
        </>
    )
}

export default QuestionSelector
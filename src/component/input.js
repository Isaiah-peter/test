import { useState } from "react"


const InputField = ({ question }) => {

    const [text, setText] = useState('')
    
    
 
    
    
   return(
     <div >
        <h2 className='question'  key={question.type} required >{question.questionText}</h2>
        <input onChange={(e)=>{setText(e.target.value)}} type={question.answerOption}
      value={text} placeholder={question.questionText}
      required="required"  className='input-field' />
     </div>
   )
}

export default InputField
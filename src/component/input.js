import { useState } from "react"


const InputField = ({ question }) => {

    const [text, setText] = useState('')
    
    const quest = question.map((quest)=>{
        
       if(quest.type === 'INPUT'){
         return(
           <h2 className='question'  key={quest.type} required >{quest.questionText}</h2>
         )
       }
    })
 
    
    
   return(
     <div >
        {quest}
        <input onChange={(e)=>{setText(e.target.value)}} type='email'
      value={text} placeholder='type your email' 
      required="required"  className='input-field' />
     </div>
   )
}

export default InputField
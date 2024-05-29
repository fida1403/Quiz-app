import { Alert, Button } from '@mui/material'
import React, { useState } from 'react'
import './Question.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const Question = ({currentQuestion, setCurrentQuestion, questions, options, correct, score, setScore}) => {
  
  const [selected, setSelected] = useState()
  const [error, setError] = useState(false)

  const history=useHistory()

  const handleselect = (i) =>{
    if(selected===i && selected===correct){
        return "select"
    }else if(selected === i && selected !== correct){
        return "wrong"
    }else if(i===correct){
        return "select"
    }
  }

  const handleCheck = (i) => {
    setSelected(i)
    if(i===correct){
      setScore(score+1)
    }
    setError(false)
  } 
  
  const handleNext = () => {
    if(currentQuestion > 8){
      history.push("/result")
    }else if(selected){
      setCurrentQuestion(currentQuestion+1)
      setSelected()
    }else{
      setError(true)
    }
  }

    return (
    <div className='question'>
      <h1>Question {currentQuestion + 1}</h1>
      <div className='singleQuestion'>
        <h2>{questions[currentQuestion].question}</h2>
        {error && <Alert variant="filled" severity="error" style={{marginBottom: 10, marginTop: 15}}>Please choose one option</Alert>}
        <div className='options'>
            {
                options && options.map((i) => 
                    <button onClick={()=>handleCheck(i)} className={`singleoption ${selected && handleselect(i)}`} key={i} disabled={selected}>{i}</button>
                )
            }
        </div>
        <div className='controls'>
          <Button variant='contained' color='secondary' size='large' style={{ width: 185}} href='/'>Quit</Button>
          <Button variant='contained' color='primary' size='large' style={{width: 185}} onClick={handleNext}>Next Question</Button>
        </div>
      </div>
    </div>
  )
}

export default Question

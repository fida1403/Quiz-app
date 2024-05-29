import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import './Result.css'


const Result = ({name, score}) => {

  const history = useHistory()

  useEffect(()=>{
    if(!name){
      history.push("/")
    }
  }, [name, history])


  return (
    <div className="result">
      <span style={{fontSize: 45, }}>FINAL SCORE : {score}</span>
      <Button variant='contained' size='large' color='secondary' style={{ alignSelf: "center", marginTop: 20}} href='/'>Go To Homepage</Button>
    </div>
  )
}

export default Result

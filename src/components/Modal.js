import React, { useState } from 'react'
import QuizList from './QuizList'
import './Modal.css'

const Modal = (props) => {
  const [gameMode, setGameMode ] = useState("Select game mode")
  const [isLoading, setIsLoading] = useState(false)

  const changeGameMode = (mode) => {
    setIsLoading(true)
    setGameMode(mode)
  }

  let quiz;
  
  if (gameMode !== "Select game mode") {
    quiz = <h3>Loading {gameMode} of... quiz...</h3>
  } else {
    quiz = <h3>{gameMode}</h3>
  }

  return(
    <div className="modal">
      <img
        className="modal__img"
        src="quiz_starting.svg"
        alt="A man with a world on the side"
        width="162px"
      />
      {quiz}
      <QuizList changeGameMode={changeGameMode}/>
    </div>
  )
}

export default Modal

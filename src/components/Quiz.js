import React from 'react'
import CapitalQuiz from './CapitalQiz'
import FlagQuiz from './FlagQuiz'
import IsLoading from './IsLoading'

import './Quiz.css'

function Quiz ({ gameMode, isLoading, quiz}) {

  if (isLoading) {
    return <IsLoading mode={gameMode} isLoading={isLoading}/>
  }
  if (gameMode === "capital") {
    return <CapitalQuiz capital={quiz.capital}/>
  }
  if (gameMode === "flag") {
    return (
      <FlagQuiz country={quiz.name} flag={quiz.flagUrl} />
    )
  }

  return <h3 className="quiz">Select the game mode</h3>
}

export default Quiz

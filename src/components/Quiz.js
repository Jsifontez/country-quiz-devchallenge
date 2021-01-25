import React from 'react'

function Quiz ({ gameMode, isLoading, quiz }) {

  return(
    <h3>
      {gameMode === ""
        ? `Select game mode`
        : (isLoading
            ? `Loading ${gameMode} of... quiz...`
            : `${quiz.capital} is the capital of`
          )
      }
    </h3>
  )
}

export default Quiz

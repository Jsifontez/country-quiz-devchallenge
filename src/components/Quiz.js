import React from 'react'

function Quiz ({ gameMode, isLoading, quiz, gameOver }) {
  // I need refactor quizText in two components
  // like the first example of https://reactjs.org/docs/conditional-rendering.html
  let quizText

  if (gameOver && gameMode === 'Results') {
    quizText = <h3 style={{textAlign:'center'}}>
      {gameMode}
    </h3>
  } else {
    quizText = <h3>
      {gameMode === ""
      ? `Select game mode`
      : (isLoading
          ? `Loading ${gameMode} of... quiz...`
          : `${quiz.capital} is the capital of`
        )
      }
    </h3>
  }

  return quizText
}

export default Quiz

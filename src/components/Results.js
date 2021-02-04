import React from 'react'
import results from './Results.module.css'

const Results = (props) => {
  const handleTryAgain = () => {
    props.tryAgain()
  }

  return(
    <div className={results.modal}>
      <img src="winners.svg" alt="two people celebrating around a winner cup"/>
      <h2 className={results.result}>Results</h2>
      <p className={results.text}>
        You got <span>{props.answers}</span> correct answers
      </p>
      <button className={results.button} onClick={handleTryAgain}>Try again</button>
    </div>
  )
}

export default Results

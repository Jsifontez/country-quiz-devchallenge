import React, { useState, useEffect } from 'react'
import QuizList from './QuizList'
import Quiz from './Quiz'
import './Modal.css'
import Results from './Results'
import useFetch from '../utils/useFetch'

const Modal = (props) => {
  const [gameMode, setGameMode ] = useState("")
  const { data, options, isLoading, setIsLoading, reset } = useFetch(false)
  const [showNextQuiz, setShowNextQuiz] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [isClickeable, setIsClickeable] = useState(true)
  const [timeoutId, setTimeoutId] = useState('')

  useEffect( () => {
    if (options.length < 4 || data.capital === "") {
      setIsLoading(false)
    }
  }, [options, data])

  const changeGameMode = (mode) => {
    setIsLoading(true)
    setGameMode(mode)
  }

  // call a new quiz after 2.5s
  const callNewQuiz = () => {
    setTimeoutId(window.setTimeout(() => {
      fetchNewQuiz()
    }, 2500))
  }

  // a function to handle de correct choice in options
  const handleChoice = (choice, el) => {
    setIsClickeable(false)

    if(choice === data.name) {
      el.classList.add("answer--correct")

      window.setTimeout( () => {

        setCorrectAnswers(correctAnswers + 1)
        setShowNextQuiz(true)
        callNewQuiz()

      }, 1000)

      return
    }

    // We need iterate over all list elements
    const listItems = el.parentElement.children
    let correctAnswer

    for (let i = 0; i < 4; i++) {
      if (listItems[i].innerText === data.name) {
        correctAnswer = listItems[i]
      }
    }

    el.classList.add("answer--wrong")
    correctAnswer.classList.add("answer--delay")


    window.setTimeout( () => {
      setGameOver(true)
      setGameMode("Results")
    }, 1400)
  }

  const fetchNewQuiz = () => {
    window.clearTimeout(timeoutId)
    setIsClickeable(true)
    setIsLoading(true)
    setShowNextQuiz(false)
  }

  const tryAgain = () => {
    reset()
    setGameOver(false)
    setGameMode("")
    setCorrectAnswers(0)
    setIsClickeable(true)
  }

  if (gameOver) {
    return <Results tryAgain={tryAgain} answers={correctAnswers} />
  }

  return (
    <div className={`modal ${gameMode === "flag" ? "moda--flag": ""}`}>
      <img
        className="modal__img"
        src="quiz_starting.svg"
        alt="A man with a world on the side"
        width="162px"
      />
      <Quiz
        quiz={data}
        gameOver={gameOver}
        gameMode={gameMode}
        isLoading={isLoading}
      />

      <QuizList
        loading={isLoading}
        changeGameMode={changeGameMode}
        items={options}
        countryChoice={handleChoice}
        answer={data.name}
        fetchNewQuiz={fetchNewQuiz}
        isClickeable={isClickeable}
      />
      {showNextQuiz &&
        <button className="modal__button" onClick={fetchNewQuiz}>Next</button>
      }
    </div>
  )
}

export default Modal

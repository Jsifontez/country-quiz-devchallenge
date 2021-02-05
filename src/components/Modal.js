import React, { useState, useEffect } from 'react'
import QuizList from './QuizList'
import Quiz from './Quiz'
import './Modal.css'
import randomCountry from '../utils/randomCountry'
import Results from './Results'

const Modal = (props) => {
  const [gameMode, setGameMode ] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [query, setQuery] = useState(false)
  const [data, setData] = useState({})
  const [options, setOptions] = useState([])
  const [showNextQuiz, setShowNextQuiz] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [correctAnswers, setCorrectAnswers] = useState(0)

  useEffect(() => {
    if (query === false) return

    const fetchData = async () => {
      const CODES = randomCountry()
      const URL = `https://restcountries.eu/rest/v2/alpha?codes=${CODES[0]};${CODES[1]};${CODES[2]};${CODES[3]}`
      const res = await fetch(URL)
      const countries = await res.json()

      const wrongCountries = []
      for (let i = 0; i < countries.length; i++) {
        wrongCountries.push(countries[i].name)
      }

      setData({name: countries[0].name, capital: countries[0].capital, flagUrl: countries[0].flag})
      setOptions([...wrongCountries])
      setQuery(false)
      setIsLoading(false)
    }

    fetchData()
  }, [query])

  const changeGameMode = (mode) => {
    setIsLoading(true)
    setGameMode(mode)
    setQuery(true)
  }

  // a function to handle de correct choice in options
  const handleChoice = (choice, el) => {

    if(choice === data.name) {
      el.classList.add("answer--correct")
      setCorrectAnswers(correctAnswers + 1)
      setShowNextQuiz(true)
      return
    } else (
      el.classList.add("answer--wrong")
    )

    // I need iterate over all list elements
    const listItems = el.parentElement.children

    for (let i = 0; i < listItems.length; i++) {
      if (listItems[i].innerHTML === data.name) {
        listItems[i].classList.add("answer--correct")
      }
    }
    setGameOver(true)
    setGameMode("Results")
  }

  const fetchNewQuiz = () => {
    setIsLoading(true)
    setData({})
    setOptions([])
    setQuery(true)
    setShowNextQuiz(false)
  }

  const tryAgain = () => {
    setData({})
    setOptions([])
    setGameOver(false)
    setGameMode("")
    setCorrectAnswers(0)
  }

  if (gameOver) {
    return <Results tryAgain={tryAgain} answers={correctAnswers} />
  }

  return (
    <div className="modal">
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
        changeGameMode={changeGameMode}
        items={options}
        countryChoice={handleChoice}
        answer={data.name}
        fetchNewQuiz={fetchNewQuiz}
        showNext={showNextQuiz}
      />
    </div>
  )
}

export default Modal

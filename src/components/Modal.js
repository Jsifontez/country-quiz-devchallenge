import React, { useState, useEffect } from 'react'
import QuizList from './QuizList'
import './Modal.css'
import randomCountry from '../utils/randomCountry'

const Modal = (props) => {
  const [gameMode, setGameMode ] = useState("Select game mode")
  const [isLoading, setIsLoading] = useState(false)
  const [query, setQuery] = useState(false)
  const [data, setData] = useState({name: '', capital: ''})

  useEffect(() => {
    if (query === false) return
    const fetchData = async () => {
      const countryCode = randomCountry()
      const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`)
      const country = await res.json()

      setData({name: country.name, capital: country.capital})
      setQuery(false)
    }

    fetchData()
  }, [query])

  const changeGameMode = (mode) => {
    setIsLoading(true)
    setGameMode(mode)
    setQuery(true)
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

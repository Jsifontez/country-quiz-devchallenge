import React, { useState, useEffect } from 'react'
import QuizList from './QuizList'
import Quiz from './Quiz'
import './Modal.css'
import randomCountry from '../utils/randomCountry'

const Modal = (props) => {
  const [gameMode, setGameMode ] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [query, setQuery] = useState(false)
  const [data, setData] = useState({name: '', capital: ''})
  const [options, setOptions] = useState([])

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

      setData({name: countries[0].name, capital: countries[0].capital})
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

  return(
    <div className="modal">
      <img
        className="modal__img"
        src="quiz_starting.svg"
        alt="A man with a world on the side"
        width="162px"
      />
      <Quiz gameMode={gameMode} isLoading={isLoading} quiz={data} />
      <QuizList changeGameMode={changeGameMode}/>
    </div>
  )
}

export default Modal

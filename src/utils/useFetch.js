import { useState, useEffect } from 'react'
import randomCountry from './randomCountry'
import shuffle from './shuffle'

const useFetch = (loading) => {
  const [data, setData] = useState({})
  const [options, setOptions] = useState([])
  const [isLoading, setIsLoading] = useState(loading)

  const reset = () => {
    setData({})
    setOptions([])
  }

  useEffect(() => {
    if (isLoading === false) return

    const fetchData = async () => {
      const CODES = randomCountry()
      const URL = `https://restcountries.eu/rest/v2/alpha?codes=${CODES[0]};${CODES[1]};${CODES[2]};${CODES[3]}`
      const res = await fetch(URL)
      const countries = await res.json()

      const wrongCountries = []
      for (let i = 0; i < countries.length; i++) {
        wrongCountries.push(countries[i].name)
      }
      shuffle(wrongCountries)
      setData({name: countries[0].name, capital: countries[0].capital, flagUrl: countries[0].flag})
      setOptions([...wrongCountries])
      setIsLoading(false)

      // refetching if capital is empty
      if ('capital' in data === "") {
        fetchData()
      }
    }

    fetchData()
  }, [isLoading])

  return { data, options, isLoading, setIsLoading, reset }
}

export default useFetch

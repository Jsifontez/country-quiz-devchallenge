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
      const URL = `https://restcountries.com/v3.1/alpha?codes=${CODES.join(',')}`
      const res = await fetch(URL)
      const countries = await res.json()

      const wrongCountries = []
      for (let i = 0; i < countries.length; i++) {
        wrongCountries.push(countries[i].name.common)
      }
      shuffle(wrongCountries)
      setData({name: countries[1].name.common, capital: countries[1].capital, flagUrl: countries[1].flag})
      setOptions([...wrongCountries])

      setIsLoading(false)
    }

    fetchData()
  }, [isLoading])

  return { data, options, isLoading, setIsLoading, reset }
}

export default useFetch

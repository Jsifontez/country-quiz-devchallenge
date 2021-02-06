import React from 'react'
import './FlagQuiz.css'

const FlagQuiz = (props) => {

  return(
    <h3>
      <img className="flag-img" src={props.flag} alt={`${props.country} flag`}/>
      Which country does this flag belong to?
    </h3>
  )
}

export default FlagQuiz

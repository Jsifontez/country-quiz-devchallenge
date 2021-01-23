import React from 'react'
import ListItem from './ListItem'

import './QuizList.css'

// a city is the capital of.. or a flag belong to country..

function QuizList(props) {

  return(
    <ul className="quiz__list">
      {
        // Here goes some listing for countries
      }
      <ListItem
        text="city is the capital of..."
        changeGameMode={props.changeGameMode}
        gameMode="capital"
      />
      <ListItem
        text="flag belong to country..."
        changeGameMode={props.changeGameMode}
        gameMode="flag"
      />
    </ul>
  )
}

export default QuizList

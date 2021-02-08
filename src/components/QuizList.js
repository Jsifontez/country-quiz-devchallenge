import React from 'react'
import ListItem from './ListItem'
import Spinner from './Spinner'

import './QuizList.css'

// a city is the capital of.. or a flag belong to country..

function QuizList(props) {

  if (props.loading) {
    return <Spinner />
  }

  if(props.items.length) {
    return (
      <ul className="quiz__list">
        {props.items.map(item =>
          <ListItem
            key={item}
            text={item}
            countryChoice={props.countryChoice}
          />
        )}
      </ul>
    )
  } else {
    return(
      <ul className="quiz__list">
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
}

export default QuizList

import React from 'react'
import ListItem from './ListItem'
import Spinner from './Spinner'
import GameModeList from './GameModeList'

import './QuizList.css'

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
            isClickeable={props.isClickeable}
          />
        )}
      </ul>
    )
  }

  return (
    <GameModeList changeGameMode={props.changeGameMode}/>
  )
}

export default QuizList

import React from 'react'
import ListItem from './ListItem'

const GameModeList = (props) => {
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

export default GameModeList

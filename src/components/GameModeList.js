import React from 'react'
import GameModeItem from './GameModeItem'

const GameModeList = (props) => {
  return(
    <ul className="quiz__list">
      <GameModeItem
        text="city is the capital of..."
        changeGameMode={props.changeGameMode}
        gameMode="capital"
      />
      <GameModeItem
        text="flag belong to country..."
        changeGameMode={props.changeGameMode}
        gameMode="flag"
      />
    </ul>
  )
}

export default GameModeList

import React from 'react'

const GameModeItem = ({text, gameMode, changeGameMode}) => {
  const handleChangeMode = () => {
    changeGameMode(gameMode)
  }

  return(
    <li
      className="list__item"
      onClick={handleChangeMode}
    >
      {text}
    </li>
  )
}

export default GameModeItem

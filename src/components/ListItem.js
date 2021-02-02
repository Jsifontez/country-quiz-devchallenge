import React from 'react'
import './ListItem.css'

const ListItem = ({text, changeGameMode, gameMode, countryChoice}) => {
  const handleChangeMode = () => {
    if(changeGameMode) {
      changeGameMode(gameMode)
    }
  }
  const handleChoice = (ev) => {
    if(!changeGameMode) {
      countryChoice(text, ev.target)
    }
  }

  if(changeGameMode){
    return(
      <li
        className="list__item"
        onClick={handleChangeMode}
      >
        {text}
      </li>
    )
  } else {
    return(
      <li
        className="list__item"
        onClick={handleChoice}
      >
        {text}
      </li>
    )
  }
}

export default ListItem

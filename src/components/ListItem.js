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
        <span className="option">
          <img className="option__img"  src="check_circle_outline-white-24dp.svg" alt="rounded checked icon" />
          <img className="option__img"  src="close-black-24dp.svg" alt="X icon" />
        </span>
      </li>
    )
  }
}

export default ListItem

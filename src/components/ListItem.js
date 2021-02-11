import React from 'react'
import './ListItem.css'

const ListItem = (props) => {
  const {
    text,
    gameMode,
    changeGameMode,
    countryChoice,
    isClickeable
  } = props

  const handleChangeMode = () => {
    if(changeGameMode) {
      changeGameMode(gameMode)
    }
  }
  const handleChoice = (ev) => {
    if (!isClickeable) return
    countryChoice(text, ev.target)
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
  }

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

export default ListItem

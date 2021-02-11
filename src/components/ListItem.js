import React from 'react'
import './ListItem.css'

const ListItem = (props) => {
  const {
    text,
    countryChoice,
    isClickeable
  } = props

  const handleChoice = (ev) => {
    if (!isClickeable) return
    countryChoice(text, ev.target)
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

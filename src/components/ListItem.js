import React from 'react'
import './ListItem.css'

const ListItem = ({text, changeGameMode, gameMode}) => {
  const handleChangeMode = () => {
    changeGameMode(gameMode)
  }
  return(
    <li className="list__item" onClick={handleChangeMode}>{text}</li>
  )
}

export default ListItem

import React from 'react'
import './ListItem.css'
import { motion } from 'framer-motion'

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
    <motion.li
      className="list__item"
      onClick={handleChoice}
      initial={{ opacity: 0, x: 50}}
      animate={{ opacity: 1, x: 0}}
    >
      {text}
      <span className="option">
        <img className="option__img"  src="check_circle_outline-white-24dp.svg" alt="rounded checked icon" />
        <img className="option__img"  src="close-black-24dp.svg" alt="X icon" />
      </span>
    </motion.li>
  )
}

export default ListItem

import React from 'react'
import ListItem from './ListItem'
import Spinner from './Spinner'
import GameModeList from './GameModeList'
import { motion } from 'framer-motion'

import './QuizList.css'

function QuizList(props) {

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 1
      }
    },
    hidden: { 
      pacity: 0,
      transition: {
        when: "afterChildren"
      }
    }
  }

  if (props.loading) {
    return <Spinner />
  }

  if(props.items.length) {
    return (
      <motion.ul
        className="quiz__list"
        initial="hidden"
        animate="visible"
        variants={list}
      >
        {props.items.map(item =>
          <ListItem
            key={item}
            text={item}
            countryChoice={props.countryChoice}
            isClickeable={props.isClickeable}
          />
        )}
      </motion.ul>
    )
  }

  return (
    <GameModeList changeGameMode={props.changeGameMode}/>
  )
}

export default QuizList

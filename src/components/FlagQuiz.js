import React from 'react'
import './FlagQuiz.css'
import { motion } from "framer-motion"

const FlagQuiz = (props) => {

  return(
    <motion.h3
      className="quiz"
      initial={{x:50, opacity:0}}
      animate={{x:0, opacity:1}}
    >
      <img className="flag-img" src={props.flag} alt='Some country flag'/>
      Which country does this flag belong to?
    </motion.h3>
  )
}

export default FlagQuiz

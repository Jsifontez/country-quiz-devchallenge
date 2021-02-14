import React from 'react'
import { motion } from 'framer-motion'

function CapitalQuiz (props) {

  return (
    <motion.h3
      className="quiz"
      initial={{x:50, opacity:0}}
      animate={{x:0, opacity:1}}
      exit={{x:50, opacity:0}}
      transition={{ duration: .5}}
    >
      {props.capital} is the capital of
    </motion.h3>
  )
}

export default CapitalQuiz

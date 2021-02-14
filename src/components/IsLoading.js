import React from 'react'
import './IsLoading.css'
import { motion } from "framer-motion"

const IsLoading = (props) => {
  return (
    <motion.h3
      className={`quiz loading ${props.mode === "flag" ? "loading--flag" : ""}`}
      key={props.mode}
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
    >
      Loading {props.mode} of... quiz...
    </motion.h3>
  )
}

export default IsLoading

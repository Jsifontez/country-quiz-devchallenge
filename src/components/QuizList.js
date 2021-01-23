import React from 'react'
import ListItem from './ListItem'

import './QuizList.css'

function QuizList(props) {
  return(
    <ul className="quiz__list">
      {
        // Here goes some listing for countries
      }
      <ListItem country="Colombia" />
      <ListItem country="Argentina" />
      <ListItem country="Venezuela" />
      <ListItem country="Honduras" />
    </ul>
  )
}

export default QuizList

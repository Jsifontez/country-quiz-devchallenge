import React from 'react'
import './ListItem.css'

const ListItem = ({country}) => {
  return(
    <li className="list__item">{country}</li>
  )
}

export default ListItem

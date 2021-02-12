import React from 'react'
import './IsLoading.css'

const IsLoading = (props) => {
  return (
    <h3 className={`quiz loading ${props.mode === "flag" ? "loading--flag" : ""}`}>
      Loading {props.mode} of... quiz...
    </h3>
  )
}

export default IsLoading

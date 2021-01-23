import React from 'react'
import './Modal.css'

const Modal = (props) => {
  return(
    <div className="modal">
      <img
        className="modal__img"
        src="quiz_starting.svg"
        alt="A man with a world on the side"
        width="162px"
      />
      <h3>Caracas is the capital of</h3>
      <ul>
        <li>Colombia</li>
        <li>Argentina</li>
        <li>Venezuela</li>
        <li>Honduras</li>
      </ul>
    </div>
  )
}

export default Modal

import React from 'react';

export default function WinModal(props) {
  return (
    <div className="modal">
      <p className="modal-exit" onClick={props.handleCloseModal}>X</p>
      <h2>You Win!</h2>
      <img src="https://media.giphy.com/media/YfMHLC2s6okBq/giphy.gif" alt="celebration" />
    </div >
  )
}
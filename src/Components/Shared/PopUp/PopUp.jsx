import React from 'react';
import './popup.scss'

const PopUp = ({ message, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-inner">
        <h1>{message}</h1>
        <button onClick={onClose} className='close-popup-button'>Close</button>
      </div>
    </div>
  );
};

export default PopUp;

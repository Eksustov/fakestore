import React from 'react';
import './Star.css';

function Star({ filled }) {
  return (
    <span className={`star ${filled ? 'filled' : ''}`}>&#9733;</span> // ★
  );
}

export default Star;
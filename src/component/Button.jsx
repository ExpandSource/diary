import React from 'react';
import './Button.css';

function Button({ text, type, onClick }) {
  return (
    <button
      className={['Button', `Button_${type}`].join(' ')}
      // class="Button Button_positive"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;

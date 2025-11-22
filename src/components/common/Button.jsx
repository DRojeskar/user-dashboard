import React from 'react';

const Button = ({children, onClick, style, type='button'}) => {
  return (
    <button type={type} onClick={onClick} className="btn" style={style}>
      {children}
    </button>
  );
};

export default Button;

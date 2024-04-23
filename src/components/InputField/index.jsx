import React from 'react';

const Input = ({ type, value, onChange, className, placeholder, id, disabled }) => {
  return (
    <input
      type={type}
      className={className}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      id={id}
      disabled={disabled}
      
    />
  );
};

export default Input;

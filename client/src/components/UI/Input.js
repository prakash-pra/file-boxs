import React from 'react';
import'./Input.css';

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>Email</label>
      <input ref={ref} {...props.input} />
      <label htmlFor={props.input.id}>Password</label>
      <input ref={ref} {...props.input} />
    </div>
  );
};

export default Input;

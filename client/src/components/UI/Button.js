import './Button.css';
const Button = (props) => {
  return <button onClick={() => props.boxFormhandler(true)}>Add box</button>;
};

export default Button;

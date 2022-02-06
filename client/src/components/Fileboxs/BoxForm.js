import { useRef, useState } from 'react';
import axios from 'axios';
import Card from '../UI/Card';
import './BoxForm.css';

const BoxForm = (props) => {
  const [isSuccess, setIsSuccess] = useState(false);
  // const [isSuccessMessage, setIsSuccessMessage] = useState('');

  const nameInputRef = useRef();
  const descriptionInputRef = useRef();

  const onFormSubmitHandler = async (event) => {
    event.preventDefault();

    const box = {
      name: nameInputRef.current.value,
      description: descriptionInputRef.current.value
    };

    function hideMessage() {
      setTimeout(() => {
        setIsSuccess(false);
      }, 1000);
    }
    const closeFromFlag = false;
    try {
      await axios.post(`http://localhost:2800/createbox`, box);
      setIsSuccess(true);
      nameInputRef.current.value = '';
      descriptionInputRef.current.value = '';
      hideMessage();
      props.closeBoxFormhandler(closeFromFlag);
    } catch (err) {
      throw err;
    }
  };
  //Not useful in this case (for future reference)
  // const successMsg = (
  //   <div>
  //     {isSuccess && <p style={{ color: 'green' }}>{isSuccessMessage}</p>}
  //   </div>
  // );
  const boxForm = (
    <section className='boxForm'>
      <Card>
        <form onSubmit={onFormSubmitHandler}>
          <div className='input-container'>
            <label>Box Name </label>
            <input type='text' name='boxname' ref={nameInputRef} required />
          </div>
          <div className='input-container'>
            <label>Description</label>
            <textarea
              type='text'
              name='description'
              ref={descriptionInputRef}
              required
            />
          </div>
          <div className='button-container'>
            <button>Submit</button>
          </div>
        </form>
      </Card>
    </section>
  );

  return boxForm;
};
export default BoxForm;

import { useRef } from 'react';
import axios from 'axios';
import Card from '../UI/Card';
import './BoxForm.css';

const BoxForm = () => {
  const nameInputRef = useRef();
  const descriptionInputRef = useRef();

  const onFormSubmitHandler = async (event) => {
    event.preventDefault();

    const box = {
      name: nameInputRef.current.value,
      description: descriptionInputRef.current.value
    };
    try {
      const res = await axios.post(`http://localhost:2800/createbox`, box);
      console.log(res);
    } catch (err) {
      throw err;
    }
  };

  return (
    <section className='boxForm'>
      <Card>
        <form onSubmit={onFormSubmitHandler}>
          <div className='input-container'>
            <label>Box Name </label>
            <input type='text' name='boxname' ref={nameInputRef} required />
          </div>
          <div className='input-container'>
            <label>Description</label>
            <input
              type='text'
              name='description'
              ref={descriptionInputRef}
              required
            />
          </div>
          <div className='button-container'>
            <input type='submit' />
          </div>
        </form>
      </Card>
    </section>
  );
};
export default BoxForm;

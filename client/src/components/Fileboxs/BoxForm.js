import { useRef } from 'react';
import axios from 'axios';
import Card from '../UI/Card';
import './BoxForm.css';
import url from '../Constants/constants';
import CloseIcon from '@mui/icons-material/Close';

const BoxForm = (props) => {
  // const [isSuccess, setIsSuccess] = useState(false);
  // const [isSuccessMessage, setIsSuccessMessage] = useState('');

  const nameInputRef = useRef();
  const descriptionInputRef = useRef();

  const onFormSubmitHandler = async (event) => {
    event.preventDefault();

    const box = {
      name: nameInputRef.current.value,
      description: descriptionInputRef.current.value
    };

    const closeFromFlag = false;
    try {
      await axios.post(`${url}createbox`, box);
      nameInputRef.current.value = '';
      descriptionInputRef.current.value = '';
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
        <div className='close-button'>
          <CloseIcon onClick={() => props.closeBoxFormhandler(false)} />
        </div>
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

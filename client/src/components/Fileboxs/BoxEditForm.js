import { useRef, useEffect } from 'react';
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

  useEffect(() => {
    if (!(Object.keys(props.boxInfo).length === 0)) {
      nameInputRef.current.value = props.boxInfo.name;
      descriptionInputRef.current.value = props.boxInfo.description;
    }
  }, [props.boxInfo]);

  const onFormSubmitHandler = async (event) => {
    event.preventDefault();

    const box = {
      id: props.boxInfo._id,
      name: nameInputRef.current.value,
      description: descriptionInputRef.current.value
    };

    try {
      await axios.put(`${url}editbox`, box);
      nameInputRef.current.value = '';
      descriptionInputRef.current.value = '';
      props.closeBoxEditFormhandler(false);
    } catch (err) {
      throw err;
    }
  };
  const boxForm = (
    <section className='boxForm'>
      <Card>
      <div className='close-button'>
          <CloseIcon onClick={() => props.closeBoxEditFormhandler(false)} />
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

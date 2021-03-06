import { useState } from 'react';
import './Box.css';
import axios from 'axios';
import Card from '../UI/Card';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import url from '../Constants/constants'
const Box = (props) => {
  const [isFile, setIsFile] = useState('');

  const file = props.boxItem.file_path
    ? props.boxItem.file_path.split('\\')[2]
    : null;

  const onChange = (e) => {
    setIsFile(e.target.files[0]);
  };
  // file upload
  const uploadFile = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', isFile);
    formData.append('id', props.boxItem._id);

    try {
      const res = await axios({
        method: 'post',
        url: `${url}uploadfile`,
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      console.log(res.data);
      
    } catch (err) {
      throw err;
    }
  };

  return (
    <section>
      <Card key={props.boxItem._id}>
        <form onSubmit={uploadFile}>
          <div className='file-upload'>
          <div>
            <input type='file' onChange={onChange} />
          </div>
          <div className='file-button'>
            <button><FileUploadIcon />Submit</button>
          </div>
          </div>
        </form>
        <div className='boxlist'>
          <h3>{props.boxItem.name}</h3>
          <div className='description'>{props.boxItem.description}</div>
          <div className='filename'>{file}</div>
        </div>
        <div className='icons'>
          <VisibilityIcon
            onClick={() =>
              props.viewBoxHandler(
                true,
                props.boxItem._id,
                props.boxItem.name,
                props.boxItem.description,
                props.boxItem.file_path
              )
            }
          />
          <ModeEditIcon
            onClick={() =>
              props.editHandler(
                true,
                props.boxItem._id,
                props.boxItem.name,
                props.boxItem.description
              )
            }
          />
        </div>
      </Card>
    </section>
  );
};

export default Box;

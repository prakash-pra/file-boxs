import './ViewFileBox.css';
import download from 'downloadjs';
import axios from 'axios';
import Card from '../UI/Card';
import GetAppIcon from '@mui/icons-material/GetApp';

const Box = (props) => {
  const file = props.isViewBoxInfo.file;

  const downloadFile = async () => {
    const boxId = { id: props.isViewBoxInfo._id };
    try {
      console.log('testing', boxId);
      const res = await axios.post(`http://localhost:2500/downloadfile`, boxId);
      download(res.data, file ? file.split('\\')[2] : '', 'text/csv');
    } catch (err) {
      throw err;
    }
  };

  return (
    <section className='file-box'>
      <Card>
        <div className='box-list'>
          <h3>{props.isViewBoxInfo.name ? props.isViewBoxInfo.name : ''}</h3>
          <div className='description'>
            {props.isViewBoxInfo.description
              ? props.isViewBoxInfo.description
              : ''}
          </div>
          <div className='filename'>
            <span className='download-icons'>
              <GetAppIcon onClick={downloadFile} />
            </span>
            {file ? file.split('\\')[2] : ''}
          </div>
        </div>
      </Card>
    </section>
  );
};

export default Box;

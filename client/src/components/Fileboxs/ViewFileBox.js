import './ViewFileBox.css';
import axios from 'axios'
import Card from '../UI/Card';
import GetAppIcon from '@mui/icons-material/GetApp';

const Box = (props) => {
  console.log(props.isViewBoxInfo.file);
  const file = props.isViewBoxInfo.file;

  const downloadFile = async () => {
    alert('working');
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

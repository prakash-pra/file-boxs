import './Box.css';
import Card from '../UI/Card';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
const FileboxList = (props) => {
  return (
    <section>
      <Card key={props.boxItem.id}>
        <div className='boxlist'>
          <h3>{props.boxItem.name}</h3>
          <div className='description'>{props.boxItem.description}</div>
          <div className='filename'>{props.boxItem.file}</div>
        </div>
        <div className='icons'>
          <VisibilityIcon />
          <ModeEditIcon />
        </div>
      </Card>
    </section>
  );
};

export default FileboxList;

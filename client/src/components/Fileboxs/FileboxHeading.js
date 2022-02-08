import './FileboxHeading.css';
import Button from '../UI/Button';
const FileboxHeading = (props) => {
  // const formFlag = true;
  console.log(props.isAddBoxHidden);
  return (
    <>
      <section className='fileboxheading'>
        <h2>File Boxs</h2>
        {props.isAddBoxHidden && (
          <Button boxFormhandler={props.boxFormhandler} />
        )}
      </section>
      <hr />
    </>
  );
};

export default FileboxHeading;

import './FileboxHeading.css';
const FileboxHeading = (props) => {
  const formFlag = true
  return (
    <>
      <section className='fileboxheading'>
        <h2>File Boxs</h2>
        <button onClick={()=>props.boxFormhandler(formFlag)}>Add box</button>
      </section>
      <hr />
    </>
  );
};

export default FileboxHeading;

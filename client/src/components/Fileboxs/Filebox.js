import React, { useState } from 'react';
import FileboxItem from './FileboxItems';
import FileboxHeading from './FileboxHeading';
import BoxForm from './BoxForm';
const Filebox = (props) => {
  const [isBoxForm, setBoxForm] = useState(false);
  const [isFileItem, setFileItem] = useState(true);
  const [isBoxDetails, setBoxDetails] = useState({});
  const boxFormhandler = (formFlag) => {
    setBoxForm(formFlag);
    setFileItem(false);
  };

  const closeBoxFormhandler = ({ closeForm }) => {
    setBoxForm(closeForm);
    setFileItem(true);
  };

  const boxEditHandler = (value, name, description) => {
    setBoxDetails({ name: name, description: description });
    setBoxForm(value);
    setFileItem(false);
  };

  return (
    <>
      <FileboxHeading boxFormhandler={boxFormhandler} />
      {isBoxForm && <BoxForm closeBoxFormhandler={closeBoxFormhandler} boxInfo={isBoxDetails}/>}
      {isFileItem && <FileboxItem boxEditHandler={boxEditHandler} />}
    </>
  );
};

export default Filebox;

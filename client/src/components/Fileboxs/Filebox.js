import React, { useState } from 'react';
import FileboxItem from './FileboxItems';
import FileboxHeading from './FileboxHeading';
import BoxForm from './BoxForm';
import BoxEditForm from './BoxEditForm';
const Filebox = (props) => {
  const [isBoxForm, setBoxForm] = useState(false);
  const [isFileItem, setFileItem] = useState(true);
  const [isBoxEditForm, setBoxEditForm] = useState(false);
  const [isBoxDetails, setBoxDetails] = useState({});

  const boxFormhandler = (formFlag) => {
    setBoxForm(formFlag);
    setFileItem(false);
  };

  const closeBoxFormhandler = ({ closeForm }) => {
    setBoxForm(closeForm);
    setFileItem(true);
  };

  const closeBoxEditFormhandler = ({ closeForm }) => {
    setBoxEditForm(closeForm);
    setFileItem(true);
  };

  const boxEditHandler = (value, boxId, name, description) => {
    setBoxEditForm(value);
    setFileItem(false);
    setBoxDetails({ _id: boxId, name: name, description: description });
  };

  return (
    <>
      <FileboxHeading boxFormhandler={boxFormhandler} />
      {isBoxForm && <BoxForm closeBoxFormhandler={closeBoxFormhandler} />}
      {isFileItem && <FileboxItem boxEditHandler={boxEditHandler} />}
      {isBoxEditForm && (
        <BoxEditForm
          closeBoxEditFormhandler={closeBoxEditFormhandler}
          boxInfo={isBoxDetails}
        />
      )}
    </>
  );
};

export default Filebox;

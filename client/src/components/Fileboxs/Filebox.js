import React, { useState } from 'react';
import FileboxItem from './FileboxItems';
import FileboxHeading from './FileboxHeading';
import BoxForm from './BoxForm';
const Filebox = (props) => {
  const [isBoxForm, setBoxForm] = useState(false);
  const [isFileItem, setFileItem] = useState(true);

  const boxFormhandler = (formFlag) => {
    setBoxForm(formFlag);
    setFileItem(false);
  };

  const closeBoxFormhandler = ({ closeForm }) => {
    setBoxForm(closeForm);
    setFileItem(true);
  };

  const boxEditHandler = (value) => {
    setBoxForm(value);
    setFileItem(false);
  };

  return (
    <>
      <FileboxHeading boxFormhandler={boxFormhandler} />
      {isBoxForm && <BoxForm closeBoxFormhandler={closeBoxFormhandler} />}
      {isFileItem && <FileboxItem boxEditHandler={boxEditHandler} />}
    </>
  );
};

export default Filebox;

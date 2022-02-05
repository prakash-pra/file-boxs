import React, { useState } from 'react';
import FileboxItem from './FileboxItems';
import FileboxHeading from './FileboxHeading';
import BoxForm from './BoxForm';
const Filebox = () => {
  const [isBoxForm, setBoxForm] = useState(false);
  const [isFileItem, setFileItem] = useState(true);

  const boxFormhandler = (formFlag) => {
    setBoxForm(formFlag);
    setFileItem(false);
  };
  return (
    <>
      <FileboxHeading boxFormhandler={boxFormhandler} />
      {isBoxForm && <BoxForm />}
      {isFileItem && <FileboxItem />}
    </>
  );
};

export default Filebox;

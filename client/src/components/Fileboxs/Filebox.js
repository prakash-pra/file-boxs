import React, { useState } from 'react';
import FileboxItem from './FileboxItems';
import FileboxHeading from './FileboxHeading';
import BoxForm from './BoxForm';
import BoxEditForm from './BoxEditForm';
import ViewFileBox from './ViewFileBox';
const Filebox = (props) => {
  const [isBoxForm, setBoxForm] = useState(false);
  const [isFileItem, setFileItem] = useState(true);
  const [isBoxEditForm, setBoxEditForm] = useState(false);
  const [isBoxDetails, setBoxDetails] = useState({});
  const [isViewBox, setIsViewBox] = useState(false);
  const [isViewBoxInfo, setViewBoxInfo] = useState({});
  // const[isFormclose, setFormClose] = useState(false)

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

  const closeViewFileBoxhandler = ({ closeForm }) => {
    setBoxEditForm(closeForm);
    setFileItem(true);
  };
  const viewBoxHandler = (val, boxId, name, description, file_path) => {
    // console.log(val, boxId, name, description, file_path);
    setIsViewBox(val);
    setFileItem(false);
    setViewBoxInfo({
      _id: boxId,
      name: name,
      description: description,
      file: file_path
    });
  };

  return (
    <>
      <FileboxHeading boxFormhandler={boxFormhandler} />
      {isBoxForm && <BoxForm closeBoxFormhandler={closeBoxFormhandler} />}
      {isFileItem && (
        <FileboxItem
          viewBoxHandler={viewBoxHandler}
          boxEditHandler={boxEditHandler}
        />
      )}
      {isBoxEditForm && (
        <BoxEditForm
          closeBoxEditFormhandler={closeBoxEditFormhandler}
          boxInfo={isBoxDetails}
        />
      )}
      {isViewBox && (
        <ViewFileBox
          closeViewFileBoxhandler={closeViewFileBoxhandler}
          isViewBoxInfo={isViewBoxInfo}
        />
      )}
    </>
  );
};

export default Filebox;

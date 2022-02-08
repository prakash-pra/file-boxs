import React, { useState } from 'react';
import FileboxItem from './FileboxItems';
import FileboxHeading from './FileboxHeading';
import BoxForm from './BoxForm';
import BoxEditForm from './BoxEditForm';
import ViewFileBox from './ViewFileBox';
const Filebox = () => {
  const [isBoxForm, setBoxForm] = useState(false);
  const [isFileItem, setFileItem] = useState(true);
  const [isBoxEditForm, setBoxEditForm] = useState(false);
  const [isBoxDetails, setBoxDetails] = useState({});
  const [isViewBox, setIsViewBox] = useState(false);
  const [isViewBoxInfo, setViewBoxInfo] = useState({});
  const [isAddBoxHidden, setAddBoxHidden] = useState(true);

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
    setAddBoxHidden(true);
  };

  const boxEditHandler = (value, boxId, name, description) => {
    setBoxEditForm(value);
    setFileItem(false);
    setAddBoxHidden(false);
    setBoxDetails({ _id: boxId, name: name, description: description });
  };

  const closeViewFileBoxhandler = ({ val }) => {
    setIsViewBox(val);
    setFileItem(true);
    setAddBoxHidden(true);
  };
  const viewBoxHandler = (val, boxId, name, description, file_path) => {
    setIsViewBox(val);
    setFileItem(false);
    setAddBoxHidden(false);
    setViewBoxInfo({
      _id: boxId,
      name: name,
      description: description,
      file: file_path
    });
  };

  const fileBoxHeading = (
    <FileboxHeading
      isAddBoxHidden={isAddBoxHidden}
      boxFormhandler={boxFormhandler}
    />
  );
  const boxForm = <BoxForm closeBoxFormhandler={closeBoxFormhandler} />;
  const fileBox = (
    <FileboxItem
      viewBoxHandler={viewBoxHandler}
      boxEditHandler={boxEditHandler}
    />
  );

  const editForm = (
    <BoxEditForm
      closeBoxEditFormhandler={closeBoxEditFormhandler}
      boxInfo={isBoxDetails}
    />
  );

  const viewBox = (
    <ViewFileBox
      closeViewFileBoxhandler={closeViewFileBoxhandler}
      isViewBoxInfo={isViewBoxInfo}
    />
  );

  return (
    <>
      {fileBoxHeading}
      {isBoxForm && boxForm}
      {isFileItem && fileBox}
      {isBoxEditForm && editForm}
      {isViewBox && viewBox}
    </>
  );
};

export default Filebox;

import { useEffect, useState } from 'react';
import './FileboxItems.css';
import Box from './Box';
import axios from 'axios';

// box items
const FileboxItems = (props) => {
  const [isBoxData, setIsBox] = useState([]);
  const boxEditHandler = props.boxEditHandler;
  const viewBoxHandler =props.viewBoxHandler;
  // An empty array means the callback will only execute once
  useEffect(() => {
    getBoxs();
  }, []);

  const getBoxs = async () => {
    try {
      const res = await axios.get(`http://localhost:2800/getFileBoxs`);
      console.log(res.data.result);
      setIsBox(res.data.result);
    } catch (err) {
      throw err;
    }
  };

  const boxData = isBoxData.map((box) => (
    <Box viewBoxHandler={viewBoxHandler} editHandler={boxEditHandler} key={box._id} boxItem={box} />
  ));
  return <section className='boxItems'>{boxData}</section>;
};

export default FileboxItems;

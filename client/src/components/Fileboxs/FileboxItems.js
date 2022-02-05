import './FileboxItems.css';
import Box from './Box';
const FileboxList = () => {
  const dummy_data = [
    {
      id: 1,
      name: 'prakash',
      description: 'some description',
      file: 'images/abcd.csv'
    },
    {
      id: 2,
      name: 'prakash',
      description: 'some description',
      file: 'images/abcd.csv'
    },
    {
      id: 3,
      name: 'prakash',
      description: 'some description',
      file: 'images/abcd.csv'
    },
    {
      id: 4,
      name: 'prakash',
      description: 'some description',
      file: 'images/abcd.csv'
    },
    {
      id: 5,
      name: 'prakash',
      description: 'some description',
      file: 'images/abcd.csv'
    },
    {
      id: 5,
      name: 'prakash',
      description: 'some description',
      file: 'images/abcd.csv'
    },
    {
      id: 5,
      name: 'prakash',
      description: 'some description',
      file: 'images/abcd.csv'
    },
    {
      id: 5,
      name: 'prakash',
      description: 'some description',
      file: 'images/abcd.csv'
    }
  ];
  const card = dummy_data.map((box) => <Box boxItem={box} />);
  return <section className='boxItems'>{card}</section>;
};

export default FileboxList;

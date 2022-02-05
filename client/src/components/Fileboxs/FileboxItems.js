import './FileboxItems.css';
import Box from './Box';
const FileboxItems = () => {
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
      id: 6,
      name: 'prakash',
      description: 'some description',
      file: 'images/abcd.csv'
    },
    {
      id: 7,
      name: 'prakash',
      description: 'some description',
      file: 'images/abcd.csv'
    },
    {
      id: 8,
      name: 'prakash',
      description: 'some description',
      file: 'images/abcd.csv'
    }
  ];
  const card = dummy_data.map((box) => <Box key={box.id} boxItem={box} />);
  return <section className='boxItems'>{card}</section>;
};

export default FileboxItems;

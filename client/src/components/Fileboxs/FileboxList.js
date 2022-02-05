import './FileboxList.css';
import Card from '../UI/Card';
const FileboxContent = () => {
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
    }
  ];
  const card = dummy_data.map((box) => (
    <Card key={box.id}>
      <div className='boxlist'>
        <h2>{box.name}</h2>
        <div>{box.description}</div>
        <div>{box.file}</div>
      </div>
    </Card>
  ));
  return <section className='box'>{card}</section>;
};

export default FileboxContent;

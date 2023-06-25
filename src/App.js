import { useEffect, useState } from 'react';
import Counter from './components/Counter';
// import MyBox from './components/MyBox';
// import YourBox from './components/YourBox';

function App() {
  const [person, setPerson] = useState(null);
  // logic
  const handleEdit = (editPerson) => {
    console.log('editPerson', editPerson);
    setPerson(editPerson);
  };

  useEffect(() => {
    const dasom = {
      id: 1,
      name: 'Dasom',
      gender: 'Female',
    };
    setPerson(dasom);
  }, [setPerson]);

  // view
  return (
    <div style={{ textAlign: 'center' }}>
      세상을 바꾸는건 꿈을꾸고 도전하는 사람들의 몫이다
      {/* {!!person && <MyBox person={person} edit={handleEdit} />}
      <MyBox name={'Woowon'} gender={'Female'} />
      <MyBox name={'Jeonghoon'} gender={'Male'} />
      <MyBox name={'Seonhyeog'} gender={'Male'} />
      <YourBox /> */}
      <Counter />
    </div>
  );
}

export default App;

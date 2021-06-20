import { useState } from 'react';

import Navbar from './components/Navbar';
import Container from './components/Container';
import ItemInput from './components/ItemInput';
import Items from './components/Items';
import Empty from './components/Empty';

function App() {
  const [value, setValue] = useState('');
  const [items, setItems] = useState([
    { name: 'Susu ultra', count: 1 },
    { name: 'Tahu sumedang', count: 1 },
    { name: 'Semangka', count: 1 }
  ]);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const newItems = [...items, { name: value, count: 1 }];

    setItems(newItems);
    setValue('');
  }

  const addItemHandler = (index) => {
    const newItems = [...items];

    newItems[index].count = newItems[index].count + 1;

    setItems(newItems);
  }

  const subtractItemHandler = (index) => {
    const newItems = [...items];

    newItems[index].count = newItems[index].count - 1;

    setItems(newItems);
  }

  return (
    <>
      <Navbar />
      <Container>
        <ItemInput
          onChange={e => setValue(e.target.value)}
          onSubmit={formSubmitHandler}
          value={value}
        />


        {
          items.length > 0
            ? <Items
              items={items}
              addItemHandler={addItemHandler}
              subtractItemHandler={subtractItemHandler}
            />
            : <Empty />
        }
      </Container>
    </>
  );
}

export default App;
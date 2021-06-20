import { useState } from 'react';

import Navbar from './components/Navbar';
import Container from './components/Container';
import ItemInput from './components/ItemInput';
import Items from './components/Items';
import Empty from './components/Empty';
import Info from './components/Info';

function App() {
  const [value, setValue] = useState('');
  const [items, setItems] = useState([]);

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

  const deleteItemHandler = (index) => {
    const newItems = [...items];

    newItems.splice(index, 1);

    setItems(newItems);
  }

  const totalCounts = items.reduce((total, num) => total + num.count, 0);

  return (
    <>
      <Navbar />
      <Container>
        <ItemInput
          onChange={e => setValue(e.target.value)}
          onSubmit={formSubmitHandler}
          value={value}
        />

        <Info
          itemsLength={items.length}
          totalCounts={totalCounts}
          deleteAllHandler={() => setItems([])}
        />

        {
          items.length > 0
            ? <Items
              items={items}
              addItemHandler={addItemHandler}
              subtractItemHandler={subtractItemHandler}
              deleteItemHandler={deleteItemHandler}
            />
            : <Empty />
        }
      </Container>
    </>
  );
}

export default App;
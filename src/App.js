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
  ])

  return (
    <>
      <Navbar />
      <Container>
        <ItemInput
          onChange={e => setValue(e.target.value)}
          value={value}
        />


        {
          items.length > 0
            ? <Items items={items} />
            : <Empty />
        }
      </Container>
    </>
  );
}

export default App;
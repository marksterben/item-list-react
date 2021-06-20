import { useState } from 'react';

import Navbar from './components/Navbar';
import Container from './components/Container';
import ItemInput from './components/ItemInput';

function App() {
  const [value, setValue] = useState('');

  return (
    <>
      <Navbar />
      <Container>
        <ItemInput
          onChange={e => setValue(e.target.value)}
          value={value}
        />

      </Container>
    </>
  );
}

export default App;
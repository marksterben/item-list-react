import { useQuery } from "react-query";

import Navbar from "./components/Navbar";
import Container from "./components/Container";
import ItemInput from "./components/ItemInput";
import Items from "./components/Items";
import Empty from "./components/Empty";
import Info from "./components/Info";

import { getItems } from "./rest";

const App = () => {
  const { isLoading, isError, data } = useQuery("items", getItems);

  if (isLoading) {
    return (
      <>
        <Navbar />
        <Container>
          <Empty text="Loading..." />
        </Container>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <Navbar />
        <Container>
          <Empty text="There is an error!" />
        </Container>
      </>
    );
  }

  const items = data.items;
  const totalCounts = items.reduce((total, num) => total + num.count, 0);

  return (
    <>
      <Navbar />
      <Container>
        <ItemInput />

        <Info itemsLength={items.length} totalCounts={totalCounts} />

        {items.length > 0 ? (
          <Items items={items} />
        ) : (
          <Empty text="Empty List ..." />
        )}
      </Container>
    </>
  );
};

export default App;

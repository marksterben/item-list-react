import { QueryClient, QueryClientProvider } from "react-query";

import "./index.css";
import Layout from "./Layout";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout />
    </QueryClientProvider>
  );
};

export default App;

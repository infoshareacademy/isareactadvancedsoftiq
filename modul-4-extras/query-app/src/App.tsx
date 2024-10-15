import { Navigation } from "./navigation";
import { Content } from "./content";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
      <Content />
    </QueryClientProvider>
  );
}

export default App;

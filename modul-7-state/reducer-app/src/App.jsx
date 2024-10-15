import { BrokenLocalState } from "./BrokenLocalState";
import { ReduxProvider } from "./ReduxProvider";

function App() {
  return (
    <ReduxProvider>
      <BrokenLocalState />
      <Counter />
    </ReduxProvider>
  );
}

export default App;

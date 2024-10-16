import { BrokenLocalState } from "./BrokenLocalState";
import { ReduxProvider } from "./ReduxProvider";
import { Counter } from "./Counter";

function App() {
  return (
    <ReduxProvider>
      <BrokenLocalState />
      <Counter />
    </ReduxProvider>
  );
}

export default App;

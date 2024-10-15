import { BrowserRouter } from "react-router-dom";
import { Navigation } from "./navigation";
import { Content } from "./content";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Content />
    </BrowserRouter>
  );
}

export default App;

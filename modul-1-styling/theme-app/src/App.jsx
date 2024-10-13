import { Text } from "../components/Text";
import { Text2 } from "../components/Text2";
import { Counter } from "../components/Counter";
import { Nav } from "../components/Nav";
import { Title } from "../components/Title";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Nav />
      </div>
      <Title />
      <div className="card">
        <Counter />
        <Text />
        <Text2 />
      </div>
    </>
  );
}

export default App;

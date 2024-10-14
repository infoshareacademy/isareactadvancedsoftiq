import { Text } from "../components/Text";
import { Text2 } from "../components/Text2";
import { Counter } from "../components/Counter";
import { Nav } from "../components/Nav";
import { Title } from "../components/Title";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";

const lightTheme = {
  color: "#000000",
  backgroundColor: "#eeeeee",
};

const Container = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
`;

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Container>
        <div>
          <Nav />
        </div>
        <Title />
        <div className="card">
          <Counter />
          <Text />
          <Text2 />
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;

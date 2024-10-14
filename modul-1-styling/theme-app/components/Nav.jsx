import styled from "styled-components";
import { useTheme } from "styled-components";
import { lightTheme, darkTheme } from "../src/ThemeProvider";

const Button = styled.button`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
`;

export const Nav = () => {
  const { setTheme } = useTheme();
  return (
    <>
      <Button
        onClick={() => {
          setTheme(lightTheme);
        }}
      >
        Light
      </Button>
      <Button
        onClick={() => {
          setTheme(darkTheme);
        }}
      >
        Dark
      </Button>
    </>
  );
};

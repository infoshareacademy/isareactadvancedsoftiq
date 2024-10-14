import { useState } from "react";
import { ThemeProvider as ThemeStyledProvider } from "styled-components";

export const lightTheme = {
  color: "#000000",
  backgroundColor: "#eeeeee",
};

export const darkTheme = {
  color: "#ffffff",
  backgroundColor: "#222222",
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const context = {
    ...theme,
    setTheme,
  };

  return <ThemeStyledProvider theme={context}>{children}</ThemeStyledProvider>;
};

import { useState } from "react";
import { Button } from "./Button";
import { useTheme } from "styled-components";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const theme = useTheme();

  return (
    <>
      <p style={{ color: theme.color }}>count is {count}</p>
      <Button setCount={setCount} />
    </>
  );
};

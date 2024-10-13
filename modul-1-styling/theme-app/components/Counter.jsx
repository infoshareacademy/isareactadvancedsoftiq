import { useState } from "react";
import { Button } from "./Button";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>count is {count}</p>
      <Button setCount={setCount} />
    </>
  );
};

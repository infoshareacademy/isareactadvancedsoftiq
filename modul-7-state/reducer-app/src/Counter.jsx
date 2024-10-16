import { ReduxContext } from "./ReduxProvider";
import { useContext } from "react";

export const Counter = () => {
  const [state, dispatch] = useContext(ReduxContext);
  const increment = () => {
    dispatch({ type: "increment" });
  };
  const decrement = () => {
    dispatch({ type: "decrement" });
  };
  const reset = () => {
    dispatch({ type: "reset" });
  };

  return (
    <div>
      <h1>Counter: {state.value}</h1>
      <button onClick={increment}>Zwiększ</button>
      <button onClick={decrement}>Zmniejsz</button>
      <button onClick={reset}>Resetuj</button>
    </div>
  );
};

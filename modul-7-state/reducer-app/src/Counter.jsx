export const Counter = () => {
  const increment = () => {};
  const decrement = () => {};
  const reset = () => {};

  return (
    <div>
      <h1>Counter: 0</h1>
      <button onClick={increment}>Zwiększ</button>
      <button onClick={decrement}>Zmniejsz</button>
      <button onClick={reset}>Resetuj</button>
    </div>
  );
};

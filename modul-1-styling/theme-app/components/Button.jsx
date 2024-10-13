export const Button = (setCount) => {
  const handleClick = () => setCount((count) => count + 1);

  return <button onClick={handleClick}>Click me</button>;
};

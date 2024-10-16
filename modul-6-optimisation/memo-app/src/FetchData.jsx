import { useState, useEffect, useRef } from "react";

function createFetch() {
  let callCount = 0;

  return function () {
    callCount += 1;
    switch (callCount) {
      case 1:
        return Promise.resolve("pobrane dane 1");
      case 2:
        return Promise.resolve("pobrane dane 2");
      case 3:
        return Promise.resolve("pobrane dane 3");
      default:
        return null;
    }
  };
}

const fetchData = createFetch();

const Fetch = ({ initialData, value }) => {
  const hasRendered = useRef(false);
  const [data, setData] = useState(initialData);

  useEffect(() => {
    if (hasRendered.current) {
      fetchData().then((d) => setData(d));
    }

    hasRendered.current = true;
  }, [value]);

  return <h1>{data}</h1>;
};

export const FetchData = () => {
  const [value, setValue] = useState(0);

  return (
    <>
      <Fetch initialData="inicjalne dane" value={value} />
      <button onClick={() => setValue(value + 1)}>change value</button>
    </>
  );
};

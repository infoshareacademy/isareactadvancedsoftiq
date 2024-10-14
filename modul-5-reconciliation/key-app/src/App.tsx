import React, { useState, useEffect, useRef } from "react";

const Timer = () => {
  const [value, setValue] = useState(0);
  const step = useRef(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (value > 10) {
        step.current = 5;
      }
      setValue(value + step.current);
    }, 2000);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <div style={{ backgroundColor: "lightblue", padding: "20px" }}>
      Current value: {value}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <button>Zresetuj timer</button>
      <div style={{ marginTop: "20px" }}>
        <Timer />
      </div>
    </div>
  );
};

export default App;

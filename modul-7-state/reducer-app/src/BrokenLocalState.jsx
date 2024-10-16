import { useState } from "react";

export const BrokenLocalState = () => {
  const [items, setItems] = useState([1, 2, 3]);
  const [val, setVal] = useState("");

  const addItem = () => {
    let newItems = items;
    if (!items.includes(val)) {
      newItems.push(val);
    }
    setItems([...newItems]);
  };

  return (
    <div>
      <h1>Items:</h1>
      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <input value={val} onChange={(e) => setVal(e.target.value)} />
      <button onClick={addItem}>Add Item</button>
    </div>
  );
};

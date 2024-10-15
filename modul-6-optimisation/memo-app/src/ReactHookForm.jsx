import React, { useState } from "react";

const NameInput = () => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Witaj, ${name}!`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Wpisz swoje imię:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <button type="submit">Wyślij</button>
    </form>
  );
};

export default NameInput;

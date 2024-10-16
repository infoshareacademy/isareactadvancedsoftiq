import React, { useRef } from "react";

const NameInput = () => {
  const name = useRef("");
  const inputRef = useRef();

  const handleChange = (event) => {
    name.current = event.target.value;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // OPCJA 1
    alert(`Witaj, ${name.current}!`);
    // OPCJA 2
    console.log(`Witaj, ${inputRef.current.value}!`);
    // OPCJA 3
    const data = new FormData(event.currentTarget);
    console.log(`Witaj, ${data.get("name")}!`);

    // reset
    inputRef.current.value = "";
    name.current = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Wpisz swoje imię:
        <input name="name" ref={inputRef} type="text" onChange={handleChange} />
      </label>
      <button type="submit">Wyślij</button>
    </form>
  );
};

export default NameInput;

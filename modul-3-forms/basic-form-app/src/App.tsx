import { useState } from "react";

const formStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "auto",
};

function App() {
  return (
    <>
      <form style={formStyles as React.CSSProperties}>
        <label htmlFor="name">Name</label>
        <input id="name" />
        <label htmlFor="surname">Surname</label>
        <input id="surname" />
        <label htmlFor="age">Age</label>
        <input id="age" />
        <label htmlFor="gender">Gender</label>
        <select id="gender">
          <option>male</option>
          <option>female</option>
        </select>
        <label htmlFor="comment">Comment</label>
        <textarea id="comment" />
        <input type="submit" value="Wyślij" />
      </form>
    </>
  );
}

export default App;

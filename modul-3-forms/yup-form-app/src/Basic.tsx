const formStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "auto",
  paddingBottom: "50px",
};

export const Basic = () => {
  return (
    <>
      <form style={formStyles as React.CSSProperties}>
        <h1>Basic yup</h1>
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
};

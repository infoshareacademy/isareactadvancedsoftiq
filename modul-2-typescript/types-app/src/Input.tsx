export const Input = ({ name, setData }) => {
  const handleChange = (event) => {
    setData({
      [event.target.name]: event.target.value,
    });
  };
  return <input name={name} onChange={handleChange} />;
};

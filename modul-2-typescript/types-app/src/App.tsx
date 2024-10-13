import { useState } from "react";
import { Input } from "./Input";

function App() {
  const [formData, setFormData] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log();
  };

  const setData = (data) => {
    setFormData({
      ...formData,
      ...data,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input name="email" setData={setData} />
        <Input name="password" setData={setData} />
        {formData != null ? (
          <button type="submit" />
        ) : (
          <span>wypełnij formularz</span>
        )}
      </form>
    </>
  );
}

export default App;

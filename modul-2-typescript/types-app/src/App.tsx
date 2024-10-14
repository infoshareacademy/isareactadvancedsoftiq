import { FormEvent, useState } from "react";
import { Input } from "./Input";

type State = {
  email: string;
  password: string;
};

function App() {
  const [formData, setFormData] = useState<State | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log();
  };

  const setData = (data: { [key: string]: string }) => {
    if (!formData) {
      setFormData({
        email: "",
        password: "",
        ...data,
      });
    } else {
      setFormData({
        ...formData,
        ...data,
      });
    }
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

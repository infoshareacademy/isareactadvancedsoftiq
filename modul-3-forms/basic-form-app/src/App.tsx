import { useForm } from "react-hook-form";

const formStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "auto",
};

type FormState = {
  name: string;
  surname: string;
  age: string;
  gender: "male" | "female";
  comment: string;
};

function App() {
  const { register, handleSubmit } = useForm<FormState>();

  const onSubmit = (data: FormState) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <>
      <form
        style={formStyles as React.CSSProperties}
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="name">Name</label>
        <input id="name" {...register("name")} />
        <label htmlFor="surname">Surname</label>
        <input id="surname" {...register("surname")} />
        <label htmlFor="age">Age</label>
        <input id="age" {...register("age")} />
        <label htmlFor="gender">Gender</label>
        <select id="gender" {...register("gender")}>
          <option>male</option>
          <option>female</option>
        </select>
        <label htmlFor="comment">Comment</label>
        <textarea id="comment" {...register("comment")} />
        <input type="submit" value="Wyślij" />
      </form>
    </>
  );
}

export default App;

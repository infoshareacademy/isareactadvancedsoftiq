import { SubmitHandler, useForm } from "react-hook-form";

const formStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "auto",
};

type FormState = {
  name: string;
  surname: string;
  age: number;
  gender: "male" | "female";
  comment: string;
};

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormState>();

  const onSubmit: SubmitHandler<FormState> = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  const handleOnResetClick = () => {
    reset();
  };

  return (
    <>
      <form
        style={formStyles as React.CSSProperties}
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="name">Name</label>
        <input
          id="name"
          {...register("name", { required: true, pattern: /^[a-zA-Z]+$/ })}
        />
        {errors.name && errors.name.type === "required" && (
          <span style={{ color: "red" }}>This field is required</span>
        )}
        {errors.name && errors.name.type === "pattern" && (
          <span style={{ color: "red" }}>
            This field can contain only letters.
          </span>
        )}
        <label htmlFor="surname">Surname</label>
        <input
          id="surname"
          {...register("surname", { required: true, pattern: /^[a-zA-Z]+$/ })}
        />
        {errors.surname && errors.surname.type === "required" && (
          <span style={{ color: "red" }}>This field is required</span>
        )}
        {errors.surname && errors.surname.type === "pattern" && (
          <span style={{ color: "red" }}>
            This field can contain only letters.
          </span>
        )}
        <label htmlFor="age">Age</label>
        <input
          id="age"
          {...register("age", {
            valueAsNumber: true,
            validate: {
              old: (v) => Number(v) < 100,
            },
          })}
        />
        {errors.age && errors.age.type === "old" && (
          <span style={{ color: "red" }}>You are probably dead.</span>
        )}
        <label htmlFor="gender">Gender</label>
        <select id="gender" {...register("gender")}>
          <option>male</option>
          <option>female</option>
        </select>
        <label htmlFor="comment">Comment</label>
        <textarea id="comment" {...(register("comment"), { maxLength: 50 })} />
        {errors.comment && errors.comment.type === "maxLength" && (
          <span style={{ color: "red" }}>
            The field can contian up to 50 characters.
          </span>
        )}
        <input type="submit" value="Wyślij" />
        <button onClick={handleOnResetClick}>Reset</button>
      </form>
    </>
  );
}

export default App;

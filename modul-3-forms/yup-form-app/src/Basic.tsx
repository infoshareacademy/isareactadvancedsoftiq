import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";

const formStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "auto",
  paddingBottom: "50px",
};

type Gender = "male" | "female";

const schema = yup.object().shape({
  name: yup.string().required("To pole jest wymagane"),
  surname: yup.string().required("To pole jest wymagane"),
  age: yup.string(),
  gender: yup.mixed<Gender>().oneOf(["male", "female"], "Musisz to określić"),
  comment: yup.string(),
});

type FormState = {
  name: string;
  surname: string;
  age?: string;
  gender?: Gender;
  comment?: string;
};

export const Basic = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormState>({
    resolver: yupResolver<FormState>(schema),
  });

  const onSubmit: SubmitHandler<FormState> = (data) => {
    console.log(data);
  };

  console.log(errors);
  return (
    <>
      <form
        style={formStyles as React.CSSProperties}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1>Basic yup</h1>
        <label htmlFor="name">Name</label>
        <input id="name" {...register("name")} />
        {errors.name && errors.name.type === "required" && (
          <span style={{ color: "red" }}>This field is required</span>
        )}
        <label htmlFor="surname">Surname</label>
        <input id="surname" {...register("surname")} />
        {errors.surname && errors.surname.type === "required" && (
          <span style={{ color: "red" }}>This field is required</span>
        )}
        <label htmlFor="age">Age</label>
        <input id="age" {...register("age")} />
        <label htmlFor="gender">Gender</label>
        <select id="gender" {...register("gender")}>
          <option>male</option>
          <option>female</option>
          <option>unknown</option>
        </select>
        {errors.gender && errors.gender.type === "oneOf" && (
          <span style={{ color: "red" }}>{errors.gender.message}</span>
        )}
        <label htmlFor="comment">Comment</label>
        <textarea id="comment" {...register("comment")} />
        <input type="submit" value="Wyślij" />
      </form>
    </>
  );
};

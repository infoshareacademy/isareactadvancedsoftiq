import { TextField, FormLabel, Box, Button, Typography } from "@mui/material";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  password: yup
    .string()
    .min(8, "Hasło musi mieć co najmniej 8 znaków")
    .required("Hasło jest wymagane"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Hasła muszą się zgadzać")
    .required("Potwierdzenie hasła jest wymagane"),
});

type FormState = {
  password: string;
  confirmPassword: string | null;
};
export const Confirm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormState>({ resolver: yupResolver(schema) });
  const onSubmit = (data: FormState) => {
    console.log(data);
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "50%",
        margin: "auto",
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Typography variant="h4" marginBottom={5}>
        Log in yup
      </Typography>

      <FormLabel>Password</FormLabel>
      <TextField
        margin="normal"
        {...register("password")}
        error={!!errors.password}
        helperText={errors.password && errors.password.message}
      />

      <FormLabel>Confirm password</FormLabel>
      <TextField
        margin="normal"
        {...register("confirmPassword")}
        error={!!errors.confirmPassword}
        helperText={errors.confirmPassword && errors.confirmPassword.message}
      />

      <Button type="submit">Send</Button>
    </Box>
  );
};

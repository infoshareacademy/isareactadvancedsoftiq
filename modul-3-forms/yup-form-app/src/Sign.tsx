import {
  TextField,
  FormLabel,
  Box,
  Button,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, FieldErrors, useWatch } from "react-hook-form";

type Work = "employed" | "unemployed";

const schema = yup.object().shape({
  name: yup.string().required("Wymagane"),
  surname: yup.string().required("Wymagane"),
  number: yup.number().nullable().required("Wymagane"),
  work: yup.mixed<Work>().required("Wymagane"),
  company: yup.string().when("work", ([value], schema) => {
    return value === "employed" ? schema.required("Wymagane") : schema;
  }),
  role: yup.string().when("work", ([value], schema) => {
    return value === "employed" ? schema.required("Wymagane") : schema;
  }),
});

type FormState = {
  name: string;
  surname: string;
  number: number | null;
  work: Work;
  company?: string;
  role?: string;
};

const getErrorDetails = (
  errors: FieldErrors<FormState>,
  key: keyof FormState
) => {
  const error = errors[key];
  return {
    error: !!error,
    helperText: error && error.message,
  };
};

export const Sign = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormState>({
    resolver: yupResolver<FormState>(schema),
  });
  const onSubmit = (data: FormState) => {
    console.log(data);
  };
  const workField = useWatch({ control, name: "work" });

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
        Sign to conference yup
      </Typography>

      <FormLabel>Name</FormLabel>
      <TextField
        margin="normal"
        {...register("name")}
        {...getErrorDetails(errors, "name")}
      />

      <FormLabel>Surname</FormLabel>
      <TextField
        margin="normal"
        {...register("surname")}
        {...getErrorDetails(errors, "surname")}
      />

      <FormLabel>Number</FormLabel>
      <TextField
        margin="normal"
        type="number"
        {...register("number")}
        {...getErrorDetails(errors, "name")}
      />

      <FormLabel>Work</FormLabel>
      <Select {...register("work")}>
        <MenuItem value="employed">employed</MenuItem>
        <MenuItem value="unemployed">unemployed</MenuItem>
      </Select>

      {workField === "employed" && (
        <>
          <FormLabel>Company</FormLabel>
          <TextField
            margin="normal"
            {...register("company")}
            {...getErrorDetails(errors, "company")}
          />

          <FormLabel>Role</FormLabel>
          <TextField
            margin="normal"
            {...register("role")}
            {...getErrorDetails(errors, "role")}
          />
        </>
      )}

      <Button type="submit">Send</Button>
    </Box>
  );
};

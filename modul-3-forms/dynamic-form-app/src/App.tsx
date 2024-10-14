import {
  TextField,
  FormLabel,
  Box,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  name: string;
  surname: string;
  age: number;
  year: number;
};

function App() {
  const { register, handleSubmit, getValues, setValue } = useForm<FormValues>();

  const handleAgeChange = () => {
    const values = getValues();
    setValue("year", 2024 - values.age);
  };
  const onSubmit: SubmitHandler<FormValues> = (data) => {
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
        Sign to our app
      </Typography>

      <FormLabel>Name</FormLabel>
      <TextField margin="normal" {...register("name")} />

      <FormLabel>Surname</FormLabel>
      <TextField margin="normal" {...register("surname")} />

      <FormLabel>Age</FormLabel>
      <TextField
        margin="normal"
        {...register("age", {
          valueAsNumber: true,
          onChange: handleAgeChange,
        })}
      />

      <FormLabel>Year of birth</FormLabel>
      <TextField margin="normal" {...register("year")} />

      <FormLabel>Hobbys</FormLabel>
      <Grid container marginTop={2}>
        <Grid item>
          <TextField />
        </Grid>

        <Grid item alignItems="stretch" style={{ display: "flex" }}>
          <Button color="primary" variant="contained">
            Add
          </Button>
        </Grid>
      </Grid>

      <Button type="submit">Send</Button>
    </Box>
  );
}

export default App;

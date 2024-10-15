import { ChangeEvent, useState } from "react";
import {
  TextField,
  FormLabel,
  Box,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";

type FormValues = {
  name: string;
  surname: string;
  age: number;
  year: number;
  hobbys: { name: string }[];
};

function App() {
  const [newHobby, setNewHobby] = useState("");
  const { register, handleSubmit, getValues, setValue, control } =
    useForm<FormValues>();
  const { append, remove, fields } = useFieldArray({ control, name: "hobbys" });

  const handleAgeChange = () => {
    const values = getValues();
    setValue("year", 2024 - values.age);
  };

  const handleAppendHobby = () => {
    append({ name: newHobby });
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
      {fields.map((field, index) => (
        <Grid container marginTop={2}>
          <Grid item>
            <TextField {...register(`hobbys.${index}.name`)} />
            <Button
              variant="contained"
              color="error"
              onClick={() => remove(index)}
            >
              X
            </Button>
          </Grid>
        </Grid>
      ))}

      <Grid container marginTop={2}>
        <Grid item alignItems="stretch">
          <TextField
            value={newHobby}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setNewHobby(e.target.value)
            }
          />
        </Grid>
        <Grid item alignItems="stretch" style={{ display: "flex" }}>
          <Button
            color="primary"
            variant="contained"
            onClick={handleAppendHobby}
          >
            Add
          </Button>
        </Grid>
      </Grid>
      <Button type="submit">Send</Button>
    </Box>
  );
}

export default App;

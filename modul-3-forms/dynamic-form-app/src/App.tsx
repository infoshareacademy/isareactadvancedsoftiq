import {
  TextField,
  FormLabel,
  Box,
  Button,
  Grid,
  Typography,
} from "@mui/material";

function App() {
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
    >
      <Typography variant="h4" marginBottom={5}>
        Sign to our app
      </Typography>

      <FormLabel>Name</FormLabel>
      <TextField margin="normal" />

      <FormLabel>Surname</FormLabel>
      <TextField margin="normal" />

      <FormLabel>Age</FormLabel>
      <TextField margin="normal" />

      <FormLabel>Year of birth</FormLabel>
      <TextField margin="normal" />

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

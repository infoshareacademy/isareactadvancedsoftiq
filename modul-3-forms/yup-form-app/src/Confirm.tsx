import { TextField, FormLabel, Box, Button, Typography } from "@mui/material";

export const Confirm = () => {
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
        Log in yup
      </Typography>

      <FormLabel>Password</FormLabel>
      <TextField margin="normal" />

      <FormLabel>Confirm password</FormLabel>
      <TextField margin="normal" />

      <Button type="submit">Send</Button>
    </Box>
  );
};

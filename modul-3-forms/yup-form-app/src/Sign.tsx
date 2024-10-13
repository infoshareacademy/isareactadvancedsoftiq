import {
  TextField,
  FormLabel,
  Box,
  Button,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";

export const Sign = () => {
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
        Sign to conference yup
      </Typography>

      <FormLabel>Name</FormLabel>
      <TextField margin="normal" />

      <FormLabel>Surname</FormLabel>
      <TextField margin="normal" />

      <FormLabel>Number</FormLabel>
      <TextField margin="normal" type="number" />

      <FormLabel>Work</FormLabel>
      <Select>
        <MenuItem>employed</MenuItem>
        <MenuItem>unemployed</MenuItem>
      </Select>

      <FormLabel>Company</FormLabel>
      <TextField margin="normal" />

      <FormLabel>Role</FormLabel>
      <TextField margin="normal" />

      <Button type="submit">Send</Button>
    </Box>
  );
};

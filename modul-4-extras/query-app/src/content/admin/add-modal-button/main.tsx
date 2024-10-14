import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

type Props = {
  handleClose: () => void;
  isOpen: boolean;
};

const fields = ["name", "ingredients", "price", "url"];

export const AddModal = ({ handleClose, isOpen }: Props) => {
  return (
    <Dialog onClose={handleClose} open={isOpen} fullWidth>
      <DialogTitle>Add new burger</DialogTitle>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", padding: 3 }}
      >
        {fields.map((field) => (
          <TextField label={field} />
        ))}
        <Button type="submit">Add</Button>
      </Box>
    </Dialog>
  );
};

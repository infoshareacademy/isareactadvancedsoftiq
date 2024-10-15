import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addBurger } from "../../../services/burgers";

type Props = {
  handleClose: () => void;
  isOpen: boolean;
};

const fields = ["name", "ingredients", "price", "url"];

export const AddModal = ({ handleClose, isOpen }: Props) => {
  const queryClient = useQueryClient();
  const { register, handleSubmit } = useForm();
  const addMutation = useMutation({
    mutationFn: addBurger,
    onSuccess: () => {
      handleClose();
      queryClient.invalidateQueries({ queryKey: ["burgers"] });
    },
  });

  // it should not be any :)
  const onSubmit = (data: any) => {
    addMutation.mutate(data);
  };

  return (
    <Dialog onClose={handleClose} open={isOpen} fullWidth>
      <DialogTitle>Add new burger</DialogTitle>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", padding: 3 }}
        onSubmit={handleSubmit(onSubmit)}
      >
        {fields.map((field) => (
          <TextField label={field} {...register(field)} />
        ))}
        <Button type="submit">Add</Button>
      </Box>
    </Dialog>
  );
};

import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import TextField from "@mui/material/TextField";
import { Burger, BurgerData } from "../../../../common/types";

type Props = {
  burger: Burger;
  cancelEditMode: () => void;
};

const cellFields = ["name", "ingredients", "price"];

export const EditRow = ({ burger, cancelEditMode }: Props) => {
  return (
    <TableRow>
      {cellFields.map((field) => (
        <TableCell key={field}>
          <TextField size="small" label={field} />
        </TableCell>
      ))}
      <TableCell>
        <Button size="small" variant="contained" color="success">
          <Icon>save</Icon>
        </Button>
      </TableCell>
      <TableCell>
        <Button
          size="small"
          variant="contained"
          color="secondary"
          onClick={cancelEditMode}
        >
          <Icon>cancel</Icon>
        </Button>
      </TableCell>
    </TableRow>
  );
};

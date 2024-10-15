import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { PageWrapper } from "../../common/page-wrapper";
import { AddModalButton } from "./add-modal-button";
import { Row } from "./row";
import { useQueryBurger } from "../../controllers/burgers";

export const Admin = () => {
  const { error, data: burgers } = useQueryBurger();

  if (error) {
    return <PageWrapper title="An error occurred">{error.message}</PageWrapper>;
  }

  return (
    <PageWrapper title="Admin">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Ingredients</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell sx={{ width: "64px" }} />
              <TableCell sx={{ width: "64px" }} />
            </TableRow>
          </TableHead>
          <TableBody>
            {burgers?.map((burger) => (
              <Row key={burger.id} burger={burger} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ alignSelf: "flex-end", marginTop: 1 }}>
        <AddModalButton />
      </Box>
    </PageWrapper>
  );
};

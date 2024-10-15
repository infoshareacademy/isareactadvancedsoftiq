import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { PageWrapper } from "../../common/page-wrapper";
import { Burger } from "../../common/types";
import { fetchBurgers } from "../../services/fetch-burgers";
import { AddModal } from "./add-modal";
import { Row } from "./row";

export const Admin = () => {
  const [burgers, setBurgers] = useState<Burger[]>([]);

  const fetchData = async () => {
    const data = await fetchBurgers();
    setBurgers(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <PageWrapper title="Admin">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Ingerdients</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell sx={{ width: "65px" }} />
              <TableCell sx={{ width: "85px" }} />
            </TableRow>
          </TableHead>
          <TableBody>
            {burgers.map((burger) => (
              <Row key={burger.id} burger={burger} refresh={fetchData} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AddModal refresh={fetchData} />
    </PageWrapper>
  );
};

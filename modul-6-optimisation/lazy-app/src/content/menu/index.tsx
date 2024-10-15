
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { PageWrapper } from "../../common/page-wrapper"
import { Burger } from '../../common/types';
import { fetchBurgers } from '../../services/fetch-burgers';

export const Menu = () => {
    const [burgers, setBurgers] = useState<Burger[]>([]);

    useEffect(() => {
        fetchBurgers()
            .then(data => {
                setBurgers(data);
            })
    }, []);

    return (
        <PageWrapper title="Menu">
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Ingerdients</TableCell>
                            <TableCell align="right">Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            burgers.map(burger => (
                                <TableRow key={burger.id}>
                                    <TableCell component="th" scope="row">
                                        <Link to={`/menu/${burger.id}`}>{burger.name}</Link>
                                    </TableCell>
                                    <TableCell>{burger.ingredients}</TableCell>
                                    <TableCell align="right">{burger.price}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </PageWrapper>
    )
}
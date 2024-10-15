import { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Burger, BurgerData } from '../../../common/types';
import { deleteBurger } from '../../../services/delete-burger';
import { updateBurger } from '../../../services';

type Props = { 
    burger: Burger, 
    refresh: () => Promise<void>,
}

type Cell = {
    label: string,
    id: 'name' | 'ingredients' | 'price',
    link?: (id: string) => string | string,
}

const cells: Cell[] = [
    { label: 'Name', id: 'name', link: (id) => `/menu/${id}` },
    { label: 'Ingredients', id: 'ingredients' },
    { label: 'Price', id: 'price' },
];

export const Row = ({ burger, refresh }: Props) => {
    const { id, ...restBurgerData } = burger;
    const [isEditing, setIsEditng] = useState<boolean>(false);
    const [formData, setFormData] = useState<BurgerData>(restBurgerData);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleDelete = () => {
        deleteBurger(id)
            .then(() => {
                refresh();
            })
    }

    const handleEdit = () => {
        setIsEditng(true);
    }

    const handleCancel = () => {
        setIsEditng(false);
    }

    const handleSave = () => {
        updateBurger(id, formData)
            .then(() => {
                setIsEditng(false);
                refresh();
            })
    }

    return isEditing
        ? (
            <TableRow>
                {cells.map(cell => (
                    <TableCell key={cell.id}>
                        <TextField label={cell.label} name={cell.id} value={formData[cell.id]} onChange={handleChange} />
                    </TableCell>
                ))}
                <TableCell>
                    <Button variant="contained" color="success" onClick={handleSave}>
                        Save
                    </Button>
                </TableCell>
                <TableCell>
                    <Button variant="contained" color="secondary" onClick={handleCancel}>
                        Cancel
                    </Button>
                </TableCell>
            </TableRow>
        ) 
        : (
            <TableRow>
                {cells.map(cell => (
                    <TableCell key={cell.id} align={cell.id === 'price' ? 'right' : 'left'}>
                        {cell.link 
                            ? <Link to={cell.link(id)}>{burger[cell.id]}</Link>
                            : burger[cell.id]
                        }
                    </TableCell>
                ))}
                <TableCell>
                    <Button variant="contained" color='primary' onClick={handleEdit}>
                        Edit
                    </Button>
                </TableCell>
                <TableCell>
                    <Button variant="contained" color='error' onClick={handleDelete}>
                        Delete
                    </Button>
                </TableCell>
            </TableRow>
        )
}
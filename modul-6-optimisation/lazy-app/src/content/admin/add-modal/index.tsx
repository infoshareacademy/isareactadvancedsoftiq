import { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import Icon from '@mui/material/Icon';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { addBurger } from '../../../services/add-burger';
import { BurgerData } from '../../../common/types';

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 15px;
    margin-right: 15px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

function AddFormDialog({ isOpen, handleClose, refresh }: { isOpen: boolean, handleClose: () => void, refresh: () => Promise<void>}) {
    const { handleSubmit, register } = useForm<BurgerData>();

    const onSubmit = handleSubmit((data) => {
        addBurger(data)
            .then(() => {
                handleClose();
                refresh();
            })
    });

    return (
      <Dialog onClose={handleClose} open={isOpen} fullWidth>
        <DialogTitle>Add new burger</DialogTitle>
        <Form onSubmit={onSubmit}>
            <TextField label="Name" {...register('name')} />
            <TextField label="Ingredients" {...register('ingredients')} />
            <TextField label="Price" type="number" {...register('price')} />
            <TextField label="Image url" {...register('url')} />
            <Button sx={{ marginBottom: '15px'}} type="submit">Add</Button>
        </Form>
      </Dialog>
    );
  }

export const AddModal = ({ refresh }: { refresh: () => Promise<void> }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleClickOpen = () => {
        setIsOpen(true);
    };
  
    const handleClose = () => {
        setIsOpen(false);
    };
  
    return (
      <Container>
        <Fab color="primary" onClick={handleClickOpen}>
          <Icon>add</Icon>
        </Fab>
        <AddFormDialog isOpen={isOpen} handleClose={handleClose} refresh={refresh} />
      </Container>
    )
}
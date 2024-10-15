import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { PageWrapper } from "../../common/page-wrapper"
import { BurgerData } from '../../common/types';
import { fetchBurger } from '../../services/fetch-burgers';

export const Details = () => {
    const [burger, setBurger] = useState<BurgerData | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    const { id } = useParams();

    useEffect(() => {
        if (id !== undefined) {
            fetchBurger(id)
                .then(data => {
                    if (data === null) {
                        setError(new Error('The value is null'))
                    } else {
                        setBurger(data)
                    }
                })
                .catch((err) => {
                    setError(err)
                })
                .finally(() => {
                    setIsLoading(false)
                })
        }
    }, [id]);

    if (error) {
        return <PageWrapper title='There is no such burger!' />
    }

    return (
        <PageWrapper title={burger?.name}>
            {
                isLoading  
                    ? <CircularProgress />
                    : <>
                        <Avatar 
                            alt="burger" 
                            src={burger?.url || 'https://cdn-icons-png.flaticon.com/512/3075/3075977.png'} 
                            sx={{ width: 150, height: 150, margin: '15px 0' }} 
                        />
                        <Typography variant="h5">{burger?.ingredients}</Typography>
                        <Typography variant="h6">{burger?.price}</Typography>
                    </>
            }
        </PageWrapper>
    )
}
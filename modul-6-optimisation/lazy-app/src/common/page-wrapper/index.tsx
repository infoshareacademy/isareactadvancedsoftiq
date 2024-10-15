import {FC, ReactNode} from 'react';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    margin-right: 30px;
    margin-left: 30px;
`;

export const PageWrapper: FC<{ title?: string, children?: ReactNode}> = ({ title, children }) => (
    <Container>
        {title && <Typography variant="h5" sx={{ textAlign: 'center' }}>{title}</Typography>}
        {children}
    </Container>
)
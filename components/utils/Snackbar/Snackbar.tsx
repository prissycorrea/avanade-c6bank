import React, {useState} from 'react';
import {Stack, Snackbar as Container, AlertColor} from '@mui/material'; //"as a Container" é um apelido para o componente no caso de conflito de nomes
import Alert from '../Alert'

//enum
// enum SeverityColor {
//     a = 'success',
//     b = 'info',
//     c = 'warning',
//     d = 'error'
// }

//open, hide, message, severity
type SnackbarProps = {
    open: boolean;
    hide: number;
    message: string;
    severity: AlertColor; //enum
}

export default function Snackbar(props: SnackbarProps) {
    const [open, setOpen] = useState<boolean>(props.open);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Stack>
        <Container open={open} autoHideDuration={props.hide * 1000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={props.severity?props.severity:"success"} sx={{ width: '100%' }}>
                {props.message}
            </Alert>
        </Container>
        </Stack>
    )
}

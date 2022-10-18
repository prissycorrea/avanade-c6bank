import React, { useState } from 'react';
import { Container, 
    CssBaseline
} from '@mui/material';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Copyright from '../components/utils/Copyright';
import Register from '../components/Form/Register';

const theme = createTheme();

export default function RegisterPage() {
    const [open, setOpen] = useState<boolean>(false);
    
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs"> {/*ele vai ser o main*/}
                <CssBaseline />
                <Register />
                <Copyright site="avanade" />
            </Container>
        </ThemeProvider>
    )
}

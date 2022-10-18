import React, { useState } from 'react';
import { Container, 
    CssBaseline
} from '@mui/material';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Copyright from '../components/utils/Copyright';
import Login from '../components/Form/Login';

const theme = createTheme();

export default function LoginPage() {
    const [open, setOpen] = useState<boolean>(false);
    
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs"> {/*ele vai ser o main*/}
                <CssBaseline />
                <Login />
                <Copyright site="avanade" />
            </Container>
        </ThemeProvider>
    )
}

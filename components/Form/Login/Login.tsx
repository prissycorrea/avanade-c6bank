import React, {useState, useEffect, FormEvent} from 'react';
import {Typography, 
    Button, 
    TextField, 
    Checkbox, 
    Box, 
    FormControlLabel
} from '@mui/material';
import Link from 'next/link';
import Snackbar from '../../utils/Snackbar';

export default function Login() {
    const [email, setEmail] = useState<string | null>(''); //pode ser string ou null
    const [error, setError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [contador, setContador] = useState<number>(0);
    const [password, setPassword] = useState<string | undefined | null | FormDataEntryValue>('');
    const [open, setOpen] = useState<boolean>(false);
    
    //handle = manipula
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        //previne o comportamento padrão do formulário
        event.preventDefault();
        const data = new FormData(event.currentTarget); //FORMDATA é nativo do JS, não do React
        setPassword(data.get('password'))
    }

    useEffect(() => {
        if(password && password.length < 6) {
            setError(true);
            setErrorMessage('A senha deve ter pelo menos 6 caracteres');
        } else if(password) {
            setError(false);
            setErrorMessage('');

            //chamar a API do server para validar o login e senha
            //se estiver tudo certo, redireciona para a página de extrato

            //adicionar o snackbar
            setOpen(true);
            //fazer o redirect
        }
    },[password]);

    return(
    <Box sx={{mt:8, 
        display:'flex', 
        flexDirection:'column', 
        alignItems:'center'}}>
        <Typography component="h1" variant="h5"> {/*ele vai ser um h1 com aparencia de h5*/}
            Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{mt:1}}>
            <TextField autoFocus margin="normal" required fullWidth label="Digite o login" id="email" name="email" autoComplete="email" />
            <TextField margin="normal" required fullWidth type="password" label="Digite a senha"  name="password" id="password" autoComplete="current-password" />
            <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Lembrar-me" />
            <Link href="#">Esqueci a senha</Link>
            <Button type="submit" fullWidth variant="contained" sx={{mt:3, mb:2}}>
                Login
            </Button>
            {error && <Typography color="error">{errorMessage}</Typography>}
            {open && <Snackbar open={open} hide={5} message={"Login efetuado com sucesso"} severity="success" />}
        </Box>
    </Box>
    )
}

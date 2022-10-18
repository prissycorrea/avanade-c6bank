import React, {useState, useEffect, FormEvent} from 'react';
import {Typography, 
    Button, 
    TextField, 
    Box
} from '@mui/material';
import Snackbar from '../../utils/Snackbar';

export default function Register() {
    const [email, setEmail] = useState<string | null>(''); //pode ser string ou null
    const [error, setError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [password, setPassword] = useState<string | undefined | null | FormDataEntryValue>('');
    const [open, setOpen] = useState<boolean>(false);
    const [confirmPassword, setConfirmPassword] = useState<string | undefined | null | FormDataEntryValue>('');
    
    //handle = manipula
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        //previne o comportamento padrão do formulário
        event.preventDefault();
        const data = new FormData(event.currentTarget); //FORMDATA é nativo do JS, não do React
        setPassword(data.get('password'))
        setConfirmPassword(data.get('confirmPassword'))
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

    useEffect(() => {
        if(password && confirmPassword) {
            if(password !== confirmPassword) {
                setError(true);
                setErrorMessage('As senhas não conferem');
                setOpen(false);
            } else {
                setError(false);
                setErrorMessage('');
                setOpen(true);
            }
            
        }
    },[password, confirmPassword]);

    return(
    <Box sx={{mt:8, 
        display:'flex', 
        flexDirection:'column', 
        alignItems:'center'}}>
        <Typography component="h1" variant="h5"> {/*ele vai ser um h1 com aparencia de h5*/}
            Cadastre-se
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{mt:1}}>
            <TextField autoFocus margin="normal" required fullWidth label="Nome completo" id="fullName" name="fullName" autoComplete="fullName" />
            <TextField autoFocus margin="normal" required fullWidth label="Digite o login" id="email" name="email" autoComplete="email" />
            <TextField margin="normal" required fullWidth type="password" label="Digite a senha"  name="password" id="password" autoComplete="current-password" />
            <TextField margin="normal" required fullWidth type="password" label="Confirme a senha"  name="confirmPassword" id="confirmPassword" />
            <Button type="submit" fullWidth variant="contained" sx={{mt:3, mb:2}}>
                Cadastrar
            </Button>
            {error && <Typography color="error">{errorMessage}</Typography>}
            {open && <Snackbar open={open} hide={5} message={"Cadastro efetuado com sucesso"} severity="success" />}
        </Box>
    </Box>
    )
}


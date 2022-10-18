import { Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

type CopyProps = {
    site?: string;
}

export default function Copyright(props: CopyProps) {
    return (
        <Typography>
            {'Copyright ©️ '}
            <Link color="inherit" href={`https://www.${props.site}.com`}>
            {props.site}
            </Link>
            {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
};
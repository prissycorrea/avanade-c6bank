import React from 'react';
import styled from '@emotion/styled';
import { Avatar } from '@mui/material';
import {CopySvg} from '../svg/CopySvg';

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 400px;
    background-color: #242424;
    color: #f8f8f8;
    h2, h3 {
        margin:0;
    }
`
const Account = styled.div`
    display: flex;
    align-items: center;
    width: 80%;
    border: solid 0.5px #888;
    border-radius: 2px;
    margin-top: 5%;
    div:first-child {
        width: 80%;
        padding-left: 20px;
        & > div {
          width: 100%;
          cursor: pointer;
        }
    }
`

type ProfileProps = {
  name: string;
  role: string;
  agency: string;
  accountNumber: string;
}

export default function Profile(props: ProfileProps) {
  return (
    <ProfileContainer>
      <Avatar alt={props.name} src="https://avatars.githubusercontent.com/u/99624784?v=4" sx={{width: 100, height: 100}}/>
      <h2>{props.name}</h2>
      <h3>{props.role}</h3>
      <Account>
        <div>
          <p>336 - Banco C6 S.A.</p>
          <p>Ag: {props.agency} C/C: {props.accountNumber}</p>
        </div>
        <div>
          <CopySvg />
        </div>
      </Account>
    </ProfileContainer>
  )
}

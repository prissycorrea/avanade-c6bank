import React from 'react';
import styled from '@emotion/styled';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

const ExtractHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    width: 100%;
`

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const Button = styled.button`
  background: #fff;
  color: #242424;
  width: 100px;
  font-size: 0.9em;
  border-radius: 8px;
  height: 35px;
  border: 2px solid #242424;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: #242424;
    color: #fff;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
`;

export default function ExtractHeader() {
  return (
    <ExtractHeaderContainer>
      <h1>Extrato</h1>
      <ButtonsContainer>
        <Button>7 dias</Button>
        <Button>15 dias</Button>
        <Button>30 dias</Button>
        <Button><CalendarMonthIcon fontSize="small"/>Período</Button>
      </ButtonsContainer>
      <ButtonsContainer>
        <Button><ArrowDownwardOutlinedIcon fontSize="small"/>Entradas</Button>
        <Button><ArrowUpwardOutlinedIcon fontSize="small"/>Saídas</Button>
      </ButtonsContainer>
    </ExtractHeaderContainer>
  )
}

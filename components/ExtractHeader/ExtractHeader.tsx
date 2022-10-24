import React from 'react';
import styled from '@emotion/styled';

const ExtractHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`

const Button = styled.button`
  background: #fff;
  color: #242424;
  width: 100px;
  font-size: 1.3em;
  border-radius: 8px;
`;

export default function ExtractHeader() {
  return (
    <ExtractHeaderContainer>
      <h1>Extrato</h1>
      <Button>7 dias</Button>
    </ExtractHeaderContainer>
  )
}

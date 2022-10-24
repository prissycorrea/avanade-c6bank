import React, { useState } from 'react';
import styled from '@emotion/styled';
import {ShowSvgB} from '../svg/ShowSvg';
import {HideSvg} from '../svg/HideSvg';

const BalanceContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 180px;
    color: #f8f8f8;
    background: #242424;
    padding-left: 30px;
    padding-bottom: 30px;
    & > div > strong {
        font-size: 1.8rem;
        margin-right: 10%;
    }
    & > div button {
      border: none;
      background: transparent;
      color: #f8f8f8;
      outline: none;
      position: absolute;
      right: 30px;
      cursor: pointer;
    }
`;

type BalanceProps = {
  amount: number;
}

export default function Balance(props: BalanceProps) {
  const [show, setShow] = useState<boolean>(false);
  return (
    <BalanceContainer>
      <p>Saldo</p>
      <div>
        {show ?
        <strong>
          {new Intl.NumberFormat('pt-br', {style: 'currency', currency:'BRL'}).format(props.amount)}
        </strong> 
          :
          <strong>R$ ******,**</strong>
        }
        <button onClick={() => setShow(!show)}>{show ? <HideSvg/> : <ShowSvgB/>}</button>
      </div>
    </BalanceContainer>
  )
}

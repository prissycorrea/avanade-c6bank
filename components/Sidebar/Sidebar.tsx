import React from 'react';
import Profile from '../Profile';
import styled from '@emotion/styled';
import Balance from '../Balance';
import Menu from '../Menu';

const SideBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 450px;
    height: 100vh;
    background: #242424;
    position: fixed;
`


export default function Sidebar() {
    return (
      <SideBarContainer>
        <Profile name="Priscilla Correa" role="FullStack Developer Intern" agency="001" accountNumber='123456'/>
        <Balance amount={190000}/>
        <Menu />
      </SideBarContainer>
    )
}

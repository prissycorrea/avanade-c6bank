import styled from '@emotion/styled';
import React from 'react';
import ExtractContent from '../components/ExtractContent';
import Sidebar from '../components/Sidebar';

const ExtractContainer = styled.div`
    display: flex;
    width: 100%;
    min-height: 100vh;
`;	

export default function ExtractPage() {
    return (
        <ExtractContainer>
            <Sidebar/>
            <ExtractContent />
        </ExtractContainer>
    )
}

/*
extractContainer - red
extractHeader - green
extractTotal - purple (mesmo componente no inicio e final da página)
extractData - blue*/
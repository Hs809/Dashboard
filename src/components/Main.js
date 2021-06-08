import React from 'react'
import styled from 'styled-components'
import Dashboard from './Dashboard'
import Header from './Header'
import Sideinfo from './Sideinfo'

function Main() {
    return (
        <Container>
            <Header />
            <Divider>
                <Dashboard />
                <Sideinfo />
            </Divider>
            
            
        </Container>
    )
}

export default Main
const Container = styled.div``
const Divider = styled.div`
    display:grid;
    grid-template-columns: 2fr 1fr;
    margin-left:40px;
    @media (max-width: )

`

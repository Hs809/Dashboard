import React from 'react'
import SideHeader from './SideHeader'
import Sideinformation from './Sideinformation'
import styled from 'styled-components'

function Sideinfo() {
    return (
        <Container>
            <SideHeader />
            <Sideinformation />
        </Container>
    )
}

export default Sideinfo
const Container = styled.div`
    display:grid;
    grid-template-rows:50px 1fr;
    margin-left:19px;
    
`

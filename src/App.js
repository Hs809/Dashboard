import React from 'react'
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import styled from 'styled-components'

function App() {
  const Container = styled.div`
  display:grid;
  grid-template-columns:50px 1fr;
  
`
  return (
    <Container className="App">
      <Sidebar />
      <Main />
     
    </Container>
  );
}

export default App;
const Container = styled.div`
  display:grid;
  grid-template-columns:50px 1fr;
  
`
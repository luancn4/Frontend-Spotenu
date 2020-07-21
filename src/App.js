import React from 'react';
import Main from "./containers/Main"
import NavBar from "./containers/NavBar"
import Footer from "./containers/Footer"
import styled from "styled-components"

const Container = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 1fr;
  grid-template-rows: 1fr 0.2fr;
  min-height: 100vh;
  min-width: 100vw;
`

function App() {
  return (
    <Container>
      <NavBar/>
      <Main/>
      <Footer/>
    </Container>
  );
}

export default App;

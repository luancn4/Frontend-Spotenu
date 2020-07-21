import React, { Component } from "react";
import styled from "styled-components";

const Nav = styled.div`
  grid-area: nav;

`;

class NavBar extends Component {
  render() {
    return <Nav>Oi da navbar</Nav>;
  }
}

export default NavBar;

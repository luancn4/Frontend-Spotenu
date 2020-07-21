import React, { Component } from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  grid-area: footer;

`;

class Footer extends Component {
  render() {
    return <FooterDiv>Oi do footer</FooterDiv>;
  }
}

export default Footer;

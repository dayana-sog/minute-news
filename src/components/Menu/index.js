import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import logo from '../../assets/logo-minuto.png';

import { Container, WrapperMenu } from './styles';

function Menux() {
  return (
    <Container>
      <WrapperMenu>
        <img src={logo} alt="logo" />

        <ul>
          <AnchorLink href="/">Início</AnchorLink>
          <AnchorLink offset="250" href="#">
            Brasil
          </AnchorLink>
          <AnchorLink href="#internatinal">Mundo</AnchorLink>
          <AnchorLink href="/">Blogs</AnchorLink>
          <AnchorLink href="/">Assine</AnchorLink>
        </ul>
      </WrapperMenu>
    </Container>
  );
}

export default Menux;

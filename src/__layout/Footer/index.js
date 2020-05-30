import React from 'react';

import logo from '../../assets/logo-minuto.png';

import { Container, WrapperFooter, Copy } from './styles';

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Container>
      <img src={logo} alt="logo" />

      <WrapperFooter>
        <Copy>© Copyright {year} Minuto News S.A</Copy>

        <ul>
          <li>princípios editoriais</li>
          <li>política de privacidade</li>
          <li>minha conta</li>
          <li>anuncie conosco</li>
        </ul>
      </WrapperFooter>
    </Container>
  );
}

export default Footer;

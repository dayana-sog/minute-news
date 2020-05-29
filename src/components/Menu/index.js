import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { AiOutlineCaretDown } from 'react-icons/ai';

import logo from '../../assets/logo-minuto.png';

import { Container, WrapperMenu, NotificationList } from './styles';

function Menu() {
  const [visible, setVisible] = useState(false);

  function handleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <WrapperMenu>
        <img src={logo} alt="logo" />

        <ul>
          <AnchorLink href="/">Início</AnchorLink>
          <AnchorLink offset="250" href="#">
            Brasil
            <button type="button" onClick={handleVisible}>
              <AiOutlineCaretDown size={18} color="#333" />
            </button>
            {visible ? (
              <NotificationList visible={visible}>
                <li>SubMenu 1</li>
                <li>SubMenu 2</li>
                <li>SubMenu 3</li>
                <li>SubMenu 4</li>
                <li>SubMenu 5</li>
              </NotificationList>
            ) : null}
          </AnchorLink>
          <AnchorLink href="#internatinal">Mundo</AnchorLink>
          <AnchorLink href="/">Blogs</AnchorLink>
          <AnchorLink href="/">Assine</AnchorLink>
        </ul>
      </WrapperMenu>
    </Container>
  );
}

export default Menu;

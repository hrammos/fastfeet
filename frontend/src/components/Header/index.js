import React from 'react';
import { useDispatch } from 'react-redux';

import logo from '~/assets/fastfeet-logo-header.svg';

import { Container, Content, NavItem } from './styles';

import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Fastfeet" />
          <NavItem to="/orders">ENCOMENDAS</NavItem>
          <NavItem to="/deliverymans">ENTREGADORES</NavItem>
          <NavItem to="/recipients">DESTINATÁRIOS</NavItem>
          <NavItem to="/problems">PROBLEMAS</NavItem>
        </nav>
        <aside>
          <div>
            <strong>Admin Fastfeet</strong>
            <button type="button" onClick={handleSignOut}>
              sair do sistema
            </button>
          </div>
        </aside>
      </Content>
    </Container>
  );
}

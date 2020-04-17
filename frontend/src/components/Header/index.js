import React from 'react';
import { useDispatch } from 'react-redux';

import logo from '~/assets/fastfeet-logo-header.svg';

import { Container, Content, Nav } from './styles';

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
          <Nav to="/orders">ENCOMENDAS</Nav>
          <Nav to="/deliverymans">ENTREGADORES</Nav>
          <Nav to="/recipients">DESTINATÁRIOS</Nav>
          <Nav to="/problems">PROBLEMAS</Nav>
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

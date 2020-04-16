import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/fastfeet-logo-header.svg';

import { Container, Content } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Fastfeet" />
          <Link to="/orders">ENCOMENDAS</Link>
          <Link to="/deliverymans">ENTREGADORES</Link>
          <Link to="/recipients">DESTINATÁRIOS</Link>
          <Link to="/problems">PROBLEMAS</Link>
        </nav>
        <aside>
          <div>
            <strong>Admin Fastfeet</strong>
            <Link to="/">sair do sistema</Link>
          </div>
        </aside>
      </Content>
    </Container>
  );
}

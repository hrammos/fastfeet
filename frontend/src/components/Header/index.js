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
          <Link to="/orders">Encomendas</Link>
          <Link to="/deliverymans">Entregadores</Link>
          <Link to="/recipients">Destinatários</Link>
          <Link to="/problems">Problemas</Link>
        </nav>
        <aside>
          <div>
            <strong>Admin Fastfeet</strong>
            <Link to="/">Sair do sistema</Link>
          </div>
        </aside>
      </Content>
    </Container>
  );
}

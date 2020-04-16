import React from 'react';
import { MdAdd } from 'react-icons/md';

import { Container } from './styles';

export default function Order() {
  return (
    <Container>
      {/* Este vai ser o HeaderList: title, link */}
      <header>
        <h1>Gerenciando encomendas</h1>
        <div>
          <input type="text" placeholder="Buscar por encomendas" />
          <button type="button">
            <MdAdd size={16} />
            CADASTRAR
          </button>
        </div>
      </header>
    </Container>
  );
}

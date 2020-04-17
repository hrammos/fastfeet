import React from 'react';
import { MdAdd } from 'react-icons/md';

import { Container, RecordTable } from './styles';

export default function Deliveryman() {
  return (
    <Container>
      {/* Este vai ser o HeaderList: title, link */}
      <header>
        <h1>Gerenciando entregadores</h1>
        <div>
          <input type="text" placeholder="Buscar por entregadores" />
          <button type="button">
            <MdAdd size={16} />
            CADASTRAR
          </button>
        </div>
      </header>

      <RecordTable>
        <thead>
          <th>ID</th>
          <th>Foto</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Ações</th>
        </thead>
        <tbody>
          <tr>
            <td>#01</td>
            <td>Destinatário lalsokei</td>
            <td>oajsiohuifff</td>
            <td>Alvorada</td>
            <td>...</td>
          </tr>
          <tr>
            <td>#01</td>
            <td>Destinatário lalsokei</td>
            <td>oajsiohuifff</td>
            <td>Alvorada</td>
            <td>...</td>
          </tr>
        </tbody>
      </RecordTable>
    </Container>
  );
}
